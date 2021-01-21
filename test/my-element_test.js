import {MedimsightThumbnail} from '../medimsight-thumbnail.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('medimsight-thumbnail', () => {
  test('is defined', () => {
    const el = document.createElement('medimsight-thumbnail');
    assert.instanceOf(el, MedimsightThumbnail);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<medimsight-thumbnail></medimsight-thumbnail>`);
    assert.shadowDom.equal(
      el,
      `
      <div
        class="thumbnail tidpreview"
        id="thumbnail-container-preview"
        style="background-repeat: no-repeat; background-position-y: 0px; height: 96px; width: 96px; border: 0px solid; transition: border 0.3s ease 0s; position: relative; float: left;"
      >
      </div>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<medimsight-thumbnail name="Test"></medimsight-thumbnail>`);
    assert.shadowDom.equal(
      el,
      `
      <div
        class="thumbnail tidpreview"
        id="thumbnail-container-preview"
        style="background-repeat: no-repeat; background-position-y: 0px; height: 96px; width: 96px; border: 0px solid; transition: border 0.3s ease 0s; position: relative; float: left;"
      >
      </div>
    `
    );
  });
});
