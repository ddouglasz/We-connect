

module.exports = {
  'User should not be able to signup with invalid email ': (browser) => {
    browser
      .url('http://localhost:8000/signup')
      .waitForElementVisible('body', 3000)
      .assert.visible('h2')
      .assert.containsText('h2', 'Sign Up')
      .setValue('input[name=firstName]', 'steve')
      .setValue('input[name=lastName]', 'steve')
      .setValue('input[name=email]', 'steve')
      .setValue('input[name=password]', 'steve')
      .click('#signup-btn')
      .waitForElementVisible('#signup-errors', 2000)
      .assert.containsText('#signup-errors', 'invalid email format')
      .pause(5000)
      .end();
  },
  'User should be able to signup with complete signup details ': (browser) => {
    browser
      .url('http://localhost:8000/signup')
      .waitForElementVisible('body', 3000)
      .assert.visible('h2')
      .assert.containsText('h2', 'Sign Up')
      .setValue('input[name=firstName]', 'steve')
      .setValue('input[name=lastName]', 'steve')
      .setValue('input[name=email]', 'steve@steve.com')
      .setValue('input[name=password]', 'steve')
      .click('#signup-btn')
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/UserProfile')
      .waitForElementVisible('.alert', 2000)
      .assert.containsText('.alert', 'signed up successfully!')
      .pause(5000);
  },
  'User should not be able to login with incorrect login details ': (browser) => {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body', 3000)
      .assert.visible('h1')
      .assert.containsText('h1', 'WEConnect you to your next business.')
      .setValue('input[name=email]', 'steveqwerty@steve.com')
      .setValue('input[name=password]', 'steveqwerty')
      .click('#signin-btn')
      .pause(2000)
      .waitForElementVisible('#signin-errors', 2000)
      .assert.containsText('#signin-errors', 'User Not Found')
      .pause(5000);
  },
  'User should be able login with correct login details and edit user info ': (browser) => {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body', 3000)
      .assert.visible('h1')
      .assert.containsText('h1', 'WEConnect you to your next business.')
      .setValue('input[name=email]', 'steve@steve.com')
      .setValue('input[name=password]', 'steve')
      .click('#signin-btn')
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/UserProfile')
      .waitForElementVisible('.alert', 2000)
      .assert.containsText('.alert', 'Login successful')
      .pause(2000)
      .click('#editProfile-btn')
      .pause(2000)
      .setValue('textarea[name=bio]', 'this is my bio')
      .pause(2000)
      .click('#save-edit-profile')
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/UserProfile')
      .pause(3000);
  },
  'Logged in user should be able to see a create business link on the NavBar ': (browser) => {
    browser
      .url('http://localhost:8000/UserProfile')
      .waitForElementVisible('body', 3000)
      .pause(2000)
      .click('.reg')
      .assert.urlEquals('http://localhost:8000/registerBusiness')
      .pause(5000);
  },
  'Logged in user should be able to create a business ': (browser) => {
    browser
      .url('http://localhost:8000/registerBusiness')
      .waitForElementVisible('body', 3000)
      .assert.visible('h1')
      .assert.containsText('h1', 'Add a new Business')
      .setValue('input[name=title]', 'mart.ng')
      .setValue('textarea[name=description]', 'a great business')
      .setValue('input[name=category]', 'technology')
      .setValue('input[name=location]', 'steve')
      .setValue('input[name=email]', 'steve@steve.com')
      .pause(3000)
      .click('#create-business-btn')
      .click('button[name=save]')
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/UserProfile');
    // browser.end();
  },
  'Logged in user should be able to view business catalog, business profile and edit his/her business and logout': (browser) => {
    browser
      .url('http://localhost:8000/businessCatalog')
      .waitForElementVisible('body', 3000)
      .pause(10000)
      .pause(3000)
      .click('#find-one-business')
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/businessProfile/1')
      .click('#edit-one-business')
      .pause(2000)
      .setValue('input[name=location]', 'abuja')
      .pause(1000)
      .click('#save-edit-one-business')
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/BusinessProfile/1')
      .pause(2000)
      .click('#logout-btn')
      .assert.urlEquals('http://localhost:8000/')
      .pause(5000);
    browser.end();
  },
  'Should re-route users to login for protected routes': (browser) => {
    browser
      .url('http://localhost:8000/editBusiness/1')
      .waitForElementVisible('body', 3000)
      .assert.visible('h1')
      .waitForElementVisible('.alert', 2000)
      .assert.containsText('.alert', 'please Login to access this page')
      .pause(1000)
      .assert.urlEquals('http://localhost:8000/');
    browser.end();
  },
};
