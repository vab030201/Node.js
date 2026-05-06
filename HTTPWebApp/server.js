// HTTP Web Server 

var http=require('http');
//this is a rule for web programming
// to define first parameter as request object and second as response object

var person={
    'firstname':'Vibha',
    'lastname':'Borole',
    'email':'vab030201@gmail.com',
    'phonenumber':7218540228
};

var people=[
     {'firstname':'Vibha','lastname':'Borole','email':'vab030201@gmail.com','phonenumber':7218540228},
     {'firstname':'Jay','lastname':'Jadhav','email':'j1@gmail.com','phonenumber':7218540276},
     {'firstname':'Vipul','lastname':'Roy','email':'vi6@gmail.com','phonenumber':7218440228},
     {'firstname':'Tanvi','lastname':'Chaudhary','email':'th7@gmail.com','phonenumber':7218512228},
     {'firstname':'Rajashree','lastname':'Bhujbal','email':'hy7@gmail.com','phonenumber':7218546228},
     {'firstname':'Riya','lastname':'Oberoi','email':'nj98@gmail.com','phonenumber':7218546228},
     {'firstname':'Kavya','lastname':'Borase','email':'nhu43@gmail.com','phonenumber':7210540228},
     {'firstname':'Shatakshi','lastname':'Nene','email':'xsr7@gmail.com','phonenumber':7218549228},
]
   
var data ="SICHICK ART GALLERY";

//custom (programmer defined fuction)

var onRequestHandler=function(request,response){
    console.log("Request is received!!!!");  // inbulit functions
    response.writeHead(200,{'Content-Type':"text/json"});

    // Serialization - Deseralization
    // serialization is converting json to string 
    // deserialization is convrting string to json

    response.write(JSON.stringify(people));
    response.end();
};

var server=http.createServer(onRequestHandler);//inbuilt function
var Port = 9999;
server.listen(9999);  //0 to 1024 port number   //inbuilt fnction

console.log("Server is listening on Port number 9999"+Port);
 