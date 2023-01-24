// Below function is used for Changing the Username Value
function change(){
    let Name=document.getElementById("User_name").value;
    let Trm=Name.trim();                         //this is used to trim the whitespace front and end of the username
    let Upper=Trm[0].toUpperCase();             // to change the first letter of username to uppercase
    let Lower=Trm.slice(1);                    //to take remaining letters of username
    let Full_Name=Upper+Lower.toLowerCase();  // Add the First letter with sliced words
    document.getElementById("User_name").value=Full_Name;  
    localStorage.setItem("username",Full_Name);
   
}

function for_check(){
    let Username=document.getElementById("User_name").value;
    let Password=document.getElementById("Pass_word").value;
    let Repassword=document.getElementById("Re_Password").value;
    let Email=document.getElementById("email").value;
    let Phonenumber=document.getElementById("mobile").value;
    let Address=document.getElementById("Address").value;



    let user_check=Username.match(/^[A-Za-z]+$/);
    let pass_check=Password.match(/^[A-Za-z0-9@#$! ]+$/);
    //let repass_check=Repassword.match(/^[A-Za-z0-9@#!$ ]+$/);
    let phonenumber_check=Phonenumber.match(/^[6-9][0-9]+$/)
    let email_check=Email.match(/^[a-z0-9]+@[a-z.]+$/)
    let address_check=Address.match(/^[A-Za-z0-9,:#.]+$/)

    
    try{
        if(Username!=""){} else{event.preventDefault();throw("Username cannot be Empty")};
        if(Username==user_check){}else{event.preventDefault();throw("don't use Emoji, Special Character, Numbers" );};
      
        if(Password=="" || Repassword=="")throw("password cannot be empty");
       else if(Username===Password)throw("Password cannot be same as Username");
       else if(Password!=pass_check)throw("don't use Emoji, Special Character" );
       else if(Password!=Repassword)throw("Password Mis-match");
       else if(Phonenumber!=phonenumber_check)throw("enter a valid Phone Number");
       else if(Email!=email_check)throw("Enter a valid Email");
       else if(Address!=address_check)throw("Enter a valid Address");
     
        
    }catch(e){alert(e)};
}





function chec(){
    let pass=document.getElementById("Pass_word").value
    let err=document.getElementById("er");
    
if(/^[0-9]+$/.test(pass)  ){
    document.getElementById("Pass_word").style.borderBottomColor="red";
    document.getElementById("Pass_word").style.borderWidth="2px";
    

    err.textContent="show";
   
    
 
}
else if(/^[A-Za-z]+$/.test(pass)){
    document.getElementById("Pass_word").style.borderBottomColor="green";
    document.getElementById("Pass_word").style.borderWidth="2px";
    err.textContent="";
}
else if("".match(pass)){
    document.getElementById("Pass_word").style.borderBottomColor="white";
    document.getElementById("Pass_word").style.borderWidth="2px";
    err.textContent="";
}

}


function chec1(){
    let repass=document.getElementById("Re_Password").value
    let err1=document.getElementById("er1");
    let pass=document.getElementById("Pass_word").value
 if( /^[0-9]+$/.test(repass) ){
   
    document.getElementById("Re_Password").style.borderBottomColor="red";
    document.getElementById("Re_Password").style.borderWidth="2px";

    
    err1.textContent="show";
    
 
}
else if(/^[A-Za-z]+$/.test(repass)){
    document.getElementById("Re_Password").style.borderBottomColor="green";
    document.getElementById("Re_Password").style.borderWidth="2px";
   
}
else if("".match(repass)){
    document.getElementById("Re_Password").style.borderBottomColor="white";
    document.getElementById("Re_Password").style.borderWidth="2px";
    err1.textContent="";
}

}

