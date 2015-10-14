# attr-boy

Lambda function factory for adding, removing, toggling or filtering via an attribute on a DOM element


	import attrBoy from 'attr-boy';

	[...document.querySelectorAll('.p')]
		.map( attrBoy.set('data-is-p', true) );




## .set(attribute, value=1)

Sets attribute on the list of elements to specified value or to `1`.

	arrayOfLinks.map( attrBoy.set('href', '#') );

or

	import setAttr from 'attr-boy/set';

	arrOfLinks.map(settAttr('href', '#'));



## .del(attribute)

Removes the specified attribute from the element.

	arrayOfLinks.map( attrBoy.del('data-is-cool') );

or

	import delAttr from 'attr-boy/del';

	arrOfLinks.map(delAttr('data-is-cool'));



## .toggle(attribute, value=1)

Toggles between `.setAttribute(attribute, value)` and `.removeAttribute(attribute)` depending on its current status. If `value` is unspecified, defaults to `1`.

	arrayOfLinks.map( attrBoy.toggle('data-is-cool') );

or

	import toggleAttr from 'attr-boy/toggle';

	arrOfLinks.map( toggleAttr('data-is-cool') );





## .has(attribute, value=undefined)

	arrayOfLinks
		.filter( attrBoy.has('href', '#') );

or

	import hasAttr from 'attr-boy/has';

	arrOfLinks
		.filter( hasAttr('href', '#') );




