var x = 1
function *foo() {
    x++
    yield
    console.log('x',x);
}
function bar() {
    x++
}

var it = foo()
it.next()
console.log(x);
bar()
console.log(x);
it.next();

// 1
function *foo(x) {
    var y = x * (yield 'asdf');
    return y
}
var it = foo(6);
it.next();
var res = it.next(7);
console.log(res);

// 2
function *foo(x) {
    var x = yield 2;
    z++;
    var y = yield (x * z);
    console.log(x, y, z);
}
var z = 1
var it1 = foo();
var it2 = foo();
var val1 = it1.next().value;
var val2 = it2.next().value;

val1 = it1.next(val2 * 10).value
val2 = it2.next(val1 *5).value

it1.next(val2 / 2);
it2.next(val1 / 4);

// 3

var a = 1;
var b = 2;
function *foo() {
    a++;
    yield
    b = b * a
    a = yield b + 3
}
function *bar() {
    b--
    yield
    a = yield 8 + b
    b = a * (yield 2)
}

function step(gen) {
    var it = gen()
    var last

    return function() {
        last = it.next(last).value
    }
}

var s1 = step(foo)
var s2 = step(bar)

s2()
s2()
s1()
s2()

s1()
s1()
s2()

console.log(a, b);
