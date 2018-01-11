describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
    it('handles a standard array', function(){
        expect( mergeSort([1, 3, 5, 7, 2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it('handles an array already in order', function(){
        expect( mergeSort([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    })
});


console.log("Mergesort tests");
split([1, 2, 3, 4, 5, 6, 7]);
console.log(split([1,2]));
console.log("merge function:");
console.log("Merge 1: " + merge([1, 3, 5], [2, 4, 6]));
console.log("Merge 2: " + merge([1, 4, 7], [2, 3, 5]));
console.log("Merge 3 test");
console.log("Merge 3: " + merge([1, 4, 7], [10, 11, 13]));
console.log(mergeSort([1, 10, 13, 4, 5, 6, 7]));
