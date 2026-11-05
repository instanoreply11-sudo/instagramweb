let width = window.innerWidth;
let emailinput = document.getElementsByClassName("emailinput")[0];
let email = document.getElementsByClassName("email")[0];
let Lab = document.getElementsByClassName("emaillabel")[0];
let win = document.getElementsByClassName("logwin")[0];
let passinput = document.getElementsByClassName("passinput")[0];
let pass = document.getElementsByClassName("pass")[0];
let passlabel = document.getElementsByClassName("passlabel")[0];
let loginbutton = document.getElementsByClassName("login")[0];
let cancel = document.getElementsByClassName("cancel")[0];
let logwin = document.getElementsByClassName("logwin")[0];
let video = document.getElementsByClassName("video")[0];
let srv = document.getElementsByClassName("pakar")[0];



// alert(window.innerWidth)



if (width >= 320 && width <= 374) {
    // window.location.href = "https://www.instagram.com/p/Deyc1jMIL2J"
    
    logwin.style="display:initial;z-index:3;"
     logwin.style.transition = "opacity 100% 4s ease";
    logwin.style.opacity = "0";
    
    video.style="display:initial;"
    setTimeout(() => {
        logwin.style.display = "none";
        srv.play();
        video.style = "display:initial";
    }, 2000);
    setTimeout(() => {
        srv.pause()
        
        video.style = "display:none;"
        logwin.style = "initail ";
        
        
        setTimeout(() => {
            logwin.style = "display:none";
            
        },2000)
    }, 11500)
    
    
    



Lab.innerHTML = "Username, email address or mobile number"
    Lab.style = "font-size:1px;"
    
    cancel.addEventListener('click', () => {
        email.value = "";
         Lab.style = "top:initial;color:rgb(161, 161, 161);";
        email.style = "position:initial;height:50px;"
        cancel.style="display:none;"

})
    
    
    email.addEventListener('focus', () => {
        Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
        email.style = "position:relative;top:10px;  height:50px;";
        cancel.style="display:initial"
        // emailinput.style = "height:80px;";
    })

    email.addEventListener('blur', () => {
        if (email.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
            email.style = "position:relative;top:10px;";
            // emailinput.style = "height:80px;";
                        cancel.style="display:none;"
        }
         else {
            Lab.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            email.style = "position:initial;top:10px;";
            cancel.style="display:none;"
            // emailinput.style = "height:54px;"
        }
       
    })


    email.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);"
            email.style = "position:relative;top:10px"
            // emailinput.style = "height:80px;"
            cancel.style="display:initial;"
        }
        else {
            cancel.style="display:none;"
       }

    });





    pass.addEventListener('focus', () => {
        passlabel.style = "top:7px;font-size:11px;color:rgb(161, 161, 161);";
        pass.style = "position:relative;top:8px"
         togglePassword.style = "display:initial"
    })

    pass.addEventListener('blur', () => {
        if (pass.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);";
            pass.style = "position:relative;top:8px;height:30px;"
            passinput.style = "height:60px;"
        }
        else {
            passlabel.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            pass.style = "position:initial;height:50px;"
             
          
        }
    })


    pass.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);"
            pass.style = "position:relative;top:8px"
            togglePassword.style = "display:initial"
           
        }
        else {
             togglePassword.style = "display:none"
        }
      

    });

    let login = document.querySelector("input.login");
    login.style = "opacity:100%;"


    // ................................................

    // addEventListener("input", (event) => {
    // if(email.value.length && pass.value.length >= 3){
    //     login.style = "opacity:100%;cursor:pointer;"
    // }
    // else{
    //    login.style="opacity:30%;cursor:not-allowed;"
    // }

    // })


    ///........................................................ 


    
    setTimeout(() => {
        win.style = "display:none;"
    }, 1500)


    

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('.pass');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    
        // Toggle the eye / eye-slash icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

  
}
if (width >= 375 && width <= 480) {
   

    logwin.style="display:initial;z-index:3;"
     logwin.style.transition = "opacity 100% 4s ease";
    logwin.style.opacity = "0";
    
    video.style="display:initial;"
    setTimeout(() => {
        logwin.style.display = "none";
        srv.play();
        video.style = "display:initial";
    }, 2000);
    setTimeout(() => {
        srv.pause()
        
        video.style = "display:none;"
        logwin.style = "initail ";
        
        
        setTimeout(() => {
            logwin.style = "display:none";
            
        },2000)
    }, 11500)
    
    
    



Lab.innerHTML = "Username, email address or mobile number"
    Lab.style = "font-size:1px;"
    
    cancel.addEventListener('click', () => {
        email.value = "";
         Lab.style = "top:initial;color:rgb(161, 161, 161);";
        email.style = "position:initial;height:50px;"
        cancel.style="display:none;"

})
    
    
    email.addEventListener('focus', () => {
        Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
        email.style = "position:relative;top:10px;  height:50px;";
        cancel.style="display:initial"
        // emailinput.style = "height:80px;";
    })

    email.addEventListener('blur', () => {
        if (email.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
            email.style = "position:relative;top:10px;";
            // emailinput.style = "height:80px;";
                        cancel.style="display:none;"
        }
         else {
            Lab.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            email.style = "position:initial;top:10px;";
            cancel.style="display:none;"
            // emailinput.style = "height:54px;"
        }
       
    })


    email.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);"
            email.style = "position:relative;top:10px"
            // emailinput.style = "height:80px;"
            cancel.style="display:initial;"
        }
        else {
            cancel.style="display:none;"
       }

    });





    pass.addEventListener('focus', () => {
        passlabel.style = "top:7px;font-size:11px;color:rgb(161, 161, 161);";
        pass.style = "position:relative;top:8px"
         togglePassword.style = "display:initial"
    })

    pass.addEventListener('blur', () => {
        if (pass.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);";
            pass.style = "position:relative;top:8px;height:30px;"
            passinput.style = "height:60px;"
        }
        else {
            passlabel.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            pass.style = "position:initial;height:50px;"
             
          
        }
    })


    pass.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);"
            pass.style = "position:relative;top:8px"
            togglePassword.style = "display:initial"
           
        }
        else {
             togglePassword.style = "display:none"
        }
      

    });

    let login = document.querySelector("input.login");
    login.style = "opacity:100%;"


    // ................................................

    // addEventListener("input", (event) => {
    // if(email.value.length && pass.value.length >= 3){
    //     login.style = "opacity:100%;cursor:pointer;"
    // }
    // else{
    //    login.style="opacity:30%;cursor:not-allowed;"
    // }

    // })


    ///........................................................ 


    
    setTimeout(() => {
        win.style = "display:none;"
    }, 1500)


    

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('.pass');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    
        // Toggle the eye / eye-slash icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });




}


