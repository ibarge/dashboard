import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import PropTypes from 'prop-types';


const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function Rtl({ children }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}


Rtl.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Rtl;
