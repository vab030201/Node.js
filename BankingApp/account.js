//Domain : Banking 
//Operations : Credit , DEbit
//business entities
//Rule: Constraints, RULES ,Policy
//Events against account 

//Account:
       //State : balance 
       //Opeations : withdraw, deposit 
       //Rule : Balance threshold
       //Event: underbalace , overbalance


//Classical javascript syntax
//SOC : separation of concern

//Loosely coupled , highly cohessive

var handlers=require("./handler");  // Custom module
var events=require("events");           //builtin module available in nodejs

var emitter=new events.EventEmitter();  //event deligation method 

//Events are associated with the objects or instances 



var Account=function(amount){
    var balance = amount;

    //Inner function child function
    var getBalance=function(){
        return balance;
    }


    var monitor=function(){

        if (balance < 5000){

            //handlers.blockAccount();
            //console.log(" In syfficient funds, Not allowes operations to succeed");
            //emit (trigger) event underbalance
            emitter.emit("underBalance");
        }  

        else if(balance>=250000){
             //handlers.payIncomeTax();
             //console.log("Crossing the income Tax limit, Taxation will be applied");
             //emit (trigger) event overbalance
             emitter.emit("overBalance");

        }    
        
    };

    var withdraw=function(amount){
        balance = balance - amount;
        monitor();
    }

    var deposit=function(amount){
        balance = balance + amount;
        monitor();
    }
    
    //Publish inner functions to outside world

    return{
        receivedBalance : getBalance,
        debit : withdraw,
        credit : deposit
    }
}

                                            // Code looks object oriented 
//var acct123=new Account(45000);             //creating object

//Events are associated with the objects or instances 
//Step 1:Configuration,Initialization
//Register Eventhandlers with event using emitter object

emitter.on("underBalance",handlers.blockAccount);
emitter.on("overBalance",handlers.payServiceTax);
emitter.on("underBalance",handlers.sendEmail);
emitter.on("underBalance",handlers.blockAccount);

 //Step2 : Create objects

var acct123=new Account(55000);             //creating object
//var data = acct123.receivedBalance();                 //invoking function

acct123.debit(52000);

var data = acct123.receivedBalance(); 
console.log("Balance=" + data);



u
