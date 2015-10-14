export default function(attr, value=undefined) {
	return elm => value===undefined && elm.hasAttribute(attr) || elm.getAttribute(attr)===value;
}
