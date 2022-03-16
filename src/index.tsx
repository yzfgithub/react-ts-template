import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


const asyncLoadModules:Promise<any>[] = [];
if(__MOCK) {
  asyncLoadModules.push(import('@/mock'))
}

if (asyncLoadModules.length) {
  Promise.all(asyncLoadModules).then(()=>{
    renderApp();
  })
}

