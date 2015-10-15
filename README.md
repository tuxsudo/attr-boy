# attr-boy

Lambda function factory for adding, removing, toggling or filtering via an attribute on a DOM element. Each can be used individually or packaged together.


	import attrBoy from 'attr-boy';

	[...document.querySelectorAll('.p')]
		.map( attrBoy.set('data-is-cool', true) );



## .set(attribute, value=1)

Sets attribute on the list of elements to specified value or to `1`.

Intended to be used with `[].map()` or `[].forEach()`

	arrayOfLinks.map( attrBoy.set('href', '#') );

or

	import setAttr from 'attr-boy/set';

	arrOfLinks.map( settAttr('href', '#') );



## .del(attribute)

Removes the specified attribute from the element.

Intended to be used with `[].map()` or `[].forEach()`

	arrayOfLinks.map( attrBoy.del('data-is-cool') );

or

	import delAttr from 'attr-boy/del';

	arrOfLinks.map(delAttr('data-is-cool'));



## .toggle(attribute, value=1)

Toggles between `.setAttribute(attribute, value)` and `.removeAttribute(attribute)` depending on its current status. If `value` is unspecified, defaults to `1`.

Intended to be used with `[].map()` or `[].forEach()`

	arrayOfLinks.map( attrBoy.toggle('data-is-cool') );

or

	import toggleAttr from 'attr-boy/toggle';

	arrOfLinks.map( toggleAttr('data-is-cool') );





## .has(attribute, value=undefined)

Checks if an element has a specified `attribute` or, if optional `value` is specified, checks if `attribute` is `===` to that `value`.

Intended to be used with `[].filter()`, `[].some()`, or `[].every()`.

	arrayOfLinks
		.filter( attrBoy.has('href', '#') );

or

	import hasAttr from 'attr-boy/has';

	arrOfLinks
		.filter( hasAttr('href', '#') );




