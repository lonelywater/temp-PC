import axios from 'axios'
import qs from 'qs'
import {router} from 'src/main'
import store from 'src/store'

//axios配置
axios.defaults.timeout = 30000;
//axios.defaults.baseURL = 'http://www.zifae.net';
//测试环境
//axios.defaults.baseURL = 'http://116.193.49.90/cms/service';
axios.defaults.baseURL = window.$global.baseUrl;


/*---请求封装---*/
const get = (url, params = {}) => {
	return new Promise( async (resolve, reject) => {
		try {
			let res = await axios.get( url, {
				params: {
					...params,
				}
			})
			resolve(res.data);
		} catch (err) {
			reject(err);
		}
	}).catch( err => {
		return err;
	})
}

const post = (url, data = {}) => {
	return new Promise(async (resolve, reject) => {
		try {
			//数据格式化并转换可能存在的数组参数
			data = qs.stringify(data,{indices: false});
			let res = await axios.post(url, data);
			resolve(res.data);
		} catch (err) {
			reject(err);
		}
	}).catch( err => {
		return err;
	})
}

const form = (url, data = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = null;
      let fData = null;
      if(!data.delete){
        fData = new FormData();
        for(let attr in data){
          fData.append(attr, data[attr]);
        }
      }
      else{
        fData = data;
      }

      res = await axios({
        method:'post',
        url:url,
        headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},
        data:fData
      });


      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  })
};

export { axios, get, post, form}