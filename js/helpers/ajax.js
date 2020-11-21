import axios from "axios";

class Ajax {
  constructor() {
    axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
  }

  get({ url, params }) {
    return axios({
      method: "get",
      url,
      params,
    });
  }

  post({ url, params, data }) {
    return axios({
      method: "post",
      url,
      params,
      data,
    });
  }
}

export default new Ajax();
