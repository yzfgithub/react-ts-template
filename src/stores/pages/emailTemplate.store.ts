import { EmailTemplateQueryModel, EmailTemplateModel } from '@/models';
import { makeAutoObservable, toJS } from 'mobx';
import * as api from '@/requests/emailTemplateApi';

export default class EmailTemplateStore {
  emailTemplateQueryForm: EmailTemplateQueryModel = {
    title: ""
  };
  mirrorEmailTemplateQueryForm = <EmailTemplateQueryModel>{}; // 保存镜像，用来查询
  paginationObj = {
    pageNum: 1,
    pageSize: 10,
    emailTemplateTotal: 0
  };
  emailTemplateList: EmailTemplateModel[] = [];
  loading = false;


  constructor() {
    makeAutoObservable(this);
  }

  initQueryData() {
    this.emailTemplateQueryForm = {
      title: ""
    };
    this.paginationObj = {
      pageNum: 1,
      pageSize: 10,
      emailTemplateTotal: 0
    };
    this.setMirrorEmailTemplateQueryForm();
  }

  resetQueryForm() {
    this.emailTemplateQueryForm = {
      title: ""
    };
  }

  setEmailTemplateQueryFormItem(obj: any) {
    this.emailTemplateQueryForm = Object.assign({}, this.emailTemplateQueryForm, obj);
  }
  setPaginationItem(obj: any) {
    this.paginationObj = Object.assign({}, this.paginationObj, obj);
  }

  setMirrorEmailTemplateQueryForm() {
    this.mirrorEmailTemplateQueryForm = this.emailTemplateQueryForm;
  }

  async getEmailTemplateList() {
    const params = <EmailTemplateQueryModel>toJS(this.mirrorEmailTemplateQueryForm);
    this.loading = true;
    params.pageSize = this.paginationObj.pageSize;
    params.pageNum = this.paginationObj.pageNum;
    const res = await api.getEmailTemplateList(params);
    console.log('res:',res)
    this.loading = false;
    this.emailTemplateList = res?.data?.data ?? [];
    this.paginationObj.emailTemplateTotal = res?.data?.total ?? 0;
  }

}
