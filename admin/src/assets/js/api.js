function loadSuppliers() {
  $.ajax({
    url: "https://the100.vn/api/supplier",
    method: "GET",
    success: function (response) {
      var tableContent = "";
      $.each(response, function (index, supplier) {
        tableContent += createTableRow(supplier, index);
      });
      $("table tbody").html(tableContent);
      addDeleteEventListeners();
    },
    error: function () {
      console.error("The request encountered an error.");
    },
  });
}
loadSuppliers();

function createTableRow(supplier, index) {
  return `
      <tr>
        <td class="p-3">${index + 1}</td>
        <td class="p-3">${supplier.name}</td>
        <td class="p-3"><span class="py-2 px-3 badge ${
          supplier.status ? "bg-success" : "bg-secondary"
        }">${supplier.status ? "On" : "Off"}</span></td>
        <td class="p-3">${new Date(supplier.created_at).toLocaleString()}</td>
        <td class="p-3">${new Date(supplier.updated_at).toLocaleString()}</td>
        <td class="p-3"><button data-supplier-id="${
          supplier.id
        }" class="btn btn-md btn-outline-info edit-btn"><i class="bi bi-pencil-square"></i></button></td>
        <td class="p-3">
          <button class="btn btn-md btn-outline-danger delete-btn" data-id="${
            supplier.id
          }" data-name="${supplier.name}">
            <i class="bi bi-x-lg"></i>
          </button>
        </td>
        <td id="desc" class="d-none p-3">${supplier.description}</td>
        <td id="address" class="d-none p-3">${supplier.address}</td>
      </tr>
    `;
}

function addDeleteEventListeners() {
  $(".delete-btn").on("click", function () {
    var supplierId = $(this).data("id");
    var supplierName = $(this).data("name");

    showConfirmDeleteModal(supplierId, supplierName, this);
  });
}

$("#confirmDeleteButton").on("click", function () {
  var supplierId = $(this).data("id");
  var supplierName = $(this).data("name");

  $("#confirmDeleteModal").modal("hide");

  deleteSupplier(supplierId, supplierName);
});

function deleteSupplier(supplierId, supplierName) {
  $.ajax({
    url: "https://the100.vn/api/supplier?supplier_id=" + supplierId,
    method: "DELETE",
    success: function () {
      $('button[data-id="' + supplierId + '"]')
        .closest("tr")
        .remove();
      createToastMessage(
        `Nhà cung cấp ${supplierName} đã được xóa thành công!`
      );
    },
    error: function () {
      console.error("Lỗi khi xóa dữ liệu trên máy chủ.");
      createToastMessage(`Lỗi khi xóa nhà cung cấp ${supplierName}!`);
    },
  });
}

$("#id_name, #id_address, #id_description").on("input", function () {
  $(this).removeClass("is-invalid");
});

function validateForm() {
  let isValid = true;
  const fields = [
    { id: "#id_name", name: "Tên nhà cung cấp" },
    { id: "#id_address", name: "Địa chỉ" },
    { id: "#id_description", name: "Mô tả" },
  ];

  fields.forEach((field) => {
    const input = $(field.id);
    if (!input.val().trim()) {
      input.addClass("is-invalid");
      isValid = false;
    } else {
      input.removeClass("is-invalid");
    }
  });

  return isValid;
}

$("#saveChangesButton").on("click", function () {
  if (!validateForm()) {
    return;
  }

  var supplierData = {
    name: $("#id_name").val(),
    address: $("#id_address").val(),
    description: $("#id_description").val(),
    status: $("#flexSwitchCheckChecked").is(":checked"),
  };

  $.ajax({
    url: "https://the100.vn/api/supplier",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(supplierData),
    success: function (newSupplier) {
      loadSuppliers();
      console.log(newSupplier);
      $("#createSupplierModal").modal("hide");
      createToastMessage(`Nhà cung cấp ${newSupplier.name} đã được thêm`);
    },
    error: function (xhr) {
      console.error("Lỗi khi tạo dữ liệu: " + xhr.statusText);
    },
  });
});

