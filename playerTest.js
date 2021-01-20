function isEven(val) {
    return val % 2 === 0;
}

QUnit.test('isEven()', function(assert) {
    assert.equal(isEven(0), true);
    // QUnit.ok(isEven(2), 'So is two');
    // QUnit.ok(isEven(-4), 'So is negative four');
    // QUnit.ok(!isEven(1), 'One is not an even number');
    // QUnit.ok(!isEven(-7), 'Neither is negative seven');
});