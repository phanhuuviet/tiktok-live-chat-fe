# 🚀 Base ReactJS Project

Đây là một dự án ReactJS khởi đầu được cấu hình sẵn với các công nghệ và thư viện phổ biến giúp bạn nhanh chóng bắt đầu phát triển một ứng dụng web hiện đại.

---

## 📦 Tính năng đã tích hợp

### 1. 🔗 React Router v6

-   Hỗ trợ routing theo cấu trúc module.
-   Đã cấu hình `RoleBasedRoute` để kiểm soát quyền truy cập theo vai trò người dùng.

### 2. 🔐 Role-Based Route

-   Kiểm tra quyền truy cập dựa vào role người dùng.
-   Tự động redirect đến trang login nếu chưa đăng nhập.
-   Trả về trang 404 nếu người dùng không có quyền truy cập.

### 3. 🌐 i18n - Đa ngôn ngữ

-   Sử dụng `react-i18next`.
-   Dễ dàng mở rộng thêm nhiều ngôn ngữ.
-   Tự động phát hiện và lưu ngôn ngữ người dùng chọn.

### 4. ✅ Formik + Yup

-   Tạo form mạnh mẽ với `Formik`.
-   Xác thực form với `Yup` đơn giản và rõ ràng.

### 5. 🧠 Redux Toolkit + Redux Saga

-   Cấu trúc chuẩn cho state management.
-   Tích hợp `redux-saga` để xử lý bất đồng bộ.
-   Sử dụng `Redux DevTools` để debug dễ dàng.

### 6. 🧰 Các hàm tiện ích chung (Common Utils)

-   Các hàm chuyển đổi, định dạng dữ liệu (`convert`).
-   Các hàm validate phổ biến (`validateEmail`, `validatePhoneNumber`,...).

### 7. 🧮 Thư viện hỗ trợ xử lý dữ liệu

-   **`date-fns`**: xử lý thời gian đơn giản, hiệu quả.
-   **`lodash`**: hỗ trợ thao tác với mảng, object, v.v.
-   **`big.js`**: xử lý các phép tính số học có độ chính xác cao, phù hợp với tiền tệ.

---

## 🧱 Cấu trúc thư mục

```bash
├── public/
├── src/
│   ├── assets/              Hình ảnh, icon, v.v.
│   ├── common/              Constants, custom hooks
│   ├── components/          Component dùng chung
│   ├── context/             React Context API
│   ├── layouts/             Các layout chính
│   ├── modules/
│   │   ├── auth/            Module xác thực người dùng (login, register)
│   │   └── example/         Một module tính năng ví dụ
│   │       ├── constants/   Chứa các hằng số dùng riêng cho module
│   │       ├── features/
│   │       │   └── example-main/
│   │       │       └── components/    Các component con dùng trong màn hình chính
│   │       ├── redux/
│   │       │   ├── actions/           Action creators
│   │       │   ├── hooks/             Custom redux hooks
│   │       │   ├── reducers/          Reducers
│   │       │   └── sagas/             Side effects
│   │       └── routes/
│   │           ├── config.jsx         Cấu hình path + quyền truy cập
│   │           └── index.jsx          Export route ra ngoài
│   ├── routes/             Cấu hình router chính
│   ├── stores/             Redux store, reducers, sagas
│   ├── utils/              Hàm xử lý, validate, convert,...
│   ├── constants/          Biến constant dùng toàn cục
│   └── App.jsx
```

---

## ▶️ Cách chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
# hoặc
yarn
```

### 2. Chạy project ở môi trường dev

```bash
npm run dev
# hoặc
yarn dev
```
