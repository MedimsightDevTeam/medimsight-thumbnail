/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MedimsightThumbnail extends LitElement {
  static get styles() {
    return css`
      :host {
        height: 96px;
        width: 96px;
      }
      
      .thumbnail{
        background-repeat: no-repeat;
        background-position-y: 0px;
        height: 96px;
        width: 96px;
        border: 0px solid;
        transition: border 0.3s ease 0s;
        position: relative;
        float: left;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The image identifier.
       */
      seriesId: {type: String},

      /**
       * The current slice number.
       */
      slice: {type: Number},

      /**
       * The current slice in pixels to jump.
       */
      sliceinpx: {type: Number},

      /**
       * The full composed image height.
       */
      backgroundHeight: {type: Number},

      /**
       * The current host height.
       */
      componentHeight: {type: Number},

      /**
       * The background image height.
       */
      thumbnailHeight: {type: Number},

      /**
       * The composed background image url.
       */
      backgroundImageUrl: {type: String},

      /**
       * The maximum slice available.
       */
      sliceMax: {type: Number},

      /**
       * The promise function for backgroun change.
       */
      backgroundImgPromise: {type: Object},
    };
  }

  constructor() {
    super();
    this.seriesId = 'preview';
    this.slice = 0;
    this.sliceinpx = 0;
    this.backgroundHeight = 0;
    this.componentHeight = 96;
    this.thumbnailHeight = 96;
    this.backgroundImageUrl = '/dev/assets/preview.jpg';
    this.sliceMax = 1;
    this.divStyles = { 
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: '0px',
      height: '96px',
      width: '96px',
      border: '0px solid',
      transition: 'border 0.3s ease 0s',
      position: 'relative',
      float: 'left',
    };

    this.backgroundImgPromise = new Promise(resolve => {
      const img = new Image();
      const self = this;
      img.addEventListener('load', function () {
        self.backgroundHeight = this.naturalHeight;
        self.sliceMax = self.backgroundHeight / self.thumbnailHeight - 1;
        self._onMouseMove({ offsetY: 48 });
      });
      img.src = this.backgroundImageUrl;
      resolve(this.backgroundImageUrl);
    });
  }

  render() {
    return html`
      <div style=${styleMap(this.divStyles)}
              class="thumbnail tid${this.seriesId}" id="thumbnail-container-${this.seriesId}" 
              @mousemove="${this._onMouseMove}">
      </div>
    `;
  }

  _onMouseMove(e) {
    this.slice = Math.round((e.offsetY / this.componentHeight) * this.sliceMax);

    if (this.slice < 0) {
      this.slice = 0;
    } else if (this.slice > this.sliceMax) {
      this.slice = this.sliceMax;
    }

    this.sliceinpx = this.slice * -96;

    this.divStyles.backgroundPositionY = this.sliceinpx + 'px';
    this.divStyles.height = this.componentHeight;
    this.divStyles.backgroundImage = 'url(' + this.backgroundImageUrl + ')';
  }

}

window.customElements.define('medimsight-thumbnail', MedimsightThumbnail);
