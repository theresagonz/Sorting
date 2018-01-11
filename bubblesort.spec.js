describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    beforeAll (function() {
        spyOn(window, 'swap').and.callThrough();
    });
    it('Count of swaps test', function() {
        bubbleSort([5,3,4,2,1]);
        expect(swap.calls.count()).toEqual(9);
    })
});

console.log([5,3,4,2,1]);
// console.log(bubbleSort([5,3,4,2,1]));
console.log("new test: " + bubbleSort([5,3,4,2,1]) + " Swap count: " + swapCount);