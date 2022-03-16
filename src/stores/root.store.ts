import { makeAutoObservable } from 'mobx';
import CommonStore from './common.store';
import RouterStoreInstance from './router.store';
import EmailTemplateStore from './pages/emailTemplate.store'

export class RootStore {
  common = new CommonStore();
  // contractStore = new ContractStore();
  // contractDetailStore = new ContractDetailStore();
  emailTemplateStore = new EmailTemplateStore();
  router = RouterStoreInstance;
  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
