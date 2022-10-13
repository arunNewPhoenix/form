
const api_url = 
      "http://universities.hipolabs.com/search?country=India";
  

async function getapi(url) {
    
 
    const response = await fetch(url);
    const universityTrack = document.getElementById("selectUniversity");
    var data = await response.json();
    data.forEach(element => {
    
        const newOption = document.createElement("option");
        newOption.value = element.name;
        newOption.text = element.name;
        universityTrack.appendChild(newOption);

    });
  
  
}

getapi(api_url);


function validateAlphabetA(){
    let first_name= document.getElementById("_first_name").value;
    let res = /^[a-zA-Z]+$/.test(first_name);
    if(first_name=="") 
    {
        document.getElementById("_first_name").style.backgroundColor = "white";
    }
       
    else if(!res){
        document.getElementById("_first_name").style.backgroundColor = "#FFB6C1";
       
    } 
  
   
    
}

function validateAlphabetB(){
    let last_name= document.getElementById("_last_name").value;
    let res2 = /^[a-zA-Z]+$/.test(last_name);
    if(last_name=="") 
    {
        document.getElementById("_last_name").style.backgroundColor = "white";
    }
       
    else if(!res2){
        document.getElementById("_last_name").style.backgroundColor = "#FFB6C1";
       
    } 
}

function validateEmail() {
    let email_address = document.getElementById("_email_add").value;
    var re = /\S+@\S+\.\S+/.test(email_address);
    
    if(email_address=="")
    {
        document.getElementById("_email_add").style.backgroundColor = "white"; 
    }
    else if(!re){
        document.getElementById("_email_add").style.backgroundColor = "#FFB6C1";
    }
    else{
        document.getElementById("_email_add").style.backgroundColor = "white";
    }
  }

 function validatePhoneNumLength(){
    let phone_number = document.getElementById("_phone_num").value;
    if(phone_number.length==0)
    {
        document.getElementById("_phone_num").style.backgroundColor = "white"; 
    }
    else if(phone_number.length<10)
    {
        document.getElementById("_phone_num").style.backgroundColor = "#FFB6C1";
    }
    else if(phone_number.length==10){
        document.getElementById("_phone_num").style.backgroundColor = "white"; 
    }
    else if(phone_number.length>10)
    {
        document.getElementById("_phone_num").style.backgroundColor = "#FFB6C1";
    }
 }