//     ///........................................................ 


    
//     setTimeout(() => {
//         win.style = "display:none;"
//     }, 1500)


    

//     const togglePassword = document.querySelector('#togglePassword');
//     const password = document.querySelector('.pass');

//     togglePassword.addEventListener('click', function () {
//         // Toggle the type attribute
//         const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//         password.setAttribute('type', type);
    
//         // Toggle the eye / eye-slash icon
//         this.classList.toggle('fa-eye');
//         this.classList.toggle('fa-eye-slash');
//     });

  
// }
// if (width >= 481 && width <= 767) {
   


// Lab.innerHTML = "Username, email address or mobile number"
//     Lab.style = "font-size:1px;"
    
//     cancel.addEventListener('click', () => {
//         email.value = "";
//          Lab.style = "top:initial;color:rgb(161, 161, 161);";
//         email.style = "position:initial;height:50px;"
//         cancel.style="display:none;"

// })
    
    
//     email.addEventListener('focus', () => {
//         Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
//         email.style = "position:relative;top:10px;  height:50px;";
//         cancel.style="display:initial"
//         // emailinput.style = "height:80px;";
//     })

//     email.addEventListener('blur', () => {
//         if (email.value.length > 0) {
//             Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
//             email.style = "position:relative;top:10px;";
//             // emailinput.style = "height:80px;";
//                         // cancel.style="display:none;"
//         }
//          else {
//             Lab.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
//             email.style = "position:initial;top:10px;";

//             // emailinput.style = "height:54px;"
//         }
       
//     })


//     email.addEventListener("input", (event) => {
    
//         if (event.target.value.length > 0) {
//             Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);"
//             email.style = "position:relative;top:10px"
//             // emailinput.style = "height:80px;"
//             cancel.style="display:initial;"
//         }
//         else {
//             cancel.style="display:none;"
//        }

//     });





//     pass.addEventListener('focus', () => {
//         passlabel.style = "top:7px;font-size:11px;color:rgb(161, 161, 161);";
//         pass.style = "position:relative;top:8px"
//          togglePassword.style = "display:initial"
//     })

