
let h1 = document.getElementById("h1");
let h3 = document.getElementById("h3");
function clickme(){
    let input = document.getElementById("input").value;
    let splitWord = input.split("");
    let reverseWord = splitWord.reverse();
    let join = reverseWord.join("");
    if(input === join){
     h1.innerHTML =`  "${input}" is palindrome`;
     h1.style.backgroundColor = "green";
     h3.style.display = "none";
    }
    else{
        h1.innerHTML =`  "${input}" is not palindrome`;
        h1.style.backgroundColor = "red";
        h3.style.display = "block";
    }
    document.getElementById("input").value = "";
}
