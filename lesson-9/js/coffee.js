const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    size;
    decaf;
    constructor(size, decaf) {
        this.size = size;
        this.decaf = decaf;
    }
    serveIt() {
        //generate image of coffee cup
        const cup = document.createElement('img');
        //set the src for the img element
        let cupImg = 'images/coffee-cup.svg';
        //determine whether coffee is decaf
        let decafCup;
        if (this.decaf == true) {
            decafCup = 'decaffinated';
            cupImg = 'images/coffee-cup-green.svg';
        } else {
            decafCup = 'caffinated';
        }
        cup.setAttribute('src', cupImg);
        //set the img size according to coffee size
        let cupSize;
        switch(this.size) {
            case 'S':
                cupSize = '100';
                break;
            case 'M':
                cupSize = '125';
                break;  
            case 'L':
                cupSize = '150';
                break;
            case 'XL':
                cupSize = '200';
                break;
            default:
                cupSize = '125';
        }
        cup.setAttribute('height', cupSize);
        //generate a description of coffee as image title
        let desc = `A ${this.size} ${decafCup} coffee`;
        //cup.setAttribute('title', desc);
        const descEle = document.createElement('p');
        descEle.textContent = desc;

        output.appendChild(cup);
        output.appendChild(descEle);
    }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let scottsCoffee = new Coffee("XL", false);
let secondCup = new Coffee("S", true);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    milkType;
    constructor(size, decafed, milkType) {
        super(size, decafed);
        this.milkType = milkType;
    }
    latteDesc() {
        alert(`A ${this.size} ${(this.decaf === true? "decafinated" : "caffinated")} latte with steamed ${this.milkType} milk`);
    }
}
/* STEP 6: Create a new instance of the Latte object */
let theLatte = new Latte("M", true, "oat");
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
