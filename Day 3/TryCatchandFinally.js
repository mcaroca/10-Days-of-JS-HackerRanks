function reverseString(s) {
    try { 
        let splitS = s.split("");
        let reverseA = splitS.reverse();
        let joinA = reverseA.join("");
        console.log(joinA);

    }
    catch (error)
    {
        console.log(error.message)
        console.log(s)
    }
}