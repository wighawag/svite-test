import App from './App.svelte';

import {wallet} from "./stores/wallet"

console.log({wallet});

const app = new App({
  target: document.body,
});

export default app;
