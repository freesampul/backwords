var text = "";
var currentDate = new Date();
var januaryFirst = new Date(2023, 1, 12);
const dayNumber = document.getElementById("dayNumber");
sharing = document.getElementById("score");
var daysUntilJanuaryFirst = daysBetween(currentDate, januaryFirst);
var dayN = daysUntilJanuaryFirst * -1;
text = readTextFile("words/phrases.txt");
document.getElementById("popup-1").classList.toggle("active")
document.getElementById("share-1").classList.toggle("unactive")
var lines = text.split("\n");
realPhrase = lines[dayN - 1];
image = document.getElementById("test");
john = realPhrase;
image.src =
  "images/" +
  getFirstWord(realPhrase) +
  "_" +
  getSecondWord(realPhrase) +
  ".png";
var textbox = document.getElementById("textbox");
var textbox1 = document.getElementById("textbox1");
var score = document.getElementById("score");
counter = 0;
hintCounter = 0;
let long_johnson = 0;
let gotSecond = false;
let gotFirst = false;
var hint = document.getElementById("hint_button");
let number = 1;
const [realFirstWord, realSecondWord] = realPhrase.split(" ");
let correct1 = "Correct Letters: ";
let correct2 = "Correct Letters: ";

orderFile1 = readTextFile(`words/distances/${getFirstWord(realPhrase)}.txt`);
orderFile2 = readTextFile(`words/distances/${getSecondWord(realPhrase)}.txt`);

var orderArray1 = orderFile1.split("\n");

var orderArray2 = orderFile2.split("\n");

// //var streakCookie = getCookie("streak");
// //if(streakCookie == null){
//   document.cookie = "streak=0";
// }; f


//var solved = getCookie("hasGotten");

if(solved == true)
{
  //counter = getCookie("guesses");
  toggleshare;
}

//var dayCookie = getCookie("currentDay");

// if(dayCookie == null || dayCookie !=dayN){
//   document.cookie("guesses=0")
//   document.cookie("hasGotten=false")
//   docuement.cookie(`currentDay=${dayN}`)
//   console.log("it works?")
// }


function generateOrder(distances) {
  return Object.keys(distances).sort((a, b) => distances[a] - distances[b]);
}

// function generateOrder(distances) {
//   var answer = [];

//   for (var i = 0; i < 25000; i++) {
//     var min = 99999999;
//     var minName = "";
//     for (let k in distances) {
//       if (distances[k] < min) {
//         min = distances[k];
//         minName = k;
//       }
//     }
//     answer.push(minName);
//     delete distances[minName];
//   }
//   return answer;
// }

// function generateDistances(word) {
//   var localDict = {};
//   var sum = 0;
//   for (let k in wordVecs) {
//     sum = 0;
//     for (var j = 0; j < 300; j++) {
//       distance = wordVecs[word][j] - wordVecs[k][j];

//       sum += distance * distance;
//     }

//     localDict[k] = sum ** 0.5;
//   }

//   return localDict;
// }

function daysBetween(date1, date2) {
  // Calculate the difference in milliseconds between the two dates
  var differenceInMilliseconds = date2 - date1;

  // Convert the difference to days
  var days = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));

  return days;
}
function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  var allText = "";
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return allText;
}

function getFirstWord(str) {
  // Initialize a variable to store the first word
  var firstWord = "";

  // Iterate through the characters in the string
  for (var i = 0; i < str.length; i++) {
    // If the current character is not a space, add it to the first word
    if (str[i] !== " ") {
      firstWord += str[i];
    }
    // If the current character is a space, return the first word
    else {
      return firstWord;
    }
  }

  // If the loop completes, return the first word
  return firstWord;
}

