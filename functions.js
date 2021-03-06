// -------------------------------  LEVEL 1


/* Opdracht 1 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

function numberCheck(numberA) {
    if (numberA > 0){;
    return true;
    } else {
        return false;
    }
}

const result1 = numberCheck(300);
// console.log(result1);

/* Opdracht 2 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

function biggerThan(a, b) {
    let optellen = a + b;
    if (optellen > 100){
        return true;
    } else {
        return false
    }
}
const result2 = biggerThan(89,14)
console.log(result2);

/* Opdracht 3 */
// Schrijf een functie die een zin verwacht en de eerste letter uit de zin omzet naar een hoofdletter.
// ---- Verwachte uitkomsten:
// "de kat krabt de krullen van de trap" geeft "De kat krabt de krullen van de trap"
// "programmeren is super leuk!" geeft "Programmeren is super leuk!"

function hoofdLetter(zin) {
    const firstletter = zin[0];
    const rest = zin.slice(1);
    return firstletter.toUpperCase() + rest;
}
const result3 = hoofdLetter("de kat krabt de krullen van de trap");
console.log(result3);


/* Opdracht 4 */
// Schrijf een functie die een argument verwacht en het datatype teruggeeft (boolean, object, undefined, number, string,function)
// Tip: gebruik typeof (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
// { name: 1 } geeft object
// undefined geeft undefined
// "Hallo" geeft string
// [1, 2, 3] geeft object (ja echt!)

function whatType(data) {
    return typeof data;
}
const dataTypeOne = whatType([1, 2, 3])
console.log(dataTypeOne);

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is weet je niet van tevoren - het zouden zomaar 100 entries kunnen zijn.
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier géén array- of string methoden voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

function arrayString(arrayInput) {
    let output = '';

    for (let i = 0; i <arrayInput.length; i++){
        output = output + arrayInput[i];
    }
    return output;
}

const result4 = arrayString(["a", "b", "c", "d", "e"]);
console.log(result4);

/* Opdracht 6 */
// Schrijf een functie die een zin verwacht en het langste woord uit die zin teruggeeft. Als er meerdere woorden het langst zijn, wordt het laatste langste woord terug gegeven.
// ---- Verwachte uitkomsten:
// "Frontend web development" geeft "development"
// "De eindopdracht telt voor 30 ECTS" geeft "eindopdracht"
// "Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken." geeft "technologie"

function longWord(inputWord) {
    let longestWord = '';
    const wordArray = inputWord.split(' ');

    for (let i = 0; i < wordArray.length; i++){
        const currentWord = wordArray[i];

        if (currentWord.length >= longestWord.length ){
            longestWord = currentWord;
        }
    }
    return longestWord;
}
const result5 = longWord("Frontend web development")
console.log(result5);


// -------------------------------  LEVEL 2

/* Opdracht 6 */
// 6a. Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde methoden doen, de keus is aan jou.
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

function reverseWordMethod (word){
    const letterArray = word.split('');
    const letterArrayReverse = letterArray.reverse();
    const letterString = letterArrayReverse.join('');
    return letterString;
}

const result6 = reverseWordMethod("ejkeok")
console.log(result6);

// 6b. Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false

function isPalindrome (word){
    let reversed = '';
    for (let i = word.length -1; i >=0; i--){
        reversed = reversed + word[i];
    }
    if (reversed === word){
        return true;
    }
    return false;
}

const result7 = isPalindrome("lepel");
console.log(result7);


/* Opdracht 7 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor géén string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

function howManyTimes(sentence, letter) {
    let amout = 0;
    for (let i = 0; i < sentence.length; i++){
        console.log(sentence[i]);
        if (sentence[i] === letter){
            amout++
        }
    }
    return amout;
}
const result8 = howManyTimes("Hans en marietje lopen naar de supermarkt","e");
console.log(result8);

/* Opdracht 8 */
// Schrijf een functie die bij iedere aanroep een random string id genereert van 8 tekens. Er mag gebruik gemaakt worden van de volgende karakters:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// ---- Verwachte (mogelijke) uitkomsten:
// iizdX7Ax
// gajxBhGs

function generateID (){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const lastIndexNumber = characters.length -1;

    let uniqueId = '';
    for (let i=0; i<8; i++){
        const randomNumber = Math.random();
        const indexPickedCharater = Math.round(randomNumber * lastIndexNumber);
        uniqueId = uniqueId + characters[indexPickedCharater];
    }
    return uniqueId;
}
const idA = generateID();
const idB = generateID();
console.log(idB);

// ------------------------------- LEVEL 3 (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Let op: Als er een getal als tweede argument wordt meegegeven (de parameter n), worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 8]) geeft 8
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

function lastEntry (array, n) {
    const lastEntryIndex = array.length;

    if (n === undefined){
        return array[lastEntryIndex-1];
    }
    return array.slice(lastEntryIndex - n);
}

const result9 = lastEntry([46, 65, 34, 204, 190, 89],3);
console.log(result9);


/* Opdracht 10 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

function fizzBuzz() {

    for(let i = 0; i < 100; i++){
        let output = '';

        if (i % 3 === 0) {
            output += "Fizz"
        }
        if (i % 5 === 0){
            output += "Buzz";
        }
        console.log(output || i);
    }
}
fizzBuzz();

/* Opdracht 11 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft, ongeacht hoeveel items er in de array staan.
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

function greeting(wordsArray){
    let greeting = "hoi";

    for (let i =0; i <wordsArray.length; i++ ){
        if (i === wordsArray.length - 1){
            return greeting = greeting + "en" + wordsArray[i] + "!";
        }
        if (wordsArray.length === 2 || i === wordsArray.length - 2){
            greeting = greeting + wordsArray[i];
        }
        else {
            greeting = greeting + wordsArray[i] + ",";
        }
    }
    return greeting;
}
const firstGreetings = greeting("piet", "henk", "Mitchel");
console.log(firstGreetings);