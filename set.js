export default function(attr, value=1) {
	return function(elm) {
		elm.setAttribute(attr, value);
		return elm;
	}
}
