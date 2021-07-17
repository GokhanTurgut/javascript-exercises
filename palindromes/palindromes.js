const palindromes = function (text) {
    text = text.replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g, "");
    text = text.toLowerCase();
    text = text.replace(/ /gi, "");

    let reverseText = text.split("").reverse().join("");
    if (text == reverseText) return true;
    else return false;
};


module.exports = palindromes;
