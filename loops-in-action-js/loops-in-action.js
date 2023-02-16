// First example: sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;
  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outPutResultElement = document.getElementById("calculated-sum");

  outPutResultElement.textContent = sumUpToNumber;
  outPutResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

//second example: Highlight links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

//third example:Display User data

const dummyUserData = {
  firstName: "George",
  lastName: "Emad",
  age: 23,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outPutDataElement = document.getElementById("output-user-data");
  outPutDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListElement = document.createElement('li');
    const outPutText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListElement.textContent = outPutText;
    outPutDataElement.append(newUserDataListElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);


//fourth example: Statistics

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; //Math.floor: 5.226 -> 5
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number')
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = " ";

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rollnumber = rollDice();
        // if (rollnumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollsListElement = document.createElement('li');
        const outPutText = "Roll" + numberOfRolls + ": " + rollnumber;
        newRollsListElement.textContent = outPutText;
        diceRollsListElement.append(newRollsListElement);
        hasRolledTargetNumber = rollnumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;

}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);