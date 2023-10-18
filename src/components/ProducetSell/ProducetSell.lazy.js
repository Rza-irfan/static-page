import React, { lazy, Suspense } from 'react';

const LazyProducetSell = lazy(() => import('./ProducetSell'));

const ProducetSell = props => (
  <Suspense fallback={null}>
    <LazyProducetSell {...props} />
  </Suspense>
);

export default ProducetSell;
