import test from 'tape';
import jsdom from 'jsdom';
import attrBoy from '../index.js';



test('attr-boy tests', t => {
	t.plan(6);

	jsdom.env(`<p>hi</p><p>bye</p>`, (err, window)=>{
		var document = window.document;

		// add attribute to all
		[...document.querySelectorAll('p')]
			.map( attrBoy.set('data-on', 'word') );

		t.equal(document.querySelectorAll('p[data-on]').length, 2, `sets in bulk`);
		t.equal(document.querySelectorAll('p[data-on="word"]').length, 2, `adds correct value`);

		// toggle attribute on first one
		[...document.querySelectorAll('p')]
			.slice(0,1)
			.map(attrBoy.toggle('data-on'));

		t.equal(document.querySelectorAll('p[data-on="word"]').length, 1, `toggles attribute off`);


		// toggle attributes on all
		[...document.querySelectorAll('p') ]
			.map(attrBoy.toggle('data-on'));

		t.equal(document.querySelectorAll('p[data-on]').length, 1, `toggles attribute on/off`);


		// filters via attribute
		t.equal(
			[...document.querySelectorAll('p') ]
				.filter( attrBoy.has('data-on', 1) )
				.length,
			1,
			'filters via attribute'
		);


		// delete attribute
		[...document.querySelectorAll('p') ]
			.map(attrBoy.del('data-on'));

		t.equal(document.querySelectorAll('p[data-on]').length, 0, `deletes attribute`);

	});

});