function getSecondWord(str) {
  // Initialize a variable to store the second word
  var secondWord = "";

  // Initialize a variable to keep track of whether the current character is part of the second word
  var secondWordStarted = false;

  // Iterate through the characters in the string
  for (var i = 0; i < str.length; i++) {
    // If the current character is not a space and the second word has not yet started, skip it
    if (str[i] !== " " && !secondWordStarted) {
      continue;
    }
    // If the current character is a space and the second word has not yet started, start the second word
    if (str[i] === " " && !secondWordStarted) {
      secondWordStarted = true;
      continue;
    }
    // If the current character is not a space and the second word has started, add it to the second word
    if (str[i] !== " " && secondWordStarted) {
      secondWord += str[i];
    }
    // If the current character is a space and the second word has started, return the second word
    if (str[i] === " " && secondWordStarted) {
      return secondWord;
    }
  }

  // If the loop completes, return the second word
  return secondWord;
}



function findString(largeString, smallString, startIndex) {
  // Iterate through the large string, starting from the start index
  for (let i = startIndex; i < largeString.length; i++) {
    // If the character at the current position in the large string matches the first character of the small string,
    // we'll start checking for a match
    if (largeString[i] === smallString[0]) {
      let match = true;
      // Iterate through the small string to see if it matches the substring of the large string starting at the current position
      for (let j = 0; j < smallString.length; j++) {
        if (smallString[j] !== largeString[i + j]) {
          match = false;
          break;
        }
      }
      // If we found a match, return the index
      if (match) return i;
    }
  }
  // If we reach here, it means we didn't find a match. Return -1 to indicate this.
  return -1;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const wordOne = ((document.getElementById("textbox").value).trim()).toLowerCase();
    const wordTwo = ((document.getElementById("textbox1").value).trim()).toLowerCase();
    document.querySelector("form").submit;
    test(wordOne, wordTwo);
  }
})

submit_button = document.getElementById("submit_button")

submit_button.addEventListener("click", function () {
    const wordOne = ((document.getElementById("textbox").value).trim()).toLowerCase();
    const wordTwo = ((document.getElementById("textbox1").value).trim()).toLowerCase();
    document.querySelector("form").submit;
    test(wordOne, wordTwo);
});


document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
     document.getElementById('textbox1').focus();
}}




let hamming_value1 = "";
let hamming_Value2 = "";


function test (wordOne, wordTwo) {
//document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();



  number1 = orderArray1.indexOf(wordOne);
  number2 = orderArray2.indexOf(wordTwo);

if(number1 != 0 && number1 != -1) {
  document.getElementById("score1").innerHTML =
    wordOne + " is the " + number1 + "th closest in meaning!";
} else if (number1 == 0){
  document.getElementById("score1").innerHTML =
    wordOne + "  is correct!";
}
else
{
  document.getElementById("score1").innerHTML =
   wordOne + " is not in our word list.";
}

if(number2 != 0 && number2 != -1) {
  document.getElementById("score2").innerHTML =
   wordTwo + " is the " + number2 + "th closest in meaning!";
} 
else if (number2 == 0){
  document.getElementById("score2").innerHTML =
  wordTwo + " is correct!";
}
else
{
  document.getElementById("score2").innerHTML =
  wordTwo + " is not in our word list.";
}


if(number1 > 1000 || number1 == -1){
  document.getElementById("semantic_score1").value = 0;
} else if (number1 < 500 && number1 > 100) {
  document.getElementById("semantic_score1").value = 25- (100 * (number1 / 25000));
} else if (number1 < 100  && number1 > 50) {
  document.getElementById("semantic_score1").value = 50- (100 * (number1 / 25000));
  if (long_johnson == 0)
  {
    long_johnson = counter+1;
  }
} else if (number1 < 50 && number1 > 1) {
  document.getElementById("semantic_score1").value = 100- (100 * (number1 / 25000)) - 1;
  if (long_johnson == 0)
  {
    long_johnson = counter+1;
  }
} else if (number1 == 0){
document.getElementById("semantic_score1").value = 100;
} else if (number1 == -1){
  document.getElementById("semantic_score1").value = 0;
}



if(number2 > 1000 || number2 == -1){
  document.getElementById("semantic_score2").value = 0;
} else if (number2 < 500 && number2 > 100) {
  document.getElementById("semantic_score2").value = 25- (100 * (number2 / 25000));
} else if (number2 < 100  && number2 > 50) {
  document.getElementById("semantic_score2").value = 50- (100 * (number2 / 25000));
  if (long_johnson < 0)
  {
    long_johnson = counter;
  }
} else if (number2 < 50 && number2 > 1) {
  document.getElementById("semantic_score2").value = 100- (100 * (number2 / 25000)) - 1;
  if (long_johnson < 0)
  {
    long_johnson = counter;
  }
} else if (number2 == 0){
  document.getElementById("semantic_score2").value = 100;
  } else if (number2 == -1){
    document.getElementById("semantic_score2").value = 0;
  }


  if (number1 == 0 && number2 == 0)
  {
     toggleshare();
     //docuement.cookies("hasGotten=true")
     //streakN = docuement.getCookie("streak")
    // streakN++
    //docuement.cookie(`streak=${streakN}`)
  }
  verbal_hint1 = generateVerbalHint(
    wordOne,
    getFirstWord(realPhrase)
  );
  verbal_hint2 = generateVerbalHint2(
    wordTwo,
    getSecondWord(realPhrase)
  );


  document.getElementById("hint1").innerHTML = verbal_hint1;
  document.getElementById("hint2").innerHTML = verbal_hint2;

  score = document.getElementById("score");
   getScore(wordOne + wordTwo, realPhrase, counter);
  counter++;
  localStorage.setItem('guesses', counter)
};


