describe("tree", function() {

  it("can return an array of all of the names, recursively", function() {
    var trystan = new Node("Trystan");
    var peggie = new Node("Peggie");
    var sierra = new Node("Sierra");
    trystan.addChild(peggie);
    trystan.addChild(sierra);
    sierra.addChild(new Node("Giuseppe"));
    sierra.addChild(new Node("Orval"));

    expect(Tree.arrayOfNames(trystan)).toEqual(["Trystan", "Peggie", "Sierra", "Giuseppe", "Orval"]);
  });

});