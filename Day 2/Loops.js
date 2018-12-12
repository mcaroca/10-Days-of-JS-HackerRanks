function vowelsAndConsonants(s) {
    var vowels = "";
    var consonants = "";
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            vowels += s[i]
        } else {
            consonants += s[i]
        }
    }
    for (var i = 0; i < vowels.length; i++) {
        console.log(vowels[i])
    }
    for (var i = 0; i < consonants.length; i++) {
        console.log(consonants[i])
    }
}

function vowelsAndConsonants(s) 
{
    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < s.length; i++)
        {
            if (vowels.indexOf(s[i]) > -1)
                {
                    console.log(s[i]);
                }
        }
    
    for (var j = 0; j < s.length; j++)
        {
            if (vowels.indexOf(s[j]) < 0)
                {
                    console.log(s[j]);
                }
        }
    
}


