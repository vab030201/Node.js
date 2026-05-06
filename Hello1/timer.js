// is indirect call
//callback function
//handler 
//listener
//event handler


//function processRequest(){
    console.log("Processing request");
    console.log("Performing task");
    console.log("Generating Response");
    console.log("Sending Response");

    


//Callback function 1

function processJob1(){
    console.log("Processing request by handler 1");
    console.log("Performing task");
    console.log("Generating Response");
    console.log("Sending Response");
}
 
//callback function 2

function processJob2(){
    console.log("Processing request by handler 2");
    console.log("Performing task");
    console.log("Generating Response");
    console.log("Sending Response");
}

function processJob3(){
    console.log("Processing request by handler 3");
    console.log("Performing task");
    console.log("Generating Response");
    console.log("Sending Response");
}

//processRequest();

//register callback function as first parameter
//set time interval for automatic function call


//setInterval is direct call
//but processRequest is indirect call
//scheduling task to be excecuted repeatedly after certain time
//interval 


setInterval(processJob1,3000);
setInterval(processJob2,1000);
setInterval(processJob3,1000);
