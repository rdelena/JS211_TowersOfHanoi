# Towers of Hanoi Project

## Grading Checklist:

1. 20pts - **Code Plan** - Include this in a `README.md` file in your folder with comments in your code
1. 10pts - **Move Blocks** - User can move "blocks" from column to column
1. 20pts - **Illegal Moves** - Prevents larger blocks from stacking on smaller blocks
1. 20pts - **Notifies winner** - When all the blocks are stacked into column 2 or 1 the user is alerted they won!
1. 20pts - **Minimum 3 Unit Tests** - Should be attached to your file the same way Tic, Tac, Toe, PigLatin or Rock Paper Scissors is done.
1. 10pts - **Graphical User Interface** - Take this game out of the terminal by adding a User Interface that uses `towersOfHanoi()` function in `index.js`.

- **Extended Practice Bonus!!**
  - Keeps count of moves as player plays games
  - Sound Effects
  - Peaceful Background
  - Vertical columns
  - Proportional Stones/tokens

## Code Plan to tackle this project:

Objective: The main objective of the Towers of Hanoi game is to get one stack of disks and move them the another empty tower.

1. There are 3 towers in total that disks are able to hold a disk.
1. There are 4 disks in this game.
1. Disk has a value from (4,3,2,1).

Rules:

1. Only one disk can be moved at a time.
1. Only the upper-most disk from one stack can be moved.
1. Larger disks cannot be placed on smaller stacks.

Code Plan:

Before you begin anything, find out the objective of the project. In this case we are making a game called "Towers of Hanoi".

- The Objective is to make a program that works as a functioning game in both the terminal and the DOM.

Now that the objective is identified, I can find the parameters that make the game a towers of hanoi game. What does it look like? What are the rules for this game?

- In this game there are 3 towers, with 4 disks. The rules are:

1. Only one disk can be moved at a time.
1. Only the upper-most disk from one stack can be moved.
1. Larger disks cannot be placed on smaller stacks.

The next step is to inspect the code.

- There will be 3 main files that we are working with today in this project.
- The files are index.html, index.js, main.js. Another file is the style.css that will be used for styling.

Any code that does not make sense or hasn't been seen can be looked up using documentation.

## main.js:

- The beginning code uses strict mode, assert used as a way to test if an expression is true or not, else it throws an error. And the read line just basically provides a way to read the code one line at a time.
- The stacks variable is declared. It consists of 3 objects, A, B, & C. Object A has an array of numbers in decending order starting at 4 ending at 1. The objects B & C are empty arrays. The comments above state:
- An object that represents the three stacks of Towers of Hanoi;
  Each key is an array of Numbers:
  A is the far-left,
  B is the middle,
  C is the far-right stack
  Each number represents the largest to smallest tokens:
  4 is the largest,
  1 is the smallest
- Basically these are the towers (A, B, C) and the disks are (4, 3, 2, 1).
- Print Stacks terminal logs the current stacks. Used to show where the pieces are on the terminal.
- There are empty functions called movePiece(), isLegal(), checkForWin(), towersOfHanoi().
- The getPrompt() function gets the prompt from the user to input for the start & end stack, and calls the towerofHanoi() to perform the logic of the program and return the value.

There are conditions for the npm test shown.

1. Move a block
1. No illegal moves
1. Should allow legal moves
1. Check for a win.

How will tackle this code:

1. Identify the variables given.
1. Identify the rules for the game. How can I apply it to the the code?
1. Know that the disks are in an array. How do you alter arrays? How to move one array to another?
1. How do I check for a win? What is a win?
1. How to put it all together for the towers of Hanoi Logic?

## index.html & style.css

- In the index.html, there is the simple boiler plate.
- The index.js file is attached in the head of the file along with the link to the styles.css file.
- 3 divs that span the whole website noted as the top, middle, and bottom row. This is the towers for the game. The towers have a event (onclick) to select a row.
- There are 4 different color divs with ids labeled 1-4. These are symbolized as the disks.

How will I tackle this code:

1. The first thing to note is to move the index.js from the head tag to the bottom before the closing body tag.
1. I also see that the disk divs are equal length. I want to adjust the size in the style.css so that they are wasily identifiable.
1. It is important to note the ids, class, et. given so they can be identified in the index.js file later.
1. Other than the cosmetic adjustments, I do not see a need to alterate the html and css files too much. Much of the work will be in the index.js.

## index.js

- There are comment hints throughout the code. It says that the file is incomplete and to check the terminal for error messages.
- The beginning code shows a constant variable (stone) equal to null. The null value is the absence of a value. The stone variable is declared but no value has been put in it yet.
- There is a selectRow() that takes the row object and gets the attribute value of "data-row" for the object. Then it will log the row.id, currentRow, logs that you clicked on the row on the console. Then it calls the pickUpStone function.
- There is a pickUpStone() function that takes in the rowID, creates a variable called selectedRow and gets the element by ID of rowID. Using the stone variable, it takes the selectedRow along with the removeChild method is used, with a node.js property .lastChild. The comment above says that this function does not work.
- In the dropStone function, it takes the rowID & stone argument, gets the element by ID of rowID, append the child of stone, and declares stone = null in value. Overall this also does not work.

How will I tackle this code:

1. Check the log to look at errors that can be fixed.
1. The pickUpStone() looks like it picks up the disks but there is no way of knowing. It seems like I need a variable to declare what stone is being held so that I can tell what I am holding.
1. I need to apply the towers of hanoi logic into each move so that I can only pick up one stone, and I can only place the stones in appropriate stacks/towers.
1. I need to figure out how to drop the stones in a working function. Will I be able to use the appendChild method?
1. I need to make it so that it checks for a winner after every move & declare a winner when the game is complete.
