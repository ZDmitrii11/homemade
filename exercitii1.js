/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Exercitiu 1: Încălzire! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/


/*
Când efectuați aceste sarcini, vă recomandăm să
 utilizați console.log pentru a testa
 codul dvs. pentru a vă asigura că funcționează corect.*/

/*
Sarcina 1a - Vârsta votului
Urmează următoarea instrucțiune:
    1. Creați o variabilă numită voteAge și
    atribuiți-i o valoare
    2. In consola va aparea true  dacă vârsta
    este de 18 ani sau mai mare
    SUGESTIE: nu este necesară nicio funcție

*/

let votAge = 18


if (votAge>=18){
    console.log(votAge = true)
}

else {
    console.log('Nu aveti drept sa votati!')

}





/*
Sarcina 1b - Valori
Urmează următoarele instrucțiuni:
    1. Declarați două variabile și
     atribuiți-le valori
    2. Folosiți o conditie pentru a modifica
    valoarea primei variabile pe baza
     valorii atribuite celei de-a doua variabila
    3. In consola va aparea  valoarea  primei variabile
    SUGESTIE: nu este necesară nicio funcție
*/
let var1 = 5;
let var2 = 10;

if (var2===10){
    var1 = 7
}
console.log(var1)




/*
Sarcina 1c - Convert Strings to Numbers
Urmează următoarele instrucțiuni:
    1. Declarați o variabilă de tip
    string cu valoarea „1999”
    2. Convertiți valoarea stringului „1999”
    într-o valoare întreagă din 1999
    3. In consola va aparea rezultatul
    SUGESTIE: căutați metoda Number
*/

let str = '1999'
console.log(Number(str))
let numberStr = Number(str);
console.log(numberStr)
console.log(typeof numberStr)

/*
Sarcina 1d - Înmulțirea

Urmează următoarele instrucțiuni:
    1. Creati funcția multiply de mai jos și transmiteți-i două numere
    2. Primiți numerele din parametrii: a și b
    3. Înmulțiți a și b și returnați rezultatul
*/

function multiply(a,b){
    let result = a*b;
    return result
}

console.log(multiply(5,4))



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Vârsta în DogYears
/*
Urmează următoarele instrucțiuni:
    1. Invocați funcția dogYears de mai jos și transmiteți un parametru vârstă
    2. Folosiți valoarea primită pentru a calcula vârsta unui câine in ani (1 an uman este egal cu 7 ani la câini )
    3. Returnează vârsta  calculată
*/

function dogYears(age){
   return `Human age = ${age} , Dog age = ${age*7}`
}

console.log(dogYears('7'))



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Alimentator pentru câini - În funcție de
// greutatea și vârsta lor, trebuie să știm
// câte kilograme de alimente să ne
// hrănească câinele în fiecare zi!
// / *
// Utilizați funcția hungryDog și cerințele de hrănire de mai jos pentru a face următoarele:
//   1. Creati funcția hungryDog de mai jos și dați-i un parametru a greutății în kilograme
//   2. De asemenea, treceți la hungryDog un parametru de vârstă în ani (notă: dacă câinele este un cățeluș, vârsta va fi zecimală. De exemplu: trei luni = 3/12 sau .25)
//   3. Faceți calculele corespunzătoare și returnați numărul de kilograme de hrană crudă pentru a hrăni câinele / cățelușul într-o zi
//
//   REȚINEȚI: Acest program ar trebui să gestioneze corect vârstele și greutățile adulților ȘI cățelușilor
//
//   Cerințe de hrănire:
//   Câini adulți mai mare de un an are 5 lbs(Pounds) - 5% din greutatea lor corporală
//      6 - 10 lbs(Pounds) - 4% din greutatea lor corporală
//      11 - 15 lbs(Pounds) - 3% din greutatea lor corporală
//      > 15lbs(Pounds) - 2% din greutatea corporală
//   Puii sub 1 an
//      2 - 4 luni 10% din greutatea corporală
//      4 - 7 luni 5% din greutatea corporală
//      7 - 12 luni 4% din greutatea corporală
//
//   NOTĂ: Dacă se face corect, o greutate de 15 lbs și vârsta de 1 an ar reveni 0,44999999999999996*/

