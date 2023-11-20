
// main.js
// import VueWcA from "./vueWcA/vueWcA";
// import VueWcB from "./vueWcB/vueWcB";
// import VueWcC from "./vueWcC/vueWcC";

// export { VueWcA, VueWcB, VueWcC }

const wcList = [
  {
    getModule: () => import('./vueWcA/vueWcA.js'),
    moduleName: 'VueWcA',
    customElName: 'vue-wc-a'
  },
  {
    getModule: () => import('./vueWcB/vueWcB.js'),
    moduleName: 'VueWcB',
    customElName: 'vue-wc-b'
  },
  {
    getModule: () => import('./vueWcC/vueWcC.js'),
    moduleName: 'VueWcC',
    customElName: 'vue-wc-c'
  },
]

export const loadWCModule = async (list) => {
  for (const wcName of list) {
    const WC = wcList.find(wc => wc.moduleName === wcName)
    if (WC) {
      const wcModule = await WC.getModule()
      customElements.define(WC.customElName, wcModule.default);
    }
  }
}