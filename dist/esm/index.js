import { registerPlugin } from '@capacitor/core';
const BrotherPrint = registerPlugin('BrotherPrint', {
    web: () => import('./web').then(m => new m.BrotherPrintWeb()),
});
export * from './definitions';
export * from './web';
export { BrotherPrint };
//# sourceMappingURL=index.js.map