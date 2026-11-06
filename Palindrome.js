function palindrome(myString) {
    // In case if any special character or spaces are given an input has to be removed.
    var input = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    //To check palindrome or not the string needs to be reversed so we are reversing it by splitting and joining
    var reversedInput = input.split('').reverse().join('');

    //checking for palindrome
    if (input === reversedInput) {
        document.write("<div>" + myString + " is a palindrome </div>" );
    }

    else {
        document.write("<div>" + myString + " is not a palindrome </div>" );
    }
}

//invokiung function
palindrome("madam")