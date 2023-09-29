import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../sharingdata-5.js';

describe('Sharingdata5', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture(html`<sharingdata-5></sharingdata-5>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<sharingdata-5></sharingdata-5>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture(html`<sharingdata-5 header="attribute header"></sharingdata-5>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<sharingdata-5></sharingdata-5>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
