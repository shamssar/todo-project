
let quess1 = AskQuess("It is a lovely Day? (Y/N)"); 
let quess2 = AskQuess("Are you Happy? (Y/N)");
let quess3 = AskQuess(" is everything okay? (Y/N)");




let UserAnswers=[quess1,quess2,quess3];
MyAnswer(UserAnswers);


function AskQuess(question)
{
    let UserAnswers= prompt(question);
    return UserAnswers
}
function MyAnswer(arr) {
    for (let i= 0; i< arr.length; i++ ) {
        if (arr[i] === "") {
            console.log("invalid");
        }
        else {
            console.log(arr[i]);
        }
    }
}
      
      
           