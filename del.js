export default function(attr) {
	return function(elm) {
		element.removeAttribute(attr);
		return element;
	}
}
