let display = "";
function assignUser() {
  let player_1 = document.getElementById("player-1").value;
  let player_2 = document.getElementById("player-2").value;
  display = player_1;
  let element = document.getElementById("container");
  element.style.display = "none";
  let game_ele = document.getElementById("game_display");
  game_ele.style.display = "block";
  let player_name = document.getElementById("message");
  player_name.innerText = `${display} you'r up!`;
}

let cells = document.querySelectorAll(".cell");
let turn = "X";

let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    let player_1 = document.getElementById("player-1").value;
    let player_2 = document.getElementById("player-2").value;
    let player_name = document.getElementById("message");
    display = display == player_1 ? player_2 : player_1;
    player_name.innerText = `${display} you'r up!`;
    if (cell.innerText !== "") return;

    cell.innerText = turn;

    let winner = false;

    win.forEach((pattern) => {
      let [a, b, c] = pattern;

      if (
        cells[a].innerText === turn &&
        cells[b].innerText == turn &&
        cells[c].innerText == turn
      ) {
        winner = true;
      }
    });
    if (winner) {
      display = turn === "X" ? player_1 : player_2;
      console.log(display + " wins!");
      let player_name = document.getElementById("message");
      player_name.innerText = `${display} , congratulations you won!`;
      return;
    }
    turn = turn === "X" ? "O" : "X";
  });
});


