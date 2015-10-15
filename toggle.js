export default function(attr, value=1) {
	return function(elm) {
		if(elm.hasAttribute(attr)) {
			elm.removeAttribute(attr);
		} else {
			elm.setAttribute(attr, value);
		}

		return elm;
	}
}
