var strategis = {
	s : function (s) {
		return s * 4
	},
	a : function (s) {
		return s * 3
	}
}
var calculate = function (l,s) {
	return strategis[l](s)
}
console.log(calculate('s',200))