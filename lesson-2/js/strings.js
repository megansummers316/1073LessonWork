const output = document.querySelector('p');

/* STEP 1: Creating Strings */
let s1 = 'This is a string.';
//output.textContent = 'Created string ' + s1;
console.log('Created string ' + s1);

// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

/* STEP 2: Escaping Characters */
let s2 = 'It\'s 6 o\'clock';
console.log(s2);

/* STEP 3: Concatenation */
let s3a = "part 1";
let s3b = "second part";
console.log(`new string ${s3a} ${s3b}`);

/* STEP 4: Numbers and Strings */
let s4a = 'Fahrenheit' + 234;
console.log(s4a);
console.log(typeof(s4a));

// numbers can be converted to strings
let s4d = 66;
let s4e = s4d.toString();
console.log(typeof(s4e));

// strings can be converted to numbers, too
let s4b = '20' + '18';
console.log(typeof(s4b));
let s4c = Number(s4b); //this is casting
console.log(typeof(s4c));
// and back again, if we want

