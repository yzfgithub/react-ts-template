import URL from 'url';
import { createBrowserHistory, createHashHistory, History } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { computed } from 'mobx';

// 单例模式，全局唯一
let instance: Router;

export class Router extends RouterStore {
  constructor() {
    super();
    if (instance) return instance;

    const appHistory: History = createBrowserHistory();
    syncHistoryWithStore(appHistory, this);
    instance = this;
  }

  // URL参数获取 router.query.search
  @computed
  get query() {
    const { search } = this.location;
    return search ? URL.parse(search, true).query : {};
    // return search;
  }
}

export default new Router();
