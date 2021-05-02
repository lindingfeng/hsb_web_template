
import { isIos, isAndroid } from '@/utils/ua';

const sdk = {};

const magic = (name, options) => {
  const params = JSON.stringify(options) || '{}';
  if (isIos) {
    return window.webkit.messageHandlers[name].postMessage(params);
  }
  if (isAndroid) {
    return window.hsbpro_jscall[name](params);
  }
};

sdk.saveImage = options => {
  return magic('saveImage', options);
};

export default sdk;
