let cent = document.querySelector("cent");
let month = document.querySelector("mymonth");
let day = document.querySelector("day");
let result = document.querySelector("h1");

function dayAlgorithm() {
let collectCentury = prompt("You are born in which year?");
let checkCentury = Number(collectCentury.slice(0,2));

let year = (Number(collectCentury.slice(2,4)));

let calcday = Math.floor(Number((year + (year/4))%7));

if ((checkCentury === 17) || (checkCentury === 21)) {
		calcday += 4 
	}else if ((checkCentury === 18) || (checkCentury ===22)) {
			calcday += 2
		}else if(checkCentury === 20){
				calcday += 6
			}else{
					calcday += 0
};

let arrMonth = [
	{month:"January", number:0},
	{month:"February", number:3},
	{month:"March", number:3}, 
	{month:"April", number:6}, 
	{month:"May", number:1},
	{month:"June", number:4},
	{month:"July", number:6}, 
	{month:"August", number:2}, 
	{month:"September", number:5}, 
	{month:"October", number:0},
	{month:"November", number:3}, 
	{month:"December", number:5},
	];
let month1 = prompt("In what month?");
let selectedMonth = arrMonth.filter((item) =>{
	return item.month === month1;
});
let monthcode = selectedMonth[0].number;

let day = Number(prompt("In what day i.e 2rd..."));
let youArebornOn = [
	"Sunday","Monday","Tuesday", "Wednesday",
	"Thursday", "Friday","Saturday"
];

let numOfDayCalc = ((calcday + monthcode + day)%7);

let brainCalender = youArebornOn[numOfDayCalc];
console.log(brainCalender)
};
