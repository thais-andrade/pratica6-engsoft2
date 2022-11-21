const Value = require('./count');

// Fixture
const value = new Value(20);

test('get 20', () => {
    expect(value.get()).toBe(20);
});

test('add 10 and get 30', () => {
    value.add(10);
    expect(value.get()).toBe(30);
});

test('reset and get 0', () => {
    value.reset();
    expect(value.get()).toBe(0);
})