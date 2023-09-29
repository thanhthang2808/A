console.log("B1,2");
function calculateBMI(weight, height) {
    return weight / (height ** 2);
  }
  
  function compareBMI(markWeight, markHeight, johnWeight, johnHeight) {
    const markBMI = calculateBMI(markWeight, markHeight);
    const johnBMI = calculateBMI(johnWeight, johnHeight);
  
    if (markBMI > johnBMI) {
      console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    } else if (johnBMI > markBMI) {
      console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    } else {
      console.log("Mark and John have the same BMI!");
    }
  }
  
  const markWeight1 = 78;
  const markHeight1 = 1.69;
  const johnWeight1 = 92;
  const johnHeight1 = 1.95;
  
  compareBMI(markWeight1, markHeight1, johnWeight1, johnHeight1);
  
  const markWeight2 = 95;
  const markHeight2 = 1.88;
  const johnWeight2 = 85;
  const johnHeight2 = 1.76;
  
  compareBMI(markWeight2, markHeight2, johnWeight2, johnHeight2);
  

console.log("B3");
var avg = function(arr) {
    var t = 0;
    for (let i = 0; i < arr.length; i++) {
        t = t + arr[i];
    }
    return (t / arr.length);
}

var compare = function(avg1, avg2) {
    if (avg1 > avg2) {
        console.log("Dolphins win the trophy");
    } else if (avg1 < avg2) {
        console.log("Koalas win the trophy");
    } else {
        console.log("Draw");
    }
}

console.log("Điểm trung bình của Dolphins: " + avg([96, 108, 89]).toFixed(2));
console.log("Điểm trung bình của Koalas: " + avg([88, 91, 110]).toFixed(2));
compare(avg([96, 108, 89]), avg([88, 91, 110]));
console.log("Điểm trung bình của Dolphins: " + avg([97, 112, 101]).toFixed(2));
console.log("Điểm trung bình của Koalas: " + avg([109, 95, 123]).toFixed(2));
compare(avg([97, 112, 101]), avg([109, 95, 123]));
console.log("Điểm trung bình của Dolphins: " + avg([97, 112, 101]).toFixed(2));
console.log("Điểm trung bình của Koalas: " + avg([109, 95, 106]).toFixed(2));
compare(avg([97, 112, 101]), avg([109, 95, 106]));

console.log("B4");
function calculateTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const totalValue = bill + tip;
  
    console.log(
      `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
    );
  }
  
  calculateTip(275); 
  calculateTip(40);  
  calculateTip(430); 
  
console.log("B5");
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`);
  } else {
    console.log("No team wins!");
  }
};

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

console.log("B6");
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  const testBill = 100;
  const tipForTestBill = calcTip(testBill);
  console.log(`The tip for a bill of $${testBill} is $${tipForTestBill}`);
  
  const Bills = [125, 555, 44];
  
  const Tips = Bills.map(bill => calcTip(bill));
  
  const total = Bills.map((bill, index) => bill + Tips[index]);
  
  console.log("Bills:", Bills);
  console.log("Tips:", Tips);
  console.log("Total Values:", total);

console.log("B7");
const mark = {
    fullName: 'Mark Miller',
    mass: 78,      
    height: 1.69, 
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92,     
    height: 1.95,  
  };
  
  mark.calcBMI = function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  };
  
  john.calcBMI = function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  };
  
  mark.calcBMI();
  john.calcBMI();
  
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
  } else {
    console.log("Mark and John have the same BMI!");
  }

console.log("B8");
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total Values:", totals);


  