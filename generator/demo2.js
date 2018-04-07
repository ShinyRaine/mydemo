function *foo() {
    console.log('foo');
    yield 3
    yield 4
    console.log('fooo');
}
function *bar() {
    yield 1
    yield 2
    yield *foo()
    yield 5
}
var it = bar()
it.next().value;
it.next().value;


// 2
function *foo() {
    console.log('inside foo', yield 'B');
    console.log('in foo', yield 'C');
    return 'd'
}
function *bar() {
    console.log('in bar', yield 'A');
    console.log('in bar', yield *foo());
     console.log('in bar', yield 'E');
     return 'F'
}
var it = bar()
