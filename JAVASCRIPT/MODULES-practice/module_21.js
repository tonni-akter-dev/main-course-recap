// স্ট্রিং আর সিম্পল কিছু জাভাস্ক্রিপ্ট প্রব্লেম ( মডিউল-২১)
// খুবই সিম্পল কিছু জাভাস্ক্রিপ্ট প্রব্লেম দিয়ে এর বেসিক কনসেপ্টগুলো কিভাবে এপ্লাই করতে হয় সেগুলাকে বুঝার জন্য এই মডিউল। জাস্ট ৭টা জাভাস্ক্রিপ্ট প্রবলেম সলভিং নিয়ে ডিসকাস করছি এই মডিউল এ। একদম প্রথেমই আছে দুইটা ভেরিয়েবলের মান অদল বদল করার সিস্টেম। লটারি বা রান্ডম সংখ্যা দিয়ে ছোট একটা কাজ। দুইটা বা তিনটা সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যা কোনটা সেটা বের করা। এরপর কোন একটা array এর মধ্যে সবচেয়ে বড় সংখ্যা কোনটা সেটা বের করা। বা array এর মধ্যে যতগুলা সংখ্যা আছে সবগুলার যোগফল বের করা।

// .

// স্ট্রিং

// প্রথমেই আছে স্ট্রিং রিলেটেড কয়েকটা জিনিস। সেই জিনিসগুলো তোমাকে জানতেই হবে।

// ১. স্ট্রিং immutable   //// includes,indexof,startswith,endswith,tolowercase,toUpperCase

var lyrics = "tumhe yaad na meri ayi kisise ab kya kehna";

// console.log(lyrics.toUpperCase());
// console.log(lyrics.charAt(11));
// console.log(lyrics.charCodeAt(5));
// console.log(lyrics.concat('ok nothing say again'));
// console.log(lyrics.endsWith('kehna')); //accepts word not a single letter
// console.log(lyrics.includes('Yaad'.toLowerCase()));
// console.log(lyrics.indexOf('na'));
// console.log(lyrics.lastIndexOf('k')); //accepts both string and letter
// console.log(lyrics.length);
// console.log(lyrics.padEnd(45, ".")); //string er length 45 dile jodi 42 thake tahole baki 3 ta dot diye puron korbe

// var sliceLyrics = lyrics.slice(10);
// console.log(sliceLyrics);
// console.log(sliceLyrics.padStart(lyrics.length, "*"));
// console.log(lyrics.repeat(3));
// console.log(lyrics.replace('tumhe','apko'));
// console.log(lyrics.search('kisi'));
// console.log(lyrics.slice(3,11));
// console.log(lyrics.split(' '));
// console.log(lyrics.substring(11,15));

// ফ্যাক্টোরিয়ালের এর মতো করে আসছে fibonacci সেখানে for লুপ দিয়ে একটা fibonacci series বের করা হইছে। এইখানে ফিবোনাচ্চি বা এই ধরণের ম্যাথ বুঝতে পারলে অবশ্যই ভালো। তবে কোন কারণে বুঝতে না পারলেও যেন কি করা লাগলে কি ইউজ করতে হয়। সেটার দিকে খেয়াল করো। না বুঝতে পারলেও মাথা গরম করার দরকার নাই। জাস্ট আমাদের জিজ্ঞেস করবে। বুঝে নেয়ার চেষ্টা করবে। সাপোর্ট সেশনে জয়েন করে আদায় করে নিবে।
/* 
const fibo = [0 , 1];
for(let i = 2; i <= 25; i++ ){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);
 */
// reverse string-------
/* function reverseString(strings) {
  var reverse = "";
  for (let i = strings.length - 1; i >= 0; i--) {
    let element = strings[i];
    reverse = reverse+element
    console.log(reverse);
  }
}
reverseString("tonni");
 */
// largest number of the array

function largestNumberOfTheArray(array) {
  let largestNumber = array[i];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > largestNumber) {
      largestNumber = element;
    }
  }
  return largestNumber
}
console.log(largestNumberOfTheArray([99,10,45,78,86,65,63]));
// ফাংশন নিয়ে না বুঝলে টেনশন করার দরকার নাই। আমাদের নেক্সট মাইলস্টোন এর ফাংশন নিয়ে পাঁচটা ভিডিও আছে। যেগুলার টাইটেল হচ্ছে-- When to use a function. When to return from a function and from where. Callback function and pass different function. Arguments and deal with unknown number of arguments. How to organize code inside a function সো ফাংশন নিয়ে আপাতত, নো টেনশন।

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

// ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।
