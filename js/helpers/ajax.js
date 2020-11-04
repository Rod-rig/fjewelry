import axios from "axios";
import qs from "qs";

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
      data: qs.stringify(data),
    });
  }
}

export default new Ajax();
