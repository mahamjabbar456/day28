// Question 82
let sentence:string = "I want to learn Javascript code first and then start coding in Typescript.";

function LengthofString(sent:string):number {
    return sent.length;
}

console.log(LengthofString(sentence));

// Question 83
function UpperCaseandLowerCase(sent:string) {
    console.log(sent.toUpperCase());
    console.log(sent.toLowerCase());
}

UpperCaseandLowerCase(sentence);

// Question 84

let sentence1 = "My first programming language is Javascript and Javascript is best programming language.";

function ReplaceText(sent:string):string {
    // return sent.replace("Javascript","Typescript");
    return sent.replace(/Javascript/g,"Typescript");
}

console.log(ReplaceText(sentence1));