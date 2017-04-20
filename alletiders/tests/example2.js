describe('example test', function () {
    it('should be false', function () {
        expect('foo').not.toBe(null);
        expect('foo').toBeDefined();
        expect('foo').not.toBe('bar');
    });
});