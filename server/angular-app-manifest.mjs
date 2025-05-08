
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/proyecto-SJB/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyecto-SJB"
  },
  {
    "renderMode": 2,
    "route": "/proyecto-SJB/inicio-control-de-pagos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24416, hash: '44610e07c5b089ac9b934ec3b5116a5c74ec5e335918de0f4d560cd9bfaa7a37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: '4513fe03f51f3aabe9de41721dfa049d7f105c28c8ecd22d92807a69035b5d4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 27311, hash: '2539f96020ee35496effedaf265de88a9df723105d4e5ede5ac7378fda2a0586', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81630, hash: '3adb61d9a5f9799be47848c198a60a776dd3c8bf985655b6a846bec0572ca4b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FRBYJSFE.css': {size: 26270, hash: 'L6lRmaQpVeM', text: () => import('./assets-chunks/styles-FRBYJSFE_css.mjs').then(m => m.default)}
  },
};
