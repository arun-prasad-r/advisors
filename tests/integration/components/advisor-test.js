import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const testAdvisor = {
  name: 'John Doe',
  bio: 'blah blah',
  callAvailability: false,
  chatAvailability: false
};

module('Integration | Component | advisor', function (hooks) {
  setupRenderingTest(hooks);

  test('it should not show admin controls when adminMode is false', async function (assert) {
    assert.expect(1);
    //set advisor model 
    this.set('advisor', testAdvisor);
    //set adminModeEnabled to false
    this.set('adminModeEnabled', false);
    await render(hbs`<Advisor @advisor={{this.advisor}} @adminModeEnabled={{this.adminModeEnabled}}/>`);
    assert.dom('.admin.column').doesNotExist();
  });

  test('it should show admin controls when adminMode is true', async function (assert) {
    assert.expect(1);
    //set advisor model 
    this.set('advisor', testAdvisor);
    //set adminModeEnabled to false
    this.set('adminModeEnabled', true);
    await render(hbs`<Advisor @advisor={{this.advisor}} @adminModeEnabled={{this.adminModeEnabled}}/>`);
    assert.dom('.admin.column').exists();
  });

  test('Call Now button should be disabled when callAvailability is false', async function (assert) {
    assert.expect(1);
    //set advisor model 
    let advisor = Object.assign({}, testAdvisor);
    advisor.callAvailability = false;

    this.set('advisor', advisor);
    //set adminModeEnabled to false
    this.set('adminModeEnabled', true);
    await render(hbs`<Advisor @advisor={{this.advisor}} @adminModeEnabled={{this.adminModeEnabled}}/>`);
    assert.dom('.call_now.button').hasClass('grey');
  });

  test('Call Now button should be teal when callAvailability is true', async function (assert) {
    assert.expect(1);
    //set advisor model 
    let advisor = Object.assign({}, testAdvisor);
    advisor.callAvailability = true;

    this.set('advisor', advisor);
    //set adminModeEnabled to false
    this.set('adminModeEnabled', true);
    await render(hbs`<Advisor @advisor={{this.advisor}} @adminModeEnabled={{this.adminModeEnabled}}/>`);
    assert.dom('.call_now.button').hasClass('teal');
  });

  test('Chat Now button should be teal when chatAvailability is true', async function (assert) {
    assert.expect(1);
    //set advisor model 
    let advisor = Object.assign({}, testAdvisor);
    advisor.chatAvailability = true;

    this.set('advisor', advisor);
    //set adminModeEnabled to false
    this.set('adminModeEnabled', true);
    await render(hbs`<Advisor @advisor={{this.advisor}} @adminModeEnabled={{this.adminModeEnabled}}/>`);
    assert.dom('.chat_now.button').hasClass('teal');
  });

  test('Chat Now button should be grey when chatAvailability is false', async function (assert) {
    assert.expect(1);
    //set advisor model 
    let advisor = Object.assign({}, testAdvisor);
    advisor.chatAvailability = false;

    this.set('advisor', advisor);
    //set adminModeEnabled to false
    this.set('adminModeEnabled', false);
    await render(hbs`<Advisor @advisor={{this.advisor}} @adminModeEnabled={{this.adminModeEnabled}}/>`);
    assert.dom('.chat_now.button').hasClass('grey');
  });

});
