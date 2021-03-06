import request from "@/utils/request";

class Api {
  /*
   *登录：name, password
   */
  login(data) {
    return request({
      url: "/user/login",
      method: "post",
      data,
    });
  }

  getInfo(token) {
    return request({
      url: "/user/info",
      method: "get",
      params: { token },
      headers: { "Cache-Control": "no-store" },
    });
  }

  changeInfo(data) {
    return request({
      url: "/user/changeInfo",
      method: "post",
      data,
    });
  }
}

export const api = new Api();
