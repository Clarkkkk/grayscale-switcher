import browser from "webextension-polyfill";
import iconGray19 from '~/assets/icon-gray19.png';
import iconGray38 from '~/assets/icon-gray38.png';
import icon19 from '~/assets/icon19.png';
import icon38 from '~/assets/icon38.png';

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  const handler = (val: any) => {
    const type = val.state.newValue || 'colored'
    if (type === 'colored') {
      browser.browserAction.setIcon({
        path: {
          19: icon19,
          38: icon38,
        }
      })
    } else {
      browser.browserAction.setIcon({
        path: {
          19: iconGray19,
          38: iconGray38,
        }
      })
    }
  }
  browser.storage.onChanged.addListener(handler)
});
