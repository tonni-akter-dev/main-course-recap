/*2. Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result. */
/* function findLeapYear(yearArray) {
  var newArray = [];
  for (let i = 0; i < yearArray.length; i++) {
    if (
      (0 == yearArray[i] % 4 && 0 != yearArray[i] % 100) ||
      0 == yearArray[i] % 400
    ) {
      newArray.push(true);
    } else {
      newArray.push(false);
    }
  }
  return newArray;
}
console.log(findLeapYear([2024, 2026, 2023, 2045])); */

/*3. Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers. */

// প্রাকটিস চ্যালেঞ্জ-৩ টা:
// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
/* function leapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    // console.log(year, "is leap788/year");//
    return true
  } else {
    // console.log(year, "is not a leap year");
    return false
  }
}
console.log(leapYear(2023)); */

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
/* function evenOdd(num) {
    if (num%2==0) {
        return true
    } else {
        return false
    }
}
console.log(evenOdd(3)); */

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
/* function hourToMint(hour) {
    return hour*60
}
console.log(hourToMint(5)); */

//=========================inch to feet=====================
/* function inchToFeet(inch) {
  return inch / 12;
}
console.log(inchToFeet(60));
 */

//miles to km
/* function milesToKm(miles) {
  return miles*1.60934
}
console.log(milesToKm(5)); */

//check even and odd
/* function evenoDD(number) {
  if (number % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenoDD(5) */

// sum of all numbers of an array

/* function sumofArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sumofArray([10,20,30,40,50])); */

///odd sum of an array
/* function sumofArrayOddNum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}
console.log(sumofArrayOddNum([10, 20, 3, 40, 57,13]));
 */

// factorialp==============
/* function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(5)); */

/* function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
factorialize(5); */

/* function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) { //i=5-1 -> 4  end-1 theke boro othoba soman i-- 
    num *= i;
  }
  return num;
}
console.log(factorialize(5));
 */

