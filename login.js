function formValidation(){
    var fname=document.getElementById('ifname').value;
    var pass=document.getElementById('ipass').value;
    var mobile=document.getElementById('imobile').value;
    var email=document.getElementById('iemail');
 
     var namePattern=/^[a-zA-Z .]+$/
     var mobilePattern=/^(\+88)?-?01[3-9]\d{8}$/
     var passwordPatter= /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()])){6.20}/
     var emailPattern=/[a-z]+@gmail.com/
      
     if(fname.length<3||fname.length>10){
         document.getElementById("efname").innerHTML="name must be betw 3-20";
           return false;
     }
 
     else if(!fname.match(namePattern)){
         document.getElementById("efname").innerHTML="only character";
         return false;
     }
 
     else {
         document.getElementById("efname").innerHTML="";
     }
 
      if(!mobile.match(mobilePattern)){
         document.getElementById("emob").innerHTML="Only BD phonr number";
         return false;
     }
     else{
         document.getElementById("emob").innerHTML="";
     }
 
     //password
     if(!pass.match(passwordPatter)){
         document.getElementById("epass").innerHTML="not valid";
     }
     else{
         document.getElementById("epass").innerHTML="";
 
     }
       
 
     //email
     if(!email.match(emailPattern)){
         document.getElementById("eemail").innerHTML="not valid";
     }
     else{
         document.getElementById("eemail").innerHTML="";
 
     }
 
 
 }