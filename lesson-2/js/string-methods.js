var output = document.querySelector('p');

/* STEP 1: String Length */
let s1 = "This is a string";
console.log(s1.length);

/* STEP 2: Retrieving a Specific String Character */
let s2a = "Donald J. Trump Tru";
let firstChar = s2a[0];
console.log(firstChar);

let lastIndex = s2a.length - 1;
console.log(s2a[lastIndex]);

/* STEP 3: Extracting Part of a String using indexOf() */
let s3a = s2a.indexOf('Tru');
console.log(s3a);
console.log(s2a.indexOf('Tru', s3a + 1));
// Note - if the substring is not found within the string, indexOf() returns -1

//Slicing 
let s3b = s2a.slice(0, 15); //inclusive, exclusive
console.log(s3b);
// Note - if you don't specify where to end the slice, the method returns the rest of the string

/* STEP 4: Changing Case */
let s4a = 'all lowercase to start';
console.log(s4a.toUpperCase());

/* STEP 5: Updating Parts of a String */
let s4 = 'Barrie, ON';
console.log(s4.replace('ON', 'Ontario'));
