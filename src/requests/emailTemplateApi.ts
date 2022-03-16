import axios from '@/utils/axios';

export async function getEmailTemplateList(params: any) {
    return axios({
      url: 'message/getList',
      method: 'post',
      data: params,
      errorTitle: '邮件模版列表'
    });
  }