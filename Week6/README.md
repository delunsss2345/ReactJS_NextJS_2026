# Week 6 - Redux Toolkit Lab

Ứng dụng React thuần cho Buổi 6, dùng `Redux Toolkit + React Redux + React Router`.

## Nội dung

- 10 bài tập, mỗi bài là một route riêng.
- State được tách theo `features/<ten-feature>/{slice,selector,store}`.
- Có các feature chính: `counter`, `theme`, `mock-auth`, `todo`, `cart`, `notification`, `users`, `search`, `auth`, `product`.
- Bài 7 đến bài 10 dùng API công khai từ `https://dummyjson.com`.

## Cách chạy

```bash
npm install
npm run dev
```

## Tài khoản mẫu cho bài 9 và bài 10

- Username: `emilys`
- Password: `emilyspass`

## Ghi chú

- Theme được lưu vào `localStorage`.
- Token auth cũng được lưu vào `localStorage` để có thể khôi phục session sau khi reload.
- Cart ở Bài 5 và Bài 10 dùng chung global state để thấy rõ tính chất chia sẻ dữ liệu của Redux.
