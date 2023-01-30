"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// An object that represents the three stacks of Towers of Hanoi;
// * each key is an array of Numbers:
// * A is the far-left,
// * B is the middle,
// * C is the far-right stack
// * Each number represents the largest to smallest tokens:
// * 4 is the largest,
// * 1 is the smallest

// The stacks variable will show what a, b, & c towers. The Array inside will show the disks.
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

// Start here. What is this function doing?
// This function logs the array that is in each tower. It lays out the board in the terminal.
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// Next, what do you think this function should do?
// This move piece will move the starting stack to the ending stack. Basically move one piece to another. However each movement should check if the movement is legal/in the rules.

const movePiece = (startStack, endStack) => {
  // Your code here
  // Check if the move is legal before any pieces can move
  if (isLegal(startStack, endStack)) {
    // I declare the arrayPiece variable that will store the moving piece.
    // The pop method can be used because the stacks are in an array and it removes the last element.
    let arrayPiece = stacks[startStack].pop();
    // The .push method will move the moving arrayPiece into the new stack(tower).
    stacks[endStack].push(arrayPiece);
    // Printing the stacks so we see where the arrayPeice moved to.
    printStacks();
  }
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // Your code here
  // Checks if the input provided by the user is a stack name (a, b, or c). If not it tells the player to only input stack letters in the input.
  if (!stacks[startStack] || !stacks[endStack]) {
    console.log("Invalid stack name, use only a, b, or c columns.");
    return false;
  }
  // declares the variables from the top of the start & end stacks
  let startTop = stacks[startStack][stacks[startStack].length - 1];
  let endTop = stacks[endStack][stacks[endStack].length - 1];
  // Condition checks if the array is undefined. If start is empty return false becuase there is nothing to move.
  if (startTop === undefined) {
    return false;
  }
  // If the end is undefined then the move is legal to place a piece down because it is empty.
  if (endTop === undefined) {
    return true;
  }
  // Checks if the moving variable is smaller than the end
  return startTop < endTop;
};

// What is a win in Towers of Hanoi? When should this function run?
// The function should run after every move is made to check if there is a win.
const checkForWin = () => {
  // Your code here
  // This if statement sets the condition if there are no disks(numbers) in stacks A & B, and all of them are in C, then the game is won.
  if (stacks.a.length === 0 && stacks.b.length === 0 && stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  // The logic for the game, if the a move is legal, then move a piece to the appropriate stack &* check for a win.
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    // If the winning condition is true, print out the player wins.
    if (checkForWin()) {
      console.log("You won!");
      return;
    }
    // If the move was illegal, prompt the user to try another move
  } else {
    console.log("Invalid move! Try another one!");
  }
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal("a", "b"), false);
    });
    // Unit Test to move larger to smaller should be an illegal move.
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3],
        b: [1],
        c: [2],
      };
      assert.equal(isLegal("c", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "c"), true);
    });
    // Unit Test: Allows legal move of going from A to B.
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "b"), true);
    });
    // Unit Test: allows movement from smaller B to larger C.
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3],
        b: [1],
        c: [2],
      };
      assert.equal(isLegal("b", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      // Unit Test: I changed one test from b:[4,3,2,1] to c:[4,3,2,1] so I can make only all the conditions of winning to C.
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      // Changed condition from true to false so that only C may win.
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
