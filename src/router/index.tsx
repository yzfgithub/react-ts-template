import React, { Suspense } from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Loading from '@/components/Loading';

const HomePage = React.lazy(() => import('@/pages/Home/index'));
const EmailTemplatePage = React.lazy(() => import('@/pages/EmailTemplate/index'));


const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/HomePage" component={HomePage} />
      <Route exact path="/EmailTemplatePage" component={EmailTemplatePage} />
      <Redirect from="*" to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
