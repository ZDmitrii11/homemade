// Nu modificați  numele funcțiilor

const getBiggest = (x, y) => {
    // x și y sunt numere întregi. Returnează numărul întreg mai mare
    // dacă sunt aceleași returnează fie unul
    };

const greeting = (language) => {
// returnează o felicitare pentru trei limbi diferite:    // language: 'German' -> 'Guten Tag!'
    // limba: 'Spanish' -> 'Hola!'
    // limba: 'Chinese' -> 'Ni Hao!'
    // dacă limba este nedefinită, return 'Hello!'
    if (language==='German'){
        return 'Guten Tag!'
    }
    else if (language === 'Spanish'){
        return 'Hola!'
    }
    else if (language === 'Chinese'){
        return 'Hi Hao!'
    }
    else {
        return 'You need to Fix Language!'
    }
};

const isTenOrFive = (num) => {
    // returnează true dacă num este 10 sau 5
    // altfel returnează false
    if (num===10||num===5){
        return true
    }
    else {
        return false
    }
};

const isInRange = (num) => {
    // returnează adevărat dacă num este mai mic de 50 și mai mare de 20
    if (num<50&&num>20){
        return true
    }
    else {
        return false
    }
    };

const isInteger = (num) => {
    // returnează adevărat dacă num este un număr întreg
    // 0,8 -> fals
    // 1 -> adevărat
    // -10 -> adevărat
    // altfel returnează false
    // sugestie: puteți rezolva acest lucru folosind Math.floor
    if (num%2===0||num%3===0||num%1===0){
        return true}
        else {
            return false
        }
    }

console.log(isInteger('-10'))


const fizzBuzz = (num) => {
    // returnează adevărat dacă num este un număr întreg
    // 0,8 -> fals
    // 1 -> adevărat
    // -10 -> adevărat
    // altfel returnează false
    // sugestie: puteți rezolva acest lucru folosind Math.floor
};
let arr1 = [2,3,4,5,4]




const isPrime = (num) => {
    for (let i = 0; i <arr.length ; i++) {
        if (num===arr1[0]){
            return true
        }
        else {
            return false
        }
    }

    // returnează adevărat dacă num este prim.
    // altfel returnează false
    // sugestie: un număr prim este doar divizibil în mod egal prin el însuși și 1
    // sugestie2: puteți rezolva acest lucru folosind un ciclu for
    // notă: 0 și 1 NU sunt considerate numere prime
    };

const returnFirst = (arr) => {

    return arr[0]
    // returnează primul element din array
};
console.log(returnFirst(arr1))

const returnLast = (arr) => {
    return arr.pop()
    // returnează ultimul element din array
};
console.log(returnLast(arr1))


const getArrayLength = (arr) => {
    return arr.length
};

console.log(getArrayLength(arr1));



const incrementByOne = (arr) =>{
    return arr.map(el=>el+1)
}




    // arr este un array de numere întregi
    // măriți fiecare număr întreg cu unu
    // returnează array-ul


console.log(incrementByOne(arr1));

const addItemToArray = (arr, item) => {

    let x = arr.push(item)
    return x

    // adăugați elementul la sfârșitul array-ului
    // returnează matricea
};

console.log(addItemToArray(arr1, '9'));
const addItemToFront = (arr, item) => {
  return   arr.unshift(item)
    // adăugați elementul în partea din față a array-ului
    // returnează array-ului
    // sugestie: utilizați metoda array .unshift
};
let arr3 = ['Hello','Worlds']
const wordsToSentence = (words) => {

      return words.toString().trim()
    // words este un array de string-uri
    // returnează un string care conține toate cuvintele concatenate împreună
    // spațiile trebuie să fie între fiecare cuvânt
    // exemplu: ['Hello', 'world!'] -> 'Hello world!'
    };

console.log(wordsToSentence(arr3))



const contains = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(item)) {
            return true
        } else {
            return false

        }
        // verificați dacă item se află în interiorul arr
        // returnează true dacă este,
        // în caz contrar returnează false
    }
};
console.log(contains(arr3, 'w'));

const addNumbers = (numbers) => {
    let addNumb = []
    for (let i = 0; i <numbers.length ; i++) {
        addNumb.push(numbers[i]%2===0)
    }


    // numbers este un array de numere întregi.
    // aduna toate numerele întregi și returnează valoarea
    };
let arrScore = [5,5,2,7,8]
const averageTestScore = (testScores) => {
    let x = 0;
    for (let i = 0; i <testScores.length ; i++) {
        x+=testScores[i]

    }
    return x/testScores.length
    // testScores este un array.
    // mergi prin  testScores și
    // calculează media.
    // returnează media
};

console.log(averageTestScore(arrScore))
let arrNumerInt = [5,6,15,7,2,10]
const largestNumber = (numbers) => {


      return   Math.max.apply(0, numbers)

        // numbers este un array de numere întregi
     // returnează cel mai mare număr întreg
};

console.log(largestNumber(arrNumerInt))
