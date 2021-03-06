# StringyJS
A Simple String Methods Extension 

StringyJS Is A Simple Yet Useful Library Created To Extend The Default String Methods Provided By JavaScript.

## CDN
Stringy Is Hosted On JSDelivr:\
```<script src='https://cdn.jsdelivr.net/gh/Adison-Masih/Stringy/include.js'></script>```\
Minified version:\
```<script src='https://cdn.jsdelivr.net/gh/Adison-Masih/Stringy/include.min.js'></script>```

## NPM Package
Stringy Is Available On NPM as [Stringy.JS](https://www.npmjs.com/package/stringy.js)

## Support
If you face any problem, kindly raise a new issue.

## Methods
Currently StringyJS Includes 15+ Different String Extension Methods.

### String.isIntValued()
This method Will Return True if the string has no alphabets and special characters and only integers.\

`"10".isIntValued() // returns true`

### String.gappedRepeat()
The predefined String.repeat() does not allow you to add some prefixes and suffixes based on the repeat count, well, Stringy has got you covered.

To Repeat The String:\
`"hi".gappedRepeat(2) // returns 'hihi'`

To Insert a space after the first repeat:\
`"hi".gappedRepeat(2, { 1: ' ' }) // returns 'hi hi'`

To Add A Separator After Every Even And Odd Count No:\
`"hi".gappedRepeat(2, { evenGap: ' even gapp ', oddGap: ' odd gap ' }) // returns 'hi odd gap hi even gapp '`

### String.wrapInTag()
This method is used to wrap the string inside any non self-closing html5 tag. this will throw an error if you pass any self-closing tag like img, hr, br etc.

To Wrap in Single Tag:\
`"click here".wrapInTag('p') // returns <p>click here</p>`

To Wrap In Multiple Tags Pass An Array:\
`"wrap me".wrapInTag(['a', 'p', 'h3']) // returns an array with all the tags`

### String.createLink()
This iS Quite similar to the predefined js string method `String.anchor()`
What this method will do is return an a tag with href value you provide.

for example:\
`"click here".createLink('https://google.com') // returns <a href='https://google.com'>click here</a>`

### String.exec()
if you have a js code inside a string and want to execute it, then this function is for you.

usage:\
`"alert('i am transformer')".exec() // alerts`

### String.isCapitalized()
if you wanna check if a word is capitalized or not, then this function enters the chat.

usage:\
`"Hi".isCapitalized() // returns true`

### String.isLowerCase()
if you wanna check if a word is in lowercase or not, then this function enters the chat.

usage:\
`"hi".isLowerCase() // returns true`

### String.isActualWord()
if you wanna check if a word is an actual word and is included in the english dictionary then this function can help. **NOTE:** This Is An Asynchronous Method, And Needs To Be Awaited.

usage:\
`await "Coffee".isActualWord() // returns true`

`await "fugsffuhf".isActualWord() // returns false`

### String.toKebabCase() 
kebab case is basically what css uses. `font-size`, `font-weight` etc. words differentiated by hyphens are in kebab case.\
to convert a string to kebab case:\
`"font size".toKebabCase() // returns font-size`\

to use a custom word separator to replace with hyphens:\
`"font_size".toKebabCase('_') // returns font-size`

### String.toUnderCase()
replaces the separator provided (default space) with underscore

usage:\
`"hi there".toUnderCase() // returns 'hi_there'`

### String.increment()
Increments the value if the string contains an integer value. **NOTE**: this returns a String with the incremented value not an integer.

usage:\
`"10".increment() // returns '11'`


### String.decrement()
Decrements the value if the string contains an integer value. **NOTE**: this returns a String with the decremented value not an integer.

usage:\
`"10".decrement() // returns '9'`

### String.declare()
want a dynamic variable name? Stringy gotcha!

usage:\
`"abc".declare("this is value") // declares a variable abc with the provided value`

### String.capitalize()
Capitalizes each word of the string.

usage:\
`"hi this is Typer".capitalize() // returns 'Hi This Is Typer'`

### String.capitalizeFirst()
capitalizes the first letter of a string.

usage:\
`"hi this is Typer".capitalizeFirst() // returns "Hi this is Typer"`

### String.escape()
Escapes all SQL Injection Validators.

usage:\
`"SELECT * FROM world WHERE someone LIKE '%you%'".escape()`

### String.removeSpecialChars()
removes all special characters in a string.

usage:\
`"Hi this is ^%&#&^#*#* Typer" // returns "Hi this is Typer"`