function generateVerbalHint(str1, str2) {
  for (let i = 0; i < str1.length; i++)
  {
    if (str2.includes(str1.charAt(i)) && !correct1.substring(16).includes(str1.charAt(i)))
    {
      correct1 += str1.charAt(i) + " "
    }
  }
  return correct1
}


function generateVerbalHint2(str1, str2) {
  for (let i = 0; i < str1.length; i++)
  {
    
    if (str2.includes(str1.charAt(i)) && !correct2.substring(16).includes(str1.charAt(i)))
    {
      correct2 += str1.charAt(i) + " "
    }
  }
  return correct2
}

//   const postData = {
//     answeer: answer,
//     realPhrasee: realPhrase
//   };

//   fetch('/localhost:8000', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
//   //send answer and realPhrase to backend, get score, set textbx
//   //score.textContent = response.data * 100

//   score.textContent = response.score;

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.getElementById("popup-1").classList.toggle("active");
  }
});


function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function toggleshare() {
  document.getElementById("share-1").classList.toggle("active");
  document.getElementById("final-1").innerHTML=("The real phrase was: " + realPhrase)
  document.getElementById("final-2").innerHTML=("Backwords 0" + dayN)
  let attemptEmojis = ""
  let yellow_number = 0
  yellow_number = (long_johnson/(counter+1))*5 +1
  yellow_number = Math.floor(yellow_number)

  let done = false
  for(let i = 1; i < 6; i++)
  {
    if (i==5)
    {
      attemptEmojis += "🟩"
      done = true
    }
   else if (i >= yellow_number )
   {
    attemptEmojis += "🟨"
   }
   else
   {
    attemptEmojis +=("⬛")
   }
  }


  document.getElementById("final-3").innerHTML=((counter +1 )+ " Attempts " + attemptEmojis)
  
 // let winText = ((counter +1 )+ " Attempts" + attemptEmojis);

  if (number == 1){
    document.getElementById("final-4").innerHTML=("0/3 Hints 🟩🟩🟩 ")
  } else if (number == 2){
  document.getElementById("final-4").innerHTML=("1/3 Hints ⬛🟩🟩")
} else if (number == 3)
{
  document.getElementById("final-4").innerHTML=("2/3 Hints ⬛⬛🟩 ")
}
 else
{
  document.getElementById("final-4").innerHTML=("3/3 Hints ⬛⬛⬛ ")
}
  copyFunction();
  
}



