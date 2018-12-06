let temp = 55;

if (temp >= 60 && temp <= 90) {

    console.log('It is pretty nice out!');

} else if (temp <= 0 || temp >= 120) {

    console.log('Do not go outside!');

} else {

    console.log('Eh. Do what you want');

}

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('We have four vegan options in the menu.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Here is the menu and we have four vegan options in the menu.');
} else {
    console.log('Here is the menu.');
}