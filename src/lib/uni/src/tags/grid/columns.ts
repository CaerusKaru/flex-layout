/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Tag, ValuePriority} from '../tag';


export class Columns extends Tag {
  readonly tag = 'columns';

  build(input: string): Map<string, ValuePriority> {
    input = input || 'none';
    const cache = this.getCache(input);

    if (cache) {
      return cache;
    }

    let auto = false;
    if (input.endsWith(AUTO_SPECIFIER)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
      auto = true;
    }

    const key = auto ? 'grid-auto-columns' : 'grid-template-columns';
    const styles: Map<string, ValuePriority> = new Map()
      .set('display', {value: 'grid', priority: 0})
      .set(key, {value: input, priority: 0});

    this.setCache(input, styles);

    return styles;
  }
}

const AUTO_SPECIFIER = '!';
