# Intro to Recursion

## Background

Recursion is a technique where a method can call itself.  Recursion can be used to traverse tree structures.  
For example, take the following tree, where each letter represents a node in the tree:

```
          A
      ____|____
      |       |
      B       C
    __|__   __|__
    |   |   |   |
    D   E   F   G
                |
                H

```

In this tree, we can say that

* `A` is the "root" node
* `A` has two child nodes: `[B, C]`
* `B` has two child nodes: `[D, E]`
* `C` has two child nodes: `[F, G]`
* `G` has one child node:  `[H]`

Let's say you wanted to go over the entire tree and print the letters out, you could write (pseudo) code like this: 

```
print the root node's letter
for each child node in the root node's children
  print the child node's letter (B, C)
  for each child in the child node's children
    print the granchild's letter (D,E,F,G)
    for each child in the grandchild's children
      print the letter (H)
```

You can see that this only works if the tree has 4 levels.  But what if it had 8, or 100 levels?  Basically that code
is doing the same thing, but from a different starting point:

1. Start with `A`, print `A`'s letter
1. Go over all of `A`'s children and repeat step 1, but start with `B`, then with `C`

We could write that in JavaScript like so:

```ruby
function printLetters(node) {
  console.log(node.name);
  node.childNodes.forEach(function(childNode){
    printLetters(child_node)
  }
}
```

## Challenge

Your mission, should you choose to accept it, is to make `node_walker_spec.rb` pass.

# Setup

* Fork
* Clone
* Create a new branch for your work using `git checkout -b v1`
* Implement specs in `spec/tree_spec.js`
* Run specs by opening `spec/SpecRunner.html`
* Push using `git push -u origin v1`

## Further Practice

This warmup can be completed multiple times to increase your comfort level with the material.
To work on this from scratch, you can:

1. Add an upstream remote that points to the original repo `git remote add upstream git@github.com:gSchool/THIS-REPO.git`
1. Fetch the latest from the upstream remote using `git fetch upstream`
1. Create a new branch from the master branch of the upstream remote `git checkout -b v2 upstream/master`
1. Implement specs and code
1. Push using `git push -u origin v2`

Each time you do the exercise, create a new branch. For example the 3rd time you do the exercise the branch
name will be v3 instead of v2.
