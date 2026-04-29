Age Calculator

A simple age calculator that takes your date of birth and tells you your exact age in years, months, and days.

preview : 



Built With:

HTML

CSS

JavaScript

Day.js — for date parsing and calculation

Features:

Validates empty fields

Validates day, month, and year ranges

Handles month-aware day validation (e.g. Feb 30 is invalid)

Handles leap years

Fully responsive

What I Learned:

The biggest thing I learned in this project was Day.js — specifically how lenient mode vs strict mode works. By default Day.js accepts invalid dates like Feb 30 and just rolls them over to the next month. To fix this I used the customParseFormat plugin with strict mode.
