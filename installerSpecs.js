describe("A calculator suite", function() {
  it("should add two numbers", function() {
    expect(add(3,5)).toEqual(8); 
  })
  it("should subtract two numbers", function(){
    expect(subtract(35, 2)).toEqual(33); 
  })
  it("should return merged sorted array", function(){
     expect(mergeSorted([1,3,5], [2,4,6])).toEqual([1,2,3,4,5,6]); 
  })
})
