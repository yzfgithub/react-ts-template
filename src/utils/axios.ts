import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import store from '@/stores';
import { notification } from 'antd';

export interface ServiceData<T = any> {
  data: T;
  message?: string;
  total?: number;
  success: boolean;
}

// __APPID 商家中心生产/预发/测试环境有值
export const axiosInstance = axios.create({
  baseURL: `${__HOST}${__AppPath}`
});
axiosInstance.defaults.timeout = 30000;
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axiosInstance.defaults.withCredentials = true;

// http request 拦截器
axiosInstance.interceptors.request.use(
  req => {
    Object.assign(req.headers.common, {
      // ...
    });
    return req;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  res => {
    const errorTitle = res?.data?.errorTitle || '';
    if (res.status !== 200) {
      notification.error({
        message: errorTitle + '请求失败'
      });
      return Promise.reject(res);
    } else if (!res?.data?.success) {
      notification.error({
        message: errorTitle + '错误：' + res?.data?.message
      });
      return Promise.reject(res);
    }
    if (res?.data?.data) {
      if (!res?.data?.data?.success) {
        notification.error({
          message: `${errorTitle}错误：${res?.data?.data?.message}`
        });
        return Promise.reject(res?.data);
      }
      return res?.data;
    } else {
      notification.error({
        message: `${errorTitle}错误：未获取到数据`
      });
      return Promise.reject(res);
    }
  },
  error => {
    if (!error || !error.response || error.response.status == 401) {
      window.location.href = `${__LoginHost}${encodeURIComponent(window.location.href)}`;
    } else if (error.response.status > 400) {
      store.router.push(`/ErrorPage?code=${error.response.status}`);
    } else {
      store.router.push('/ErrorPage?code=500');
    }
    return Promise.reject(error);
  }
);

export default function <T = any>(config: AxiosRequestConfig): AxiosPromise<ServiceData<T>> {
  if (config.data) {
    config.data = [config.data];
  }
  if (!config.transformResponse) {
    config.transformResponse = [];
  }
  Array.isArray(config.transformResponse) &&
    config.transformResponse.push(data => ({
      ...JSON.parse(data || '{}'),
      errorTitle: config.errorTitle
    }));

  return axiosInstance(config).catch(function (res) {
    return res;
  });
}
