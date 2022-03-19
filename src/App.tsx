import React, { useState, useEffect } from 'react';
import rootStore, { StoreContext, useStore } from '@/stores';
import { Router, Route } from 'react-router-dom';
import Routes from './router';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import '@/styles/app.module.less';

const { history } = rootStore.router;
function App() {

  const { common, router } = useStore();
  useEffect(() => {
    common.getAuthMenu().then(() => {

    });
  }, []);

  return (
      <StoreContext.Provider value={rootStore}>
        <Layout history={history}></Layout>
        <Wrapper>
          <Router history={history}>
            <Routes />
          </Router>
        </Wrapper>
        
    </StoreContext.Provider>


  );
}

const Wrapper = styled.div`
  margin: 20px 20px 20px 240px;
  min-width: 1200px;
`

export default App;
