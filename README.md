# stringTyper
A Simple String Methods Extension 

StringTyper.JS Is A Simple Yet Useful Library Created To Extend The Default String Methods Provided By JavaScript.

## Methods
Currently StringTyper.JS Includes 16 Different String Extension Methods.

### String.isIntValued()
This method Will Return True if the string has no alphabets and special characters and only integers.\

`"10".isIntValued() // returns true`

### String.gappedRepeat()
The predefined String.repeat() does not allow you to add some prefixes and suffixes based on the repeat count, well, StringTyper has got you covered.

To Repeat The String
`"hi".gappedRepeat(2) // returns 'hihi'`

To Insert a space after the first repeat:
`"hi".gappedRepeat(2, { 1: ' ' }) // returns 'hi hi'`

To Add A Separator After Every Even And Odd Count No:
`"hi".gappedRepeat(2, { evenGap: ' even gapp ', oddGap: ' odd gap ' }) // returns 'hi odd gap hi even gapp '`

### String.wrapInTag()
This method is used to wrap the string inside any non self-closing html5 tag. this will throw an error if you pass any self-closing tag like img, hr, br etc.

To Wrap in Single Tag;:
`"click here".wrapInTag('p') // returns <p>click here</p>`

To Wrap In Multiple Tags Pass An Array:
`"wrap me".wrapInTag(['a', 'p', 'h3']) // returns an array with all the tags`

### String.createLink()
This iS Quite similar to the predefined js string method `String.anchor()`
What this method will do is return an a tag with href value you provide.

for example:
`"click here".createLink('https://google.com') // returns <a href='https://google.com'>click here</a>`

### String.exec()
if you have a js code inside a string and want to execute it, then this function is for you.

usage:
`"alert('i am transformer')".exec() // alerts`

### String.isCapitalized()
if you wanna check if a word is capitalized or not, then this function enters the chat.

usage: 
`"Hi".isCapitalized() // returns true`
