import { makeAutoObservable } from 'mobx';
import * as api from '../requests/commonApi';

export default class CommonStore {

  pin: string = '';
  roleList: any = {};

  constructor() {
    makeAutoObservable(this);
  }


  async getAuthMenu() {
    const res = await api.getAuthMenu();
    this.pin = res?.data?.data?.pin;
    const roleList = res?.data?.data?.roleVos;
    this.roleList = roleList; // 保存角色列表，以备后期使用
  }

}
