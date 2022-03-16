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
    // const roleMenuVoList = res?.data?.data?.roleMenuVoList || [];
    // const menuCodeList = new Set<string>();
    // const authMap = new Map();
    // const menus = parseMenus(roleMenuVoList, menuCodeList, authMap);
    // this.menuCodeList = menuCodeList;
    // this.authMap = authMap;
    // this.menus = menus;
    // res?.data?.success && location.pathname === '/ErrorPage' && (location.href = '/');
  }

}
