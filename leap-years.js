import { format } from "url";

// Please if you feel confused, use the Readme. 
// Until I get to the polished version, I'm writing comments and code in a brainstorming way.

//Ideas:
// I could make a webpage with an input text, listener to the input and two buttons for the user to choose from
// one to check the date whether is or not readable left to right and viceversa
// the other button to list all the special dates from year zero to that input date


// 02 - 02 - 2020 , It should be check: from left 02 equal to 02 reading backward from right to left
const input = '02/02/2020';


// num of days, function of month and year (february could be 29 instead of 28 if there's leap year)
// months always 12
// leap years (IT bisestile,ES año bisesto) every 4 years. If year is year = n*100 it has to be also multiple of 400: (year = n*100 && year = n*400)

// months with 31days: 01Gen, 03March, 05May, 07July, 08August, 10October, 12December 
// with 30days : 04April, 05June, 09September, 11November
// with 28 or 29 days February depending of the year
const sol = [];
let day;
let month;
let year;
const longestMonths = [1,3,5,7,8,10,12];
const leapYears = [];
let superDay;

// Working fine! Function that returns an array of leap years within the given range
const leapYearCalculator = (start, end) => {
    for (let i = start ; i <= end ; i++){
        if(i%100 == 0){
            i%400 == 0 ? leapYears.push(i) : 0;
        } else if (i%4 == 0) {
            leapYears.push(i);
            }
    }
    return leapYears;
}

leapYearCalculator(2020,2030);

// change ItsLongMonth boolean variable if the month is of the array of 31days months or 30days months

const CheckMonth = (passedMonth) =>{
        let ItsLongMonth = longestMonths.includes(passedMonth);
        return ItsLongMonth;
}

const toTwoDigits = (num) => {
    return String(num).length == 1 ? num = '0'+num : num;
}

const dateToString = (day,month,year) => {
    day = toTwoDigits(day);
    month = toTwoDigits(month);
    let currentDate = (''.concat(day,month,year));
    return currentDate;
};

const formatInput = (input) =>{
        day = (input.split('/')).shift();
        month = (input.split('/')).slice(1,2).pop();
        year = (input.split('/',3)).pop();
        day = parseInt(day);
        month = parseInt(month);
        year = parseInt(year);
        //from 02/02/2020 returns 02022020
        return dateToString(day,month,year);
}



const parsingDate = (stringDate) => {
// dividing day, month, year strings and then parsing them to integer
        day = parseInt(stringDate.substring(0,2));
        month = parseInt(stringDate.substring(2,4));
        year = parseInt(stringDate.substring(4,8));
// I want to use some destructuring and object to get used to them
        return  {day,month,year};
    };

// parsingDate('02022020');
// console.log(day,month,year);
// console.log(parsingDate('02012028'));


// check if long or short month
//I'm gonna call it changingDate function
  const changeDate = (currentDate) => {
            let {day,month,year} = parsingDate(currentDate);
            if (day == 30 && month != 2){
            ItsLongMonth ? day++ : (day = 1, month++, CheckMonth(month)) ;
        // check if it's February of a leap year
            } else if (day == 28 && month == 2){
                leapYears.includes(year) ? day++ : (day = 1, month++, CheckMonth(month));
        // increase the day cause we are not close to critical points
            } else (day == 31 || day == 29 && month == 2 ) ? (day = 1, month++, CheckMonth(month)) : day++;
// I use CheckMonth when we change month, if not just keep the boolean as it is, avoiding unnecessary tasks
        
// put the date back together as a String, ready to be checked
            return dateToString(day,month,year);

};


// now the real date checker piece!

const checkerDate = (input) => {

    let currentDate = formatInput(input);
    for (let i=0;i<5;i++){
                    if (currentDate[i] == currentDate[currentDate.length-1-i]){
                        if(i == 3){
                            sol.push(currentDate);
                            changeDate(currentDate);
                            break;
                        }
                    } else {
                        changeDate(currentDate);
                        break;
                    };
        };
    
    return console.log(sol, currentDate);;

};

checkerDate('02/02/2020');
