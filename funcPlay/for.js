for (var i = 0; i < 4; i++) {
	setTimeout(function (a) {
		console.log(a)
	}(i),500)
}

for (var i = 0; i < 4; i++) {
	setTimeout(function (a) {
		return function () {
			console.log(a)
		}
	}(i),0)
}
for (var i = 0; i < 4; i++) {
	(function (a) {
			return function () {
				setTimeout(function () {
					console.log(a)
				},1000)
			}()
		})(i)
}