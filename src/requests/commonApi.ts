import axios from '@/utils/axios';

export async function getAuthMenu() {
    return axios({
      url: 'home/getAuthMenu',
      method: 'post',
      errorTitle: '获取菜单信息'
    });
  }


