
//Module : modularity
//event handling module
//event listeners
//event handler logic
//expose functions to be used outside of Javascript files

exports.payIncomeTax=function(){

    console.log("20% income tax to be applied against account");
}

exports.payServiceTax=function(){

    console.log("18% income tax to be applied against account");
}

exports.blockAccount=function(){
    console.log("The Account has been blocked temp");
}

exports.sendEmail=function(){
    console.log("Email is sent to registered mail ID");
} 

exports.sendSMS=function(){
    console.log("Message is sent to registered phone number");
}    