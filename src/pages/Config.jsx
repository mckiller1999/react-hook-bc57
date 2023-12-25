import axios from "axios";
export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";

//sử dụng axios interceptor (cấu hình chung cho tất cả các request và respone của các api)

export const http = axios.create({
  baseURL: "https://shop.cyberlearn.vn/api", //domain
  timeout: 30000, //thời gian tối đa của 1 request có thể đợi
});

//cấu hình cho tất cả request(dữ liệu gửi đi)
http.interceptors.request.use(
  (config) => {
    //xử lý config:object request gửi đi
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      abc: "abc",
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/**
 * status code
 * 200: request thành công về sever và đc trả về response (kết quả) về
 * 201: dữ liệu request thành công và đc khởi tạo (created)
 * 400: bad request (Đường dẫn không tồn tại)
 * 401: Unauthorize (ko có quyền truy cập vào api này - token ko hợp lệ)
 * 403: forbiden (token chưa đủ quyền truy cập => thường là cấp cao admin)
 * 404: not found (ko tìm thấy dữ liệu)(thường truyền sai id của get detail)
 *
 *
 * 500: Error in sever (xảy ra tại server)
 * +kiểm tra lại:
 * FE: kiểm tra dữ liệu có đúng format be yêu cầu ko và giấ trị có chuẩn như backend quy định ko
 * BE: kiểm tra tất cả logic code trên dữ lệu fe đưa ra
 */

//cấu hình cho tất cả respone(dữ liệu nhận về từ be)
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    //xử lý khi lỗi
    console.log(err);
    if (err.response?.status === 404) {
    } else if (err.response?.status === 404) {
    } else if (err.response?.status === 404) {
    } else if (err.response?.status === 404) {
    }
  }
);
