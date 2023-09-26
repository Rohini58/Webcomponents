import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../asng-3.js';

describe('Asng3', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture(html`<asng-3></asng-3>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<asng-3></asng-3>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture(html`<asng-3 header="attribute header"></asng-3>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<asng-3></asng-3>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