// function hungryDog(kg,year){
//
//     if (year>=1){
//         if (kg===5){
//             console.log(`Trebuie sa manince ${(kg*2.2)/1000*500} in pounds`)
//         }
//        else if (kg>=6<=10){
//             console.log(`Trebuie sa manince ${(kg*2.2)/1000*400} in pounds`)
//         }
//        else if (kg>=11 && kg<=15){
//             console.log(`Trebuie sa manince ${(kg*2.2)/1000*300} in pounds`)
//         }
//        else if (kg>15){
//             console.log(`Trebuie sa manince ${(kg*2.2)/1000*200} in pounds`)
//         }
//
//       else if (year<1 && year>0) {
//            return year = year/12
//            if (year>=2 && year<=4){
//                console.log(`Trebuie sa manince ${(kg*2.2)/1000} in pounds`)
//            }
//            if (year>=4 && year <=7){
//                console.log(`Trebuie sa manince ${(kg*2.2)/1000*500} in pounds`)
//            }
//
//         }
//
//
//     }
    /*adauga cod aici*/
// }



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Piatra, hârtie, foarfeca - Să ne jucăm împotriva
// computerului!
// / *
// Creați o variabilă globală care generează aleatoriu
// alegerea computerului
// Utilizați Math.random pentru a determina alegerea
// computerului (Math.random dă un număr aleatoriu
// între 0 și 1)
// SUGESTIE: Deși puteți completa acest lucru doar cu
// condițiile bazate pe string, vă poate ajuta să
// comparați alegerea cu un număr atunci când utilizați
// Math.random ()
// Utilizați funcția de joc de mai jos pentru a face
// următoarele:
//    1. Primiți 2 parametri alegerea utilizatorului și
//    alegerea computerului
//    2. Returnati dacă utilizatorul a câștigat, a pierdut
//    sau a egalat pe baza acestor reguli de joc descrise
//    mai jos - String-urile returnate trebuie să se
//    potrivească exact cu șirurile de mai jos.
//     - câștiga ar trebui să întoarcă "câștigi!"
//     - pierde ar trebui să întoarcă "pierzi!"
//     - Egal ar trebui să returneze "este egalitate"
//
//    REGULI JOCULUI: foarfeca bate hârtia |
//    Hârtia bate Piatra | Piatra bate foarfeca | Sau există o egalitate
//
//    SUGESTIE: Amintiți-vă că ordinea în care trecem
//    în argumentele noastre contează atunci când vine
//    vorba de parametri*/
let numarAleatoriu = Math.floor(Math.random()*3)
function game(user, computer=numarAleatoriu){

if (user===computer){
    console.log('Ничья')
}
else if (user>computer){
    console.log('Usera cistigat')
}
else if (user<computer){
    console.log('User A pierdut')
}

else {
    console.log('Номер не правильный')
}

}

console.log(game(1));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Convertor Km
// // Sarcina 5a - KM in mile
// / *
// Folosind funcția miles de mai jos, faceți următoarele:
//    1. Primeste un numar de kilometri
//    2. Convertiți numărul de kiolmetre primite în mile
//    3. Returnati numărul de mile*/

function miles(km){
    return `${km}km in mile = ${km*1.6}`
}



//Sarcina 5b - Picioare in CM
// / *
// Folosind funcția feet de mai jos faceți următoarele:
//    1. Primeste un numar de cm
//    2. Convertiți numărul de cm în picioare
//    3. Întoarceți numărul de picioare*/

function feet(sm){
return sm / 30.48
}




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Calculator de note
// / *
// Folosind funcția de grade de mai jos faceți următoarele:
//    1. Primește un scor din 100
//    2. Returnați nota corespunzătoare literei urmând
//    această scală de note:
//     90-100 ar trebui să returneze „ai un A”
//     80-89 ar trebui să returneze „ai un B”
//     70-79 ar trebui să returneze „ai un C”
//     60-69 ar trebui să returneze „ai un D”
//     mai jos ar trebui să returneze „ai un F”*/

function grade(/*adauga cod aici */){
    /*adauga cod aici */
}



/*💪💪💪💪💪💪💪💪💪💪 Puternic 💪💪💪💪💪💪💪💪💪💪*/

//Contor vocal - Câte vocale există?
// / *
// Folosind funcția VowelCounter de mai jos, faceți
// următoarele:
//    1. Primiți un string ca parametru
//    2. Numărați și returnați numărul de vocale din
//    stringul respectiv.
//    Ar trebui să se ia atât  vocale cu majuscule, cât
//    și de vocale minuscule.
//    SUGESTIE - poate fi necesar să studiați Array
//    SUGESTIE - încercați să căutați metoda .includes ()*/



function vowelCounter(str) {

   let x = []
    let volves = ['a','o','u','e','A','O','U','E']

    for (let i = 0; i <str.length ; i++) {

        if ((volves.includes(str[i]))){
            x.push(str[i])
        }

    }
    return x.toString()

}

console.log(vowelCounter('AgravE'));


