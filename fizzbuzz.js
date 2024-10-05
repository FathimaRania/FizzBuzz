let start=parseInt(prompt("Enter first number:"));
let end=parseInt(prompt("Enter second number:"));
for(i=start;i<=end;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
        
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0 ){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
