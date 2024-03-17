# Hãy làm theo các bước sau để cài đặt và thiết lập dự án

## 1. Điều kiện tiên quyết

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt các công cụ sau, lưu ý nếu đã cài các bước này trong máy tính trước đó rồi thì có thế bỏ qua bước này nhé.

- [Yarn](https://yarnpkg.com/): Chạy `yarn --version` để kiểm tra, cài đặt nếu chưa có.
- [Node.js](https://nodejs.org/): Chạy `node --version` để kiểm tra, cài đặt nếu chưa có. Phiên bản yêu cầu > 16.
- [Gulp](https://gulpjs.com/): Cài đặt với `npm install -g gulp` nếu chưa có trên hệ thống.
- [Git](https://git-scm.com/): Chạy `git --version` để kiểm tra, cài đặt nếu chưa có.

## 2. Cài đặt

| Lệnh       | Mô tả                                                        |
|------------|--------------------------------------------------------------|
| `yarn install` | Cài đặt tất cả các phụ thuộc cần thiết trong thư mục `node_modules`.   |
| `gulp`         | Khởi chạy máy chủ phát triển tại `http://localhost:3000` và theo dõi các thay đổi. |
| `gulp build`   | Tạo bản build sản phẩm trong thư mục `dist`.   
