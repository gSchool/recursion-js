var Node = function(name){
  this.name = name;
  this.children = [];
};

Node.prototype.addChild = function(child){
  this.children.push(child);
};