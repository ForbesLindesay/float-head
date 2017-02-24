# float-head

[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/float-head.svg)](https://greenkeeper.io/)

Float table heads when they get to the top of the page.  Built on top of [https://github.com/mkoryak/floatThead](https://github.com/mkoryak/floatThead) but made suitable for browserifying.

[![Build Status](https://img.shields.io/travis/ForbesLindesay/float-head/master.svg)](https://travis-ci.org/ForbesLindesay/float-head)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/float-head.svg)](https://david-dm.org/ForbesLindesay/float-head)
[![NPM version](https://img.shields.io/npm/v/float-head.svg)](https://www.npmjs.com/package/float-head)

## Installation

    npm install float-head

## Usage

```javascript
var floatHead = require('float-head');
//if you have jQuery in the global context, you should do the
//following instead:
// var floatHead = require('float-head/global-jquery');

var floated = floatHead('table.float-head', options);

// to reflow the header (usually triggered automatically)
floated.reflow();

// to stop floating the header
floated.destroy();
```

### floatHead(selector, options);

Takes a selector or an element and, assuming it's a table, floats the header.

Options:

Name             | Type               | Default | Description
-----------------|--------------------|---------|--------------
scrollContainer  | function           | null    | Defines a container element inside of which the table scrolls vertically and/or horizontally. usually a wrapping div
scrollingTop     | number or function | 0       | Offset from the top of the `window` where the floating header will 'stick' when scrolling down
scrollingBottom  | number or function | 0       | Offset from the bottom of the `window` where the floating header will 'stick' when scrolling down
useAbsolutePositioning | boolean | true | Position the floated header using absolute positioning or using fixed positioning. Fixed positioning performs better with tables that use window scrolling, but fails miserably on highly dynamic pages where DOM can be suddenly modified causing the location of the floated table to shift. (You should call `table.reflow()` in this case, but you can't always instrument your code to make that call.)
debounceResizeMs | number             | 1       | The headers are repositioned on resize. Because this event has the potential to fire a bunch of times, it is debounced. This is the [debounce rate](http://unscriptable.com/2009/03/20/debouncing-javascript-methods/).
zIndex           | number             | 1001    | z-index of the floating header
cellTag          | string             | th      | Specifies which tag is used to find header cells (in the table's `thead` element)
debug            | boolean            | false   | Point out various possible issues via `console.log` if it is available
getSizingRow     | function           | undefined | **Used by IE Only**  If your table's first visible row (`tbody tr:visible:first td`) contains `td` elements with `colspans`, then you need to return another set of tds which have no colspans. In other words the selector should return the same number of TDs as columns in your table. Here is [an example](http://mkoryak.github.io/floatThead/examples/row-groups/)

Returns an object with two methods:

 - `floated.reflow();`
 - `floated.destroy();`

### floatHead.reflow(selector) / floated.reflow()

Triggers a reflow of the selected table.  This is likely to be necessary after adding or removing any DOM elements.

### floatHead.destroy(selector) / floated.destroy()

Calling this stops the header from continuing to float.

## Updating

To create an updated build, simply clone this repo then run `node build 1.2.2` where (`1.2.2` is replaced witht the desired version of floatThead).

## License

Built on top of [floatThead](https://github.com/mkoryak/floatThead) by [@mkoryak](https://github.com/mkoryak)

[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)