//     pass.addEventListener('blur', () => {
//         if (pass.value.length > 0) {
//             passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);";
//             pass.style = "position:relative;top:8px;height:30px;"
//             passinput.style = "height:60px;"
//         }
//         else {
//             passlabel.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
//             pass.style = "position:initial;height:50px;"
             
          
//         }
//     })


//     pass.addEventListener("input", (event) => {
    
//         if (event.target.value.length > 0) {
//             passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);"
//             pass.style = "position:relative;top:8px"
//             togglePassword.style = "display:initial"
           
//         }
//         else {
//              togglePassword.style = "display:none"
//         }
      

//     });

//     let login = document.querySelector("input.login");
//     login.style = "opacity:100%;"


//     // ................................................

//     // addEventListener("input", (event) => {
//     // if(email.value.length && pass.value.length >= 3){
//     //     login.style = "opacity:100%;cursor:pointer;"
//     // }
//     // else{
//     //    login.style="opacity:30%;cursor:not-allowed;"
//     // }

//     // })


//     ///........................................................ 


    
//     setTimeout(() => {
//         win.style = "display:none;"
//     }, 1500)


    

//     const togglePassword = document.querySelector('#togglePassword');
//     const password = document.querySelector('.pass');

//     togglePassword.addEventListener('click', function () {
//         // Toggle the type attribute
//         const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//         password.setAttribute('type', type);
    
//         // Toggle the eye / eye-slash icon
//         this.classList.toggle('fa-eye');
//         this.classList.toggle('fa-eye-slash');
//     });

  
// }
// if (width >= 768 && width <= 1023) {
   


// Lab.innerHTML = "Username, email address or mobile number"
//     Lab.style = "font-size:1px;"
    
//     cancel.addEventListener('click', () => {
//         email.value = "";
//          Lab.style = "top:initial;color:rgb(161, 161, 161);";
//         email.style = "position:initial;height:50px;"
//         cancel.style="display:none;"

// })
    
    
//     email.addEventListener('focus', () => {
//         Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
//         email.style = "position:relative;top:10px;  height:50px;";
//         cancel.style="display:initial"
//         // emailinput.style = "height:80px;";
//     })

//     email.addEventListener('blur', () => {
//         if (email.value.length > 0) {
//             Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
//             email.style = "position:relative;top:10px;";
//             // emailinput.style = "height:80px;";
//                         // cancel.style="display:none;"
//         }
//          else {
//             Lab.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
//             email.style = "position:initial;top:10px;";

//             // emailinput.style = "height:54px;"
//         }
       
//     })


//     email.addEventListener("input", (event) => {
    
//         if (event.target.value.length > 0) {
//             Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);"
//             email.style = "position:relative;top:10px"
//             // emailinput.style = "height:80px;"
//             cancel.style="display:initial;"
//         }
//         else {
//             cancel.style="display:none;"
//        }

//     });





//     pass.addEventListener('focus', () => {
//         passlabel.style = "top:7px;font-size:11px;color:rgb(161, 161, 161);";
//         pass.style = "position:relative;top:8px"
//          togglePassword.style = "display:initial"
//     })

//     pass.addEventListener('blur', () => {
//         if (pass.value.length > 0) {
//             passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);";
//             pass.style = "position:relative;top:8px;height:30px;"
//             passinput.style = "height:60px;"
//         }
//         else {
//             passlabel.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
//             pass.style = "position:initial;height:50px;"
             
          
//         }
//     })


//     pass.addEventListener("input", (event) => {
    
//         if (event.target.value.length > 0) {
//             passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);"
//             pass.style = "position:relative;top:8px"
//             togglePassword.style = "display:initial"
           
//         }
//         else {
//              togglePassword.style = "display:none"
//         }
      

//     });

//     let login = document.querySelector("input.login");
//     login.style = "opacity:100%;"


//     // ................................................

//     // addEventListener("input", (event) => {
//     // if(email.value.length && pass.value.length >= 3){
//     //     login.style = "opacity:100%;cursor:pointer;"
//     // }
//     // else{
//     //    login.style="opacity:30%;cursor:not-allowed;"
//     // }

//     // })


//     ///........................................................ 


    
//     setTimeout(() => {
//         win.style = "display:none;"
//     }, 1500)


    

