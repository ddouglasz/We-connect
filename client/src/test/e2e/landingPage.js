module.exports = {
  'Landing Page ': (browser) => {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body', 3000)
      .assert.visible('h1')
      .assert.containsText('h1', 'WEConnect you to your next business.')
      .pause(1000);
    browser.end();
  }
};
