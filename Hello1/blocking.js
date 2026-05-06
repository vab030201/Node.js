//set of functions 
//it is a javascript library consists of reusable functions

function show(){
    var count=67;
    count++;
    console.log(count);
};  

function display(company){
    console.log("Company name =" + company);
};

function addition( num1 , num2){
    var result = num1 + num2;
    return result;
}; 


//Nested function 
//Blocking call
//cascaded effect


function main(){
    show();     //Invoking javascript function

    var provider = " Amazon ";
    var hostcompany = " Google ";
    display (hostcompany);

    var num1 = 25;
    var num2 = 5;
    var total= addition( num1,  num2);
    console.log(" Final output = " + total);

}

main();
  
console.log("This is last statement");