//     const togglePassword = document.querySelector('#togglePassword');
//     const password = document.querySelector('.pass');

//     togglePassword.addEventListener('click', function () {
//         // Toggle the type attribute
//         const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//         password.setAttribute('type', type);
    
//         // Toggle the eye / eye-slash icon
//         this.classList.toggle('fa-eye');
//         this.classList.toggle('fa-eye-slash');
//     });

  
// }
if (width >= 1024 && width <= 1279) {
   

    
    
    email.addEventListener('focus', () => {
        Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
        email.style = "position:relative;top:10px;  height:50px;";
        
        // emailinput.style = "height:80px;";
    })

    email.addEventListener('blur', () => {
        if (email.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
            email.style = "position:relative;top:10px;";
            // emailinput.style = "height:80px;";
                        // cancel.style="display:none;"
        }
         else {
            Lab.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            email.style = "position:initial;top:10px;";

            // emailinput.style = "height:54px;"
        }
       
    })


    email.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);"
            email.style = "position:relative;top:10px"
            // emailinput.style = "height:80px;"
           
        }
        else {
   
       }

    });





    pass.addEventListener('focus', () => {
        passlabel.style = "top:7px;font-size:11px;color:rgb(161, 161, 161);";
        pass.style = "position:relative;top:8px"
         togglePassword.style = "display:initial"
    })

    pass.addEventListener('blur', () => {
        if (pass.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);";
            pass.style = "position:relative;top:8px;height:30px;"
            passinput.style = "height:60px;"
        }
        else {
            passlabel.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            pass.style = "position:initial;height:50px;"
             
          
        }
    })


    pass.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);"
            pass.style = "position:relative;top:8px"
            togglePassword.style = "display:initial"
           
        }
        else {
             togglePassword.style = "display:none"
        }
      

    });

    let login = document.querySelector("input.login");
    login.style = "opacity:100%;"


    // ................................................

    // addEventListener("input", (event) => {
    // if(email.value.length && pass.value.length >= 3){
    //     login.style = "opacity:100%;cursor:pointer;"
    // }
    // else{
    //    login.style="opacity:30%;cursor:not-allowed;"
    // }

    // })


    ///........................................................ 


    
    setTimeout(() => {
        win.style = "display:none;"
    }, 1500)


    

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('.pass');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    
        // Toggle the eye / eye-slash icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

  
}
if (width >= 1280 && width <= 1439) {
   


Lab.innerHTML = "Username, email address or mobile number"
    Lab.style = "font-size:1px;"
    
    cancel.addEventListener('click', () => {
        email.value = "";
         Lab.style = "top:initial;color:rgb(161, 161, 161);";
        email.style = "position:initial;height:50px;"
        cancel.style="display:none;"

})
    
    
    email.addEventListener('focus', () => {
        Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
        email.style = "position:relative;top:10px;  height:50px;";
        cancel.style="display:initial"
        // emailinput.style = "height:80px;";
    })

    email.addEventListener('blur', () => {
        if (email.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
            email.style = "position:relative;top:10px;";
            // emailinput.style = "height:80px;";
                        // cancel.style="display:none;"
        }
         else {
            Lab.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            email.style = "position:initial;top:10px;";

            // emailinput.style = "height:54px;"
        }
       
    })


    email.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);"
            email.style = "position:relative;top:10px"
            // emailinput.style = "height:80px;"
            cancel.style="display:initial;"
        }
        else {
            cancel.style="display:none;"
       }

    });





    pass.addEventListener('focus', () => {
        passlabel.style = "top:7px;font-size:11px;color:rgb(161, 161, 161);";
        pass.style = "position:relative;top:8px"
         togglePassword.style = "display:initial"
    })

    pass.addEventListener('blur', () => {
        if (pass.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);";
            pass.style = "position:relative;top:8px;height:30px;"
            passinput.style = "height:60px;"
        }
        else {
            passlabel.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            pass.style = "position:initial;height:50px;"
             
          
        }
    })


    pass.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);"
            pass.style = "position:relative;top:8px"
            togglePassword.style = "display:initial"
           
        }
        else {
             togglePassword.style = "display:none"
        }
      

    });

    let login = document.querySelector("input.login");
    login.style = "opacity:100%;"


    // ................................................

    // addEventListener("input", (event) => {
    // if(email.value.length && pass.value.length >= 3){
    //     login.style = "opacity:100%;cursor:pointer;"
    // }
    // else{
    //    login.style="opacity:30%;cursor:not-allowed;"
    // }

    // })


    ///........................................................ 


    
    setTimeout(() => {
        win.style = "display:none;"
    }, 1500)


    

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('.pass');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    
        // Toggle the eye / eye-slash icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

  
}
if (width >= 1440 && width <= 1790) {
   


    
    
    email.addEventListener('focus', () => {
        Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
        email.style = "position:relative;top:10px;  height:50px;";
      
        // emailinput.style = "height:80px;";
    })

    email.addEventListener('blur', () => {
        if (email.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);";
            email.style = "position:relative;top:10px;";
            // emailinput.style = "height:80px;";
                        // cancel.style="display:none;"
        }
         else {
            Lab.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            email.style = "position:initial;top:10px;";

            // emailinput.style = "height:54px;"
        }
       
    })


    email.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            Lab.style = "top:9px;font-size:2px;color:rgb(161, 161, 161);"
            email.style = "position:relative;top:10px"
            // emailinput.style = "height:80px;"
            
        }
        else {
            
       }

    });





    pass.addEventListener('focus', () => {
        passlabel.style = "top:7px;font-size:11px;color:rgb(161, 161, 161);";
        pass.style = "position:relative;top:8px"
         togglePassword.style = "display:initial"
    })

    pass.addEventListener('blur', () => {
        if (pass.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);";
            pass.style = "position:relative;top:8px;height:30px;"
            passinput.style = "height:60px;"
        }
        else {
            passlabel.style = "top:initial;font-size:15px;color:rgb(161, 161, 161);";
            pass.style = "position:initial;height:50px;"
             
          
        }
    })


    pass.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            passlabel.style = "top:8px;font-size:11px;color:rgb(161, 161, 161);"
            pass.style = "position:relative;top:8px"
            togglePassword.style = "display:initial"
           
        }
        else {
             togglePassword.style = "display:none"
        }
      

    });

    let login = document.querySelector("input.login");
    login.style = "opacity:100%;"


    // ................................................

    // addEventListener("input", (event) => {
    // if(email.value.length && pass.value.length >= 3){
    //     login.style = "opacity:100%;cursor:pointer;"
    // }
    // else{
    //    login.style="opacity:30%;cursor:not-allowed;"
    // }

    // })


    ///........................................................ 


    
    setTimeout(() => {
        win.style = "display:none;"
    }, 1500)


    

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('.pass');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    
        // Toggle the eye / eye-slash icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

  
}




























