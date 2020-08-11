/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 1;

if (votingAge => 18){
    console.log('True');
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let myVar = 1; 
let yourVar = 4;

if (yourVar >= 5){
    myVar = 200;
}

console.log(myVar)



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number('1999');




//Task d: Write a function to multiply a*b 

let answer = multiplyFunction(4, 3);

function multiplyFunction(n1, n2){
    return n1 * n2;
}

console.log(answer);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myDogYears = dogYears(21)

function dogYears(y1){
    return y1 * 7;
}

console.log(myDogYears);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

let poundFeed = 0;

function dayFeed(dw, da){
    if (da >=1){
       if (dw <= 5){
            poundFeed = dw * .05;
       }else if (dw >=6 && dw <=10){
            poundFeed = dw * .04;
       }else if (dw >=11 &&  dw<=15){
            poundFeed = dw * .03;
       }
    }else if (da <=1){
        if (da <=0.4){
            poundFeed = dw * 0.1;
        }else if (da >=0.4 && da<=0.7){
            console.log("I'm here!");
            poundFeed = dw * 0.05;
        }else if(da >=0.8){
            console.log ("Now, i'm here!");
            poundFeed = dw * 0.04;
        }
    }
    return poundFeed;
}

dayFeed(15, 1);

console.log('You should feed your dog ' + poundFeed, 'pounds worth of food.');



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let myChoice = 'Rock';
let computerChoice = Math.random();

if (computerChoice < 0.34){
    computerChoice = "Rock";
}else if (computerChoice <= 0.67){
    computerChoice = "Paper";
}
else{
    computerChoice = "Scissors";
}

console.log("You have selected " + myChoice + ".");
console.log("The computer has selected " + computerChoice + ".");

function compareAnswers(choice1, choice2){
    if(choice1===choice2){
         console.log("You've tied!");
         return
    }
    if(choice1==="Rock"){
        if(choice2==="Scissors"){
            console.log("Rock wins!");
        }
        else{
            console.log("Paper wins!");
        }
    }
    if (choice1==="Paper"){
        if (choice2==="Rock"){
            console.log("Paper wins!");
        }
        else{
            console.log("Scissors wins!");
        }
    }
    if (choice1==="Scissors"){
        if (choice2==="Rock"){
            console.log("Rock wins!");
        }
        else{
            console.log("Scissors wins!");
        }
    }
}

compareAnswers(myChoice, computerChoice);
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// 1 MI = 1KM / 8 * 5 


let miOutput = 0;

function mConvert(km){
    miOutput = (km / 8) * 5
}


mConvert(55);

console.log(miOutput);



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
//1 centimeter = ft/0.032808

let centOutput = 0;

function centConvert(fee){
    centOutput = (fee / 0.032808)
}

centConvert(5);

console.log(centOutput);


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong(sNum){
    while(sNum >= 2){
        sNum--;
        loNum = sNum - 1;
        console.log("There are " + sNum +" bottles of soda on the wall. " + sNum + " bottles of soda. Take one down, pass it around. "  + loNum + " bottles of soda on the wall.");
    }
}

annoyingSong(5);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

let letterGrade = "F"

function gradeCalculator(nGrade){
    if (nGrade >= 60 && nGrade <= 69){
        letterGrade = "D"
    }else if (nGrade >= 70 && nGrade <= 79){
        letterGrade = "C"
    }else if (nGrade >= 80 && nGrade <= 89){
        letterGrade = "B"
    }else if (nGrade >= 90){
        letterGrade = "A"
    }
}
  gradeCalculator(75);

  console.log("Your grade is " + letterGrade + ".");


  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





