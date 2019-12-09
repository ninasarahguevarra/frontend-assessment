
Tools used
---
* Bootstrap 4.0
* SASS
* VanillaJS
* Gulp JS
* jquery.appear.js for extra animations
* pace.min.js for page loader

'banana' Explanation
---

* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
* The concatenation of strings 'b' + 'a' results to 'ba',
* On  + + 'a', the operation can't be performed because it is invalid that's why it returns NaN which means Not a Number,
* Then the operation proceed to + 'a', string concatenation results to 'baNaNa'.
* toLowerCase() method converts the 'baNaNa' string to lowercase, overall the result is 'banana'.