function createToastMessage(message) {
  if ($("#toastPlacement").length === 0) {
    $("body").append(
      '<div class="toast-container position-fixed top-0 end-0 p-3" id="toastPlacement" style="z-index: 1010"></div>'
    );
  }

  var toastHTML = `
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Thông báo</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    </div>
  `;
  $("#toastPlacement").html(toastHTML);

  var toastEl = $(".toast");
  var toast = new bootstrap.Toast(toastEl[0]);
  toast.show();
}

$("#createSupplierModal").on("show.bs.modal", function (e) {
  $("#id_name").val("");
  $("#id_address").val("");
  $("#id_description").val("");
  $("#flexSwitchCheckChecked").prop("checked", true);
});

function showConfirmDeleteModal(supplierId, supplierName, button) {
  $("#confirmDeleteButton").data("id", supplierId);
  $("#confirmDeleteButton").data("name", supplierName);
  $("#confirmDeleteButton").data("button", button);

  // Hiển thị modal
  var confirmModal = new bootstrap.Modal(
    document.getElementById("confirmDeleteModal")
  );
  confirmModal.show();
}

// Edit
$(document).on("click", ".edit-btn", function () {
  var row = $(this).closest("tr");
  var supplierId = row.find(".delete-btn").data("id");
  var originalData = {
    name: row.find("td:eq(1)").text().trim(),
    address: row.find("#address").text().trim(),
    description: row.find("#desc").text().trim(),
    status: row.find(".badge").text().trim() === "On",
  };

  $("#edit_id_name").val(originalData.name);
  $("#edit_id_address").val(originalData.address);
  $("#edit_id_description").val(originalData.description);
  $("#edit_flexSwitchCheckChecked").prop("checked", originalData.status);

  $("#updateChangesButton")
    .prop("disabled", true)
    .data("supplierId", supplierId);

  $("#editSupplierForm").on(
    "input change",
    "input, textarea, checkbox",
    function () {
      var hasChanges =
        $("#edit_id_name").val() !== originalData.name ||
        $("#edit_id_address").val() !== originalData.address ||
        $("#edit_id_description").val() !== originalData.description ||
        $("#edit_flexSwitchCheckChecked").is(":checked") !==
          originalData.status;

      $("#updateChangesButton").prop("disabled", !hasChanges);
    }
  );

  $("#editSupplierModal").modal("show");
});

$("#updateChangesButton").on("click", function () {
  var supplierId = $(this).data("supplierId");
  var supplierData = {
    name: $("#edit_id_name").val(),
    address: $("#edit_id_address").val(),
    description: $("#edit_id_description").val(),
    status: $("#edit_flexSwitchCheckChecked").is(":checked"),
  };

  $.ajax({
    url: "https://the100.vn/api/supplier?supplier_id=" + supplierId,
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify(supplierData),
    success: function (response) {
      // Xử lý phản hồi thành công từ server
      $("#editSupplierModal").modal("hide");
      loadSuppliers();
      createToastMessage("Nhà cung cấp đã được cập nhật thành công.");
    },
    error: function (xhr, status, error) {
      // Xử lý lỗi từ server
      createToastMessage("Có lỗi xảy ra khi cập nhật nhà cung cấp.");
    },
  });
});

$("#updateChangesButton").on("click", function () {
  var supplierId = $(this).data("supplierId");
  var supplierData = {
    name: $("#edit_id_name").val(),
    address: $("#edit_id_address").val(),
    description: $("#edit_id_description").val(),
    status: $("#edit_flexSwitchCheckChecked").is(":checked"),
  };

  $.ajax({
    url: "https://the100.vn/api/supplier?supplier_id=" + supplierId,
    method: "PUT",
    contentType: "application/json",
    data: JSON.stringify(supplierData),
    success: function (response) {
      $("#editSupplierModal").modal("hide");
      loadSuppliers();
      createToastMessage("Nhà cung cấp đã được cập nhật thành công.");
    },
    error: function (xhr, status, error) {
      alert("Có lỗi xảy ra khi cập nhật nhà cung cấp.");
    },
  });
});