function copyFunction(){
  let hintTxt = ""
  if (number == 1){
   hintTxt = "0/3 Hints        🟩🟩🟩 "
  } else if (number == 2){
    hintTxt = "1/3 Hints        ⬛🟩🟩"
} else if (number == 3)
{
  hintTxt = "2/3 Hints        ⬛⬛🟩 "
}
 else
{
  hintTxt = "3/3 Hints        ⬛⬛⬛ "
}

  let attemptEmojis = ""
  let yellow_number = 0
  yellow_number = (long_johnson/(counter+1))*5 +1
  yellow_number = Math.floor(yellow_number)
  let done = false
  for(let i = 1; i < 6; i++)
  {
    if (i==5)
    {
      attemptEmojis += "🟩"
      done = true
    }
   else if (i >= yellow_number )
   {
    attemptEmojis += "🟨"
   }
   else
   {
    attemptEmojis +=("⬛")
   }
  }



  let inputElement = document.createElement("input");
  inputElement.type = "text";
  let copyString = 
     `Backwords 0${dayN}
${counter} Attempts ${attemptEmojis}
${hintTxt}
#backwords
backwords.xyz` 
document.getElementById("plswork").value = copyString;
  inputElement.value = copyString;
  document.body.appendChild(inputElement);
  document.getElementById("plswork").select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);



  let twitterString = 
 `Backwords 0${dayN}%0A
${counter} Attempts ${attemptEmojis}%0A
${hintTxt}%0A
backwords.xyz%0A`
  const link = `https://twitter.com/intent/tweet?text=${twitterString}&hashtags=backwords`; 
  document.getElementById("tweet-balls").href=link;

}



function outputPhrase(phrase, number) {
  let blop = "";
  var words = phrase.split(" ");
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var visibleLetters = word.slice(0, number);
    var hiddenLetters = word.slice(number).replace(/./g, "_");
    blop += visibleLetters + hiddenLetters;
    blop += " ";
  }
  return blop;
}
hint.addEventListener("click", function () {
  if(number <= 3)
  {
    let [hintFirstWord, hintSecondWord] = outputPhrase(realPhrase, number).split(
      " "
    );
  
  if (!gotSecond && !gotFirst) {
    sharing.textContent = "the phrase is " + outputPhrase(realPhrase, number);
    number++;
  } else if (!gotSecond) {
    sharing.textContent =
      "the phrase is " + realFirstWord + " " + hintSecondWord;
    number++;
  } else if (!gotFirst) {
    sharing.textContent =
      "the phrase is " + hintFirstWord + " " + realSecondWord;
    number++;
  } else {
    sharing.textContent = "You alr got it chill out g";
  }
}
});

// .

// ''.
let tryCount = 1;
function getScore(userGuess, realPhrase, number) {
  const [userFirstWord, userSecondWord] = userGuess.split(" ");
  let response = "Guess " + tryCount;
  tryCount++;
  if (userFirstWord === realFirstWord && userSecondWord === realSecondWord) {
    gotFirst = true;
    gotSecond = true;
    response = generateText(realPhrase, dayN, counter);

    return response;
  }

  if (userFirstWord === realFirstWord) {
    response += `First word "${userFirstWord}" is correct!`;
    gotFirst = true;
    document.getElementById("semantic_score1").value = "100";
  } 
  if (userSecondWord === realSecondWord) {
    response += ` Second word "${userSecondWord}" is correct!`;
    gotSecond = true;
    document.getElementById("semantic_score2").value = "100";
  }

  return response;
}

let clicked = false;
function generateText(phrase, day, guesses) {
  guesses += 1;

  document.getElementById("textbox").textContent =
    " Backwords #" +
    day +
    " took " +
    guesses +
    " tries. \nbackwor.ds\n #backwords";

  clicked = true;

  document.getElementById("semantic_score1").value = "100";
  document.getElementById("semantic_score2").value = "100";

  // document.getElementById("submitter").innerHTML =
  //   '<button onclick="copyFunction()">Share results</button>';

  return `You got it! The phrase was \"${phrase}\".`;
}
