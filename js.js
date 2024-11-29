const username = document.querySelector("#username");
const password = document.querySelector("#password");
const buton = document.querySelector("#click");
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");


buton.addEventListener("click",() => {
    if(username.value.trim() == "" && password.value.trim() == ""){
        span1.innerHTML = "you need to full";
        span2.innerHTML = "you need to full"
        
    }else {

        if(password.value.length < 8){
            span1.innerHTML = "";
            span2.innerHTML = "no 8 less";
        }else if (password.value.includes("@")){
            span2.innerHTML = "no @"
        }else {const data = {
            username: username.value,
            password: password.value,
        };
        console.log(data);
        
        }}

        
    });
        

            

        

       
        
    

    
    
       
    

