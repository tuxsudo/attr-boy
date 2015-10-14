export default function(attr, value=1) {
	return function(elm) {
		element.setAttribute(attr, value);
		return element;
	}
}
