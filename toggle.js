function toggle(attr, value=1) {
	return function(elm) {
		if(element.hasAttribute(attr)) {
			element.removeAttribute(attr);
		} else {
			element.setAttribute(attr, value);
		}

		return element;
	}
}
