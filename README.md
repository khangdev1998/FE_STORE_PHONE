# Dành cho các thành viên không chuyên về kỹ thuật.

Để xem giao diện website từ, làm theo các bước đơn giản sau:

1. **Download**: Nhấn vào `Code` trên trang GitHub và chọn `Download ZIP`. Sau khi tải về, giải nén tệp ZIP.

2. **Mở thư mục**: Trong thư mục giải nén, tìm và mở thư mục `dist`.

3. **Xem trang web**: Trong `dist`, tìm file `index.html` và mở nó bằng cách nhấp đúp vào file đó.

File `index.html` sẽ mở trong trình duyệt và bạn có thể xem trang web ngay lập tức.

# Dành cho bộ phận kĩ thuật. Hãy làm theo các bước sau để cài đặt và thiết lập dự án

## 1. Điều kiện tiên quyết
Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt các công cụ sau đây.

- [Yarn](https://yarnpkg.com/): Chạy `yarn --version` để kiểm tra, cài đặt nếu chưa có.
- [Node.js](https://nodejs.org/): Chạy `node --version` để kiểm tra, cài đặt nếu chưa có. Phiên bản yêu cầu > 16.
- [Gulp](https://gulpjs.com/): Cài đặt với `npm install -g gulp` nếu chưa có trên hệ thống.
- [Git](https://git-scm.com/): Chạy `git --version` để kiểm tra, cài đặt nếu chưa có.

## 2. Cài đặt
Sau khi hoàn thành các bước trên, bạn có thể chạy các lệnh sau vào terminal/command.

| Lệnh       | Mô tả                                                        |
|------------|--------------------------------------------------------------|
| `yarn install` | Cài đặt tất cả các phụ thuộc cần thiết trong thư mục `node_modules`.   |
| `gulp`         | Khởi chạy máy chủ phát triển tại `http://localhost:3000` và theo dõi các thay đổi. |
| `gulp build`   | Tạo bản build sản phẩm trong thư mục `dist`.   
