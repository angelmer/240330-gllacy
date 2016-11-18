            var link = document.querySelector(".feedback-btn");
            var popup = document.querySelector(".feedback");
            var close = document.querySelector(".feedback-close");
            var login = popup.querySelector("[name=name]");
            var form = popup.querySelector("form");
            var email = popup.querySelector("[name=email]");
            var storage = localStorage.getItem("login");
            
            link.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.add("feedback-show");
                
                if(storage) {
                    login.value = storage;
                    email.focus();
                } else {
                    login.focus();
                }
            });
            
            form.addEventListener("submit", function(event){
                if(!login.value||!email.value) {
                event.preventDefault();
                popup.classList.remove("feedback-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("feedback-error");
                }
                else {
                    localStorage.setItem("login", login.value);
                }
            });
            
            close.addEventListener("click", function(event){
                event.preventDefault();
                popup.classList.remove("feedback-show");
                popup.classList.remove("feedback-error");
            });
            
            window.addEventListener("keydown", function(event) {
               if(event.keyCode === 27) {
                   if (popup.classList.contains("feedback-show")) {
                       popup.classList.remove("feedback-show");
                       popup.classList.remove("feedback-error");
                   }
               } 
            });