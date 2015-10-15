export default function(attr) {
	return function(elm) {
		elm.removeAttribute(attr);
		return elm;
	}
}
