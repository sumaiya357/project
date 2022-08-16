

function formValidation(){
   var fname=document.getElementById('ifname').value;
   var pass=document.getElementById('ipass').value;
   var mobile=document.getElementById('imob').value;
   var email=document.getElementById('iemail').value;

    var namePattern=/^[a-zA-Z .]+$/
    var mobilePattern=/^(\+88)?-?01[3-9]\d{8}$/
    var passwordPatter= /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()])){6.20}/
    var emailPattern=/[a-z]+@gmail.com/
     
    if(fname.length<3||fname.length>10){
        document.getElementById('efname').innerHTML="name must be betw 3-20";
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
    /*if(!name.match(/^[A-Za-z]*\s{1}[a-zA-Z]*$/)){ 
        nameError.innerHTML='Full Name';
        return false;
    }
    nameError.innerHTML='valid';
    return true;*/















/*var errorElement=document.getElementById('error')
var form =document.getElementById('form')*/



/*form.addEventListener('submit',(e) =>{
    let message=[]
    if(username.value==='' || username.value==null){
        message.push('Name required')
    }
    if(username.length>0){
    e.preventDefault();
   
   errorElement.innerText=message.join(', ')
    validation();
}}
)

/*function validation(){
   var un= username.value.trim();
   var ps= password.value.trim();
   var eml= email.value.trim();

   if(un ==''){
      
   }
   else{

   }*/
