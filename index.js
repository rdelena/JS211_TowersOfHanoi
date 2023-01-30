// declaring stone to null means we do not have a stone in hand
let stone = null;

const selectRow = (row) => {
  // Condition if the stone is null, pick up a stone
  if (stone === null) {
    pickUpStone(row);
  } else {
    // This calls to check if dropping the stone is legal, if so drop the stone.
    if (isLegal(row, stone)) {
      dropStone(row, stone);
      // Setting the stone back to null will allow another stone to be picked up
      stone = null;
      // Check for win when a stone is dropped.
      checkForWin();
      // If an illegal move is made, logs it on the console, does not let the stone drop to that row.
    } else {
      console.log(
        "Illegal Move! You cannot place a larger stone on top of a smaller stone."
      );
    }
  }
};
// This picks up the last elementChild from the row selected. Only one stone is picked up.
const pickUpStone = (row) => {
  if (row.lastElementChild) {
    stone = row.removeChild(row.lastElementChild);
    console.log(stone);
    console.log(row);
  }
};
// drop Stone takes in two arguments of row and stone to drop the stone picked up onto a row.
const dropStone = (row, stone) => {
  row.appendChild(stone);
};
//
const isLegal = (row, stone) => {
  // current size of the stone is stored in the variable
  const currentSize = parseInt(stone.getAttribute("data-size"));
  // Condition checks the last element child of the row.
  if (row.lastElementChild) {
    const lastStoneSize = parseInt(
      row.lastElementChild.getAttribute("data-size")
    );
    // If the last stone size is bigger than the current held stone, return true so the player may drop the held stone.
    return lastStoneSize > currentSize;
  }
  return true;
};
// This checks if all stones are placed on the top row
const checkForWin = () => {
  const topRow = document.getElementById("top-row");
  if (
    topRow.childElementCount === 4 &&
    // Check if the last element child is 1 making sure no stone is misplaced
    topRow.lastElementChild.getAttribute("data-size") === "1"
  ) {
    // timeout delay for better alert
    setTimeout(() => {
      alert("Congratulations! You won the game!");
    }, 500);
  }
};
