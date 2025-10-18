

// popup button and our services
document.addEventListener("DOMContentLoaded",()=>{
      const loginbtn=document.querySelector(".login_btn_header");
      const crossbtn=document.querySelector(".crossbtn");
      const overlay=document.querySelector(".overlay")
      const loginbox=document.querySelector(".loginbox");
      
      if(loginbox && crossbtn && overlay && loginbtn)
      {
       loginbtn.addEventListener("click",()=>{
             overlay.style.display="block";
            setTimeout(() => {
                 loginbox.classList.add("show"); 
            }, 40);
       })


      crossbtn.addEventListener("click",()=>{
            loginbox.classList.remove("show");
            setTimeout(() => {
                  overlay.style.display="none";
            }, 400);
      })
     }

});
     



        const phoneinput=document.querySelector(".enter")
         phoneinput.addEventListener("input",()=>{
            phoneinput.value=phoneinput.value.replace(/[^0-9]/g,'');

        if(phoneinput.value.length>10)
         {
            phoneinput.value=phoneinput.value.slice(0,10);
         }
        });