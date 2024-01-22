  function deviceConfig(device) {
    if (device === 'desktop') {
      return {
        viewportWidth: 1365,
        viewportHeight: 1000,
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        isMobile: false,
      };
    }
    if (device === 'mobile') {
      return {
        viewportWidth: 375,
        viewportHeight: 667,
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        isMobile: true,
      };
    }
    throw new Error(`Unsupported device '${device}'`);
  }
  
  module.exports = (on, config) => {
    // overriding the default size of screenshot to improve its quality
    on('before:browser:launch', (browser, launchOptions) => {
      if (browser.name === 'chrome' && browser.isHeadless) {
        launchOptions.args.push('--window-size=1400,1200');
      }
      return launchOptions;
    });
    config.screenshotsFolder = `reports/mochawesome/screenshots/${config.env.device}`;
    config.baseUrl = 'https://autoversicherung.financescout24.ch/de/inquiry';
    return Object.assign(
      config,
      deviceConfig(config.env.device),
    );
  };
  