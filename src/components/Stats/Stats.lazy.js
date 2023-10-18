import React, { lazy, Suspense } from 'react';

const LazyStats = lazy(() => import('./Stats'));

const Stats = props => (
  <Suspense fallback={null}>
    <LazyStats {...props} />
  </Suspense>
);

export default Stats;