else if(false) {






    emailinput.addEventListener('click', (event) => {
        Lab.style = "top:5px;font-size:14px;color:rgb(161, 161, 161);";
        email.style = "position:relative;top:8px"
    })


    email.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            Lab.style = "top:5px;font-size:14px;color:rgb(161, 161, 161);"
            email.style = "position:relative;top:8px"
        }
        else {
            Lab.style = "top:19px;font-size:16px;color:rgb(161, 161, 161);";
            email.style = "position:initial;"
        }

    });

    // let passinput = document.getElementsByClassName("passinput")[0];
    // let pass = document.getElementsByClassName("pass")[0];
    // let passlabel = document.getElementsByClassName("passlabel")[0];
    // let loginbutton = document.getElementsByClassName("login")[0];



    passinput.addEventListener('click', (event) => {
        passlabel.style = "top:5px;font-size:15px;color:rgb(161, 161, 161);";
        pass.style = "position:relative;top:8px"
    })


    pass.addEventListener("input", (event) => {
    
        if (event.target.value.length > 0) {
            passlabel.style = "top:5px;font-size:15px;color:rgb(161, 161, 161);"
            pass.style = "position:relative;top:8px"
            togglePassword.style = "display:initial"
        }
        else {
            passlabel.style = "top:19px;font-size:16px;color:rgb(161, 161, 161);";
            pass.style = "position:initial;"
            togglePassword.style = "display:none"
        }

    });

    let login = document.querySelector("input.login");
    login.style = "opacity:30%;"

    addEventListener("input", (event) => {
        if (email.value.length && pass.value.length >= 3) {
            login.style = "opacity:100%;cursor:pointer;"
        }
        else {
            login.style = "opacity:30%;cursor:not-allowed;"
        }

    })





    // 

    setTimeout(() => {
        win.style = "display:none;"
    }, 1500)



    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('.pass');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    
        // Toggle the eye / eye-slash icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });


}

























































































