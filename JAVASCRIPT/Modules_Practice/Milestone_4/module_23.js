//assignments
// Problem:1  radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

/* function radianToDegree(radian) {
    return (radian * (180 / Math.PI)).toFixed(2)
}
console.log(radianToDegree(10)); */

/* Problem:2  isJavaScriptFile 
ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।  */
/* function isJavaScriptFile(fileName) {
  if (fileName.endsWith(".js")) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isJavaScriptFile('index.ks.js') */

/* Problem 3: oilPrice

ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
ভিডিও ভালো করে দেখবে। 
প্রতি লিটার ডিজেলের এর দাম – 114 টাকা=
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। */
/* function oilPrice(diselQuantity, petrolQuantity, octenQuantity) {
  diselPrice = 114;
  petrolPrice = 130;
  octenPrice = 135;

  const diseltotalPrice = diselQuantity * diselPrice;
  const petroltotalPrice = petrolQuantity * petrolPrice;
  const octentotalPrice = octenQuantity * octenPrice;
  const totalCost = diseltotalPrice + petroltotalPrice + octentotalPrice;
  return totalCost;
}
console.log(oilPrice(1,1,1));
 */

/* Problem 4: publicBusFare
একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে ) নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে।
উদাহরণ১ঃ
 যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
উদাহরণ-২ঃ
 যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
 */
/* function publicBusFare(passengerNumber) {
  const busDivider = passengerNumber % 50;
const microdivider=busDivider%11
console.log(microdivider*250);
}
publicBusFare(5); */

/* Problem 5: isBestFriend
তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে । */
/* 
function isBestFriend(obj1, obj2) {
  if (obj1.name === obj2.friend &&  obj2.name === obj1.friend) {
    return true;
  } else {
    return false;
  }
}
console.log(
  isBestFriend(
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "sabul" }
  )
);
 */




