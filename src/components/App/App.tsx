import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';

/* istanbul ignore next */
// const Index = lazy(() => import('pages/Index/Index'));
/* istanbul ignore next */
const Viewer = lazy(() => import('pages/Viewer/Viewer'));
/* istanbul ignore next */
const Config = lazy(() => import('pages/Config/Config'));
/* istanbul ignore next */
const Sample = lazy(() => import('pages/Sample/Sample'));
/* istanbul ignore next */
const SampleConfig = lazy(() => import('pages/SampleConfig/SampleConfig'));

const App = () => (
  <Router>
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {/* <Route exact path='/' component={Index} /> */}
        <Route
          exact
          path='/'
          component={Sample}
        />
        <Route
          path='/viewer'
          component={Viewer}
        />
        <Route
          path='/config'
          component={Config}
        />
        <Route
          path='/sampleConfig'
          component={SampleConfig}
        />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
