import productTable1 from "./assets/images/product-table1.jpg";
import supplierImage from "./assets/images/supplier-image.png";
import avatar1 from "./assets/images/avatar1.png";
import avatar2 from "./assets/images/avatar2.png";
import avatar3 from "./assets/images/avatar3.png";
import avatar4 from "./assets/images/avatar4.png";
import avatar5 from "./assets/images/avatar5.png";
import productImage1 from "./assets/images/product-new-image1.png";

export const discountProducts = {
  title: "Sản phẩm chiết khấu cao",
  columns: ["", "% chiết khấu", "Số tiền chiết khấu"],
  data: [
    {
      id: 1,
      image: productTable1,
      name: "Acquadi-Giò",
      discount: "32%",
      amount: "300.000",
    },
    {
      id: 2,
      image: productTable1,
      name: "Acquadi-Giò",
      discount: "30%",
      amount: "4.200.224",
    },
    {
      id: 3,
      image: productTable1,
      name: "Acquadi-Giò",
      discount: "12%",
      amount: "5.204.667",
    },
    {
      id: 4,
      image: productTable1,
      name: "Acquadi-Giò",
      discount: "15%",
      amount: "3.200.000",
    },
    {
      id: 5,
      image: productTable1,
      name: "Acquadi-Giò",
      discount: "22%",
      amount: "34.200.778",
    },
  ],
};

export const topSuppliers = {
  title: "Nhà cung cấp có doanh số cao",
  columns: ["", "Danh mục hàng hóa", "Doanh số"],
  data: [
    {
      id: 1,
      image: supplierImage,
      name: "Tik Tok",
      category: "Nước hoa",
      sales: "3.200.000",
    },
    {
      id: 2,
      image: supplierImage,
      name: "Giordano",
      category: "Hàng tiêu dùng",
      sales: "3.200.000",
    },
    {
      id: 3,
      image: supplierImage,
      name: "H&M",
      category: "Mỹ phẩm",
      sales: "44.200.654",
    },
    {
      id: 4,
      image: supplierImage,
      name: "Zara",
      category: "Thời trang",
      sales: "13.200.645",
    },
    {
      id: 5,
      image: supplierImage,
      name: "Facebook",
      category: "Công nghệ",
      sales: "34.232.000",
    },
  ],
};

export const topSellers = {
  title: "Nhà bán hàng có doanh số cao",
  columns: ["", "Doanh số", "Gói thành viên"],
  data: [
    {
      image: avatar1,
      id: 1,
      name: "Công Ken",
      sales: "30.000.000",
      membership: "VIP",
    },
    {
      id: 2,
      image: avatar2,
      name: "Minh Hoài",
      sales: "200.000",
      membership: "Normal",
    },
    {
      id: 3,
      image: avatar3,
      name: "Bé Nhiên",
      sales: "2.394.585",
      membership: "VIP",
    },
    {
      id: 4,
      image: avatar4,
      name: "Chim tu hú",
      sales: "23.323.987",
      membership: "VIP",
    },
    {
      id: 5,
      image: avatar5,
      name: "Tóc vàng hoe",
      sales: "244.329",
      membership: "Normal",
    },
  ],
};

export const newProducts = {
  title: "Sản phẩm mới",
  columns: ["", "% chiết khấu", "Tên nhà cung cấp"],
  data: [
    {
      id: 1,
      image: productImage1,
      name: "Kính chống ánh sáng xanh Xiaomi",
      discount: "15%",
      supplier: "Xiaomi Hàng Cót",
    },
    {
      id: 2,
      image: productImage1,
      name: "Kính mắt Rayban",
      discount: "20%",
      supplier: "Rayban đỉnh khoác",
    },
    {
      id: 3,
      image: productImage1,
      name: "Áo t-shirt",
      discount: "Thời trang",
      supplier: "Tee&Tee",
    },
    {
      id: 4,
      image: productImage1,
      name: "Áo t-shirt",
      discount: "Thời trang",
      supplier: "Tee&Tee",
    },
    {
      id: 5,
      image: productImage1,
      name: "Giày Nike",
      discount: "Thời trang",
      supplier: "Nike",
    },
  ],
};

export const newSuppliers = {
  title: "Nhà cung cấp mới",
  columns: ["", "Danh mục hàng hóa"],
  data: [
    {
      id: 1,
      image: avatar2,
      name: "Cô gái bán giò",
      category: "Thời trang",
    },
    {
      id: 2,
      image: avatar2,
      name: "Cô nàng chân ngắn",
      category: "Hàng tiêu dùng",
    },
    {
      id: 3,
      image: avatar2,
      name: "Sao vàng 5 cánh",
      category: "Thời trang",
    },
    {
      id: 4,
      image: avatar2,
      name: "Bán chuối chiên",
      category: "Dụng cụ nhà cửa",
    },
    {
      id: 5,
      image: avatar2,
      name: "Sản xuất hàng hiệu",
      category: "Công nghệ",
    },
  ],
};