// Nu modificați nimic din numele
// funcțiilor

const multiplyByTen = (num) => {
    // returnează num după ce îl înmulțești cu zece
    num = num*10
    return num

};

console.log(multiplyByTen(5))

const subtractFive = (num) => {
    // returnează num după scăderea cu cinci
    num = num/5
    return num

};

console.log(subtractFive(10))


const areSameLength = (str1, str2) => {
    // returnează true dacă cele două string-uri au aceeași lungime
    // altfel returnează false
      if (str1.length===str2.length){
          return true
      }
      else {return false}
};

console.log(areSameLength('ag', 'net'));
const areEqual = (x, y) => {
    // returnează adevărat dacă x și y sunt egale
    // altfel returnează false
    if (x===y){
        return true
    }
    else {return false}
};

console.log(areEqual(5,5))


const lessThanNinety = (num) => {
    // returnează adevărat dacă num este mai mic de nouăzeci
    // altfel returnează false
    if (num<20){
        return true
    }
    else {return false}
};

console.log(lessThanNinety(15))


const greaterThanFifty = (num) => {
    // returnează true dacă num este mai mare de cincizeci
    // altfel returnează false
    if (num>50){
        return true
    }
    else {
        return false
    }
};

console.log(greaterThanFifty(49))

const add = (x, y) => {
    // adăugați x și y împreună și returnați valoarea
    // cod aici
    let total = x+y;
    let total2 = x-y
    let total3 =  x/y
    let total4 = x*y
    return `Adaugat:${total},Scadenta:${total2},Impartire${total3},Impartire:${total4}`

};

console.log(add(10,2))
const subtract = (x, y) => {
    // scade y din x și returnează valoarea
    // cod aici
};

const divide = (x, y) => {
    // împarte x cu y și returnează valoarea
    // cod aici
};

const multiply = (x, y) => {
    // înmulțiți x cu y și returnați valoarea
    // cod aici
};

const getRemainder = (x, y) => {
    // returnează restul de la împărțirea x la y
    // cod aici
};

const isEven = (num) => {
    // returnează true dacă num este par
    // altfel returnează false
      if (num%2===0){
          return true
      }
      else {
          return false
      }
};

console.log(isEven(5))

const isOdd = (num) => {
    // return true if num is odd
    // otherwise return false
    if (num%2!==0){
        return true
    }
    else {return false}
};

console.log(isOdd(9));
const square = (num) => {
   return Math.pow(num,2)
    // cod aici
};

console.log(square('4'))

const cube = (num) => {
    return Math.pow(num,4)
    // cod aici
};

console.log(cube(2))

const raiseToPower = (num, exponent) => {
    return Math.pow(num,exponent)
    // cod aici
};

const roundNumber = (num) => {
    // rotunjește num și returnează-l
    // cod aici
   return  Number(Math.round(num))
};

const roundUp = (num) => {
    // rotunjește numărul in sus și returnează-l
    // codează aici
    Number(Math.floor(num))
};

const addExclamationPoint = (str) => {
    // adaugă un semn de exclamare la sfârșitul str și returnează noul string

    return `${str} ! `
    // cod aici
};

console.log(addExclamationPoint('Hello'))


const combineNames = (firstName, lastName) => {
// returnează firstName și lastName combinate ca un șir și separate printr-un spațiu.
// 'Scoala', 'LearnIt' -> 'Scoala LearnIt'
    // cod aici
    return `${firstName} ${lastName}`
};

const getGreeting = (name) => {
    // Luați string-ul  name și concatenați alte string-uri pe el, astfel încât să ia următoarea formă:
    // 'Sam' -> 'Salut Sam!'
    // cod aici
    return `Salut - ${name}`
};


const getRectangleArea = (length, width) => {
return Number(length) * Number(width)
    // cod aici
};
console.log(getRectangleArea(4, 5));
const getTriangleArea = (base, height) => {
    return (height*height)+base
    // returnează aria triunghiului folosind base și base
    // cod aici
};

const getCircleArea = (radius) => {
   let zr = radius*radius/3.14
    return zr
    // returnează zona rotunjită a cercului dată de radius
    // cod aici
};

const getRectangularPrismVolume = (length, width, height) => {
  return length*width*height
    // returnează volumul prismei dreptunghiului 3D, având în vedere length, width și height
    // cod aici
};
