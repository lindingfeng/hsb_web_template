export const isWin = () => {
  const n = window.navigator.userAgent;
  return n.indexOf('Windows') > -1;
};

export const isWechat = () => {
  const n = window.navigator.userAgent;
  return /MicroMessenger/i.test(n);
};

export const isAliAPP = () => {
  const n = window.navigator.userAgent;
  return /Alipay/i.test(n);
};

export const isAliAPPAll = () => {
  const n = window.navigator.userAgent;
  return /AliAPP/i.test(n);
};

export const isIos = () => {
  const n = window.navigator.userAgent;
  return /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(n);
};

export const isAndroid = () => {
  const n = window.navigator.userAgent;
  return /(android)|(Android)|(Adr)/i.test(n);
};

export const isBankAbc = () => {
  const n = window.navigator.userAgent;
  return /Bankabc/i.test(n);
};

export const isMiniProgram = () => {
  return new Promise((resolve, reject) => {
    const ready = () => {
      resolve(window.__wxjs_environment === 'miniprogram');
    };

    if (isWechat()) {
      if (!window.WeixinJSBridge || !window.WeixinJSBridge.invoke) {
        document.addEventListener('WeixinJSBridgeReady', ready, false);
      } else {
        ready();
      }
      return;
    }
    resolve(false);
  });
};

export const isAndroid5 = () => {
  const n = window.navigator.userAgent;
  return /(Android 5)|(Android5)|(Adr 5)|(Adr5)/i.test(n);
};

export const isHwApp = (userAgent) => {
  const n = userAgent || window.navigator.userAgent;
  return /VMall-APK/i.test(n);
};

export const isDingTalk = (userAgent) => {
  const n = userAgent || window.navigator.userAgent;
  return /DingTalk/i.test(n);
};

export const isHsbZybApp = (userAgent) => {
  const n = userAgent || window.navigator.userAgent;
  return /hsb_app_zyb/i.test(n);
};
