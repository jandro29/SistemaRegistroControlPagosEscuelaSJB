
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/inicio-control-de-pagos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28552, hash: '6832855b5f1c782a9acefa36e96fd2e830565d42f8063d1b6b53d005dfe51ec5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17140, hash: '061a94f1365ab5fff9b49dabcafa2cf0b7cb7d93f096a42fb9e9c8abba56a5f9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 33789, hash: '3a224b36c2e26f69d1f8fe494a40bdb4d61eb5ca41c664dc244f90dc23b1cbcb', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 87743, hash: '1f802feb6ab85dd6207370dcb43a7c0c5b8242325e7e9cff4d9d36f9cbcd6bda', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7RZDUIDJ.css': {size: 20324, hash: 'Doh3o+ALK0Y', text: () => import('./assets-chunks/styles-7RZDUIDJ_css.mjs').then(m => m.default)}
  },
};
