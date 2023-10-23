// Create A Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input1 = document.getElementById("input1").value.toLowerCase();
  let input2 = document.getElementById("input2").value.toLowerCase();
  let input3 = document.getElementById("input3").value.toLowerCase();
  let input4 = document.getElementById("input4").value.toLowerCase();

  let numCorrect = 0;

  if (input1 === "5") {
    document.getElementById("input1-out").innerHTML = `Correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("input1-out").innerHTML = `Incorrect`;
  }

  if (input2 === "sam") {
    document.getElementById("input2-out").innerHTML = `Correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("input2-out").innerHTML = `Incorrect`;
  }

  if (input3 === "1") {
    document.getElementById("input3-out").innerHTML = `Correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("input3-out").innerHTML = `Incorrect`;
  }

  if (
    input4 === "cobra kai" ||
    input4 === "eagle fang" ||
    input4 === "myagi do"
  ) {
    document.getElementById("input4-out").innerHTML = `Correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("input4-out").innerHTML = `Incorrect`;
    numCorrect + 0;
  }

  if (numCorrect <= 2) {
    document.getElementById("response-out").innerHTML = `Try again`;
  } else if (numCorrect === 3) {
    document.getElementById("response-out").innerHTML = `Nice try!`;
  } else if (numCorrect === 4) {
    document.getElementById("response-out").innerHTML = `Great Job!`;
  } else {
    document.getElementById("response-out").innerHTML = `Answer the questions`;
  }

  if (numCorrect === 0) {
    document.getElementById("score-out").innerHTML = `0/4 (0%)`;
  } else if (numCorrect === 1) {
    document.getElementById("score-out").innerHTML = `1/4 (25%)`;
  } else if (numCorrect === 2) {
    document.getElementById("score-out").innerHTML = `2/4 (50%)`;
  } else if (numCorrect === 3) {
    document.getElementById("score-out").innerHTML = `3/4 (75%)`;
  } else if (numCorrect === 4) {
    document.getElementById("score-out").innerHTML = `4/4 (100%)`;
  }
}
