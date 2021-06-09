/*
	Stringy.JS
*/

// Is Int Valued
// Returns true if string is an actual int like '10'

String.prototype.isIntValued = function() {
    if (!isNaN(parseInt(this))) {
        return true
    } else {
        return false
    }
}

// An Advanced Version Of str.repeat()

String.prototype.gappedRepeat = function(count = 2, gaps = {}) {
    let newStr = "";
    for (let i = 1; i <= count; i++) {
        newStr += this
        if (gaps[i] != undefined) {
            newStr += gaps[i]
        }
        if (gaps.evenGap != undefined) {
            if (i % 2 == 0) {
                newStr += gaps.evenGap
            }
        }
        if (gaps.oddGap != undefined) {
            if (i % 2 != 0) {
                newStr += gaps.oddGap
            }
        }
    }
    return newStr
}

// Wrap in tag

String.prototype.wrapInTag = function(tag = 'p') {
    let autoClosing = ["img", "hr", "br", "area", "base", "input", "link", "meta", "param", "source", "track", "wbr", "command", "keygen", "menuitem"]
    if (typeof tag == 'string') {
        if (!autoClosing.includes(tag)) {
            return `<${tag}>${this}</${tag}>`
        } else {
            throw new Error("Self-Closing Tag Provided! Expecting Non Self-Closing HTML5 Tag!")
        }
    } else if (typeof tag == 'object') {
        let returnItems = []
        tag.forEach(t => {
            if (!autoClosing.includes(t)) {
                returnItems.push(`<${t}>${this}</${t}>`)
            } else {
                throw new Error(`Self-Closing ${t} Tag Provided! Expecting Non Self-Closing HTML5 Tag!`)
            }
        })
        return returnItems
    }
}

// creates a link from string

String.prototype.createLink = function (href) {
	return `<a href='${href}'>${this}</a>`
}

// eXec JS from string

String.prototype.exec = function() {
    const script = document.createElement("script")
    script.text = this
    document.body.appendChild(script)
}

// check if string is in lower case

String.prototype.isLowerCase = function() {
    return !/[a-z]/.test(this) && /[A-Z]/.test(this);
}

// check is string is capitalized

String.prototype.isCapitalized = function() {
    return this.match(new RegExp(/^[A-Z]/)) !== null
}

// check if given string (word) is in the english dictionary

String.prototype.isActualWord = function() {
	if($ == undefined) {
		throw new Error("Please Include jQuery In Your Project!")
		return
	}
    if ($ != undefined) {
        let str = this.toLowerCase()
        let res = false
            
            const url = "https://api.wordnik.com/v4/word.json/" + str + "/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

            try {
	            $.ajax({
	                type: "GET",
	                url: url,
	                async: false,
	                success: function (data) {
	                	res = true
	                },
	                error: function (data) {
	                	 res = false
	                }
	            })
        	}
            catch(e) {
            	throw new Error(e.message)
            }
        return res
    } else {
    	throw new Error("Please Include jQuery In Your Project")
    }
}


// kebab case is what css uses, hi-my-name-is-js

String.prototype.toKebabCase = function(separator = ' ') {
    return this.replaceAll(separator, "-")
}

// changes the word separator to underscores

String.prototype.toUnderCase = function(separator = ' ') {
    return this.replaceAll(separator, "_")
}

// increment the the value if the string contains an int value

String.prototype.increment = function(count = 1) {
    if (this.isIntValued()) {
        let i = parseInt(this)
        i = i + count
        return i.toString()
    } else {
        throw new Error("Given String Is Not Int-Valued")
    }
}

// decrement the the value if the string contains an int value

String.prototype.decrement = function(count = 1) {
    if (this.isIntValued()) {
        let i = parseInt(this)
        i = i - count
        return i.toString().toLowerCase()
    } else {
        throw new Error("Given String Is Not Int-Valued")
    }
}

// declare variables from string

String.prototype.declare = function (val) {
	let str = this;
	window[str] = val
	return true
}

// capitalize a string

String.prototype.capitalize = function () {
	return this.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

String.prototype.capitalizeFirst = function () {
    return this[0].toUpperCase() + this.slice(1);
}

// escape the string (escapes SQL invalidators)

String.prototype.escape = function () {
	return this.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
            default:
                return char;
        }
    });
}

// remove all special chars from the string

String.prototype.removeSpecialChars = function () {
	return this.replace(/[^a-zA-Z ]/g, "")
}
