/**
 * Created by hong on 2018/2/9.
 */

export default {
  base_url: 'http://111.230.174.196:8001/',

  get: function (http, url, data, _callback) {
    var param ="?"
    if (data) {
      for (let key in data) {
        param += (key + '=' + data[key])
      }
    }

    http.get(this.base_url + url + param).then((res) => {

      res = res.body;
      typeof res === 'string' && JSON.parse(res);
      if (res.code === 200) {
        _callback(res.data)

      }
    })
  },

  post: function (http, url, data, _callback) {
    http.post(url, data).then((res) => {
      if (res.code === 200) {
        _callback(res.data)
      }
    })
  }
}
