var wrapper = document.querySelector('.feedback-wrapper'),
		button_close = document.querySelector('.feedback-close'),
		button = document.querySelector('.contact-feedback'),
		form = document.querySelector('.feedback'),
		f_login = document.getElementById('feedback-name'),
		f_email = document.getElementById('feedback-email'),
		f_comment = document.getElementById('feedback-comment'),
		email = document.querySelector('.subscriptions-email'),
		search = document.querySelector('.search-field'),
		form_login = document.querySelector('.login'),
		l_email = document.getElementById('login-email'),
		l_pass = document.getElementById('login-password'),
		s_login,
		s_email,
		auth_login;

if(localStorage)
{
	s_login = localStorage.getItem("login");
	s_email = localStorage.getItem("email");
	auth_login = localStorage.getItem("auth_login");
}

function validateInput(event, el){
	event = event || window.event;
	if(el){
		event.preventDefault();
		if(el.value)
			el.classList.add('content-exist');
		else 
			el.classList.remove('content-exist');
	}
};

search.addEventListener('blur',function(event){validateInput(event,search)});
l_email.addEventListener('blur',function(event){validateInput(event,l_email)});
l_pass.addEventListener('blur',function(event){validateInput(event,l_pass)});

document.addEventListener("DOMContentLoaded", function(event){
	l_email.value = auth_login;
	validateInput(event,l_email);
});

form_login.addEventListener("submit", function(event) {
	if(!l_email.value || !l_pass.value){
		event.prevent.Default();
	}
	else {
		localStorage.setItem("auth_login",l_email.value);
	}
});

form_login.addEventListener("blur", function(event) {
	form_login.classList.remove('modal-error');
});

if(form){
	form.addEventListener("submit", function(event) {
		if(!f_login.value || !f_email.value || !f_comment.value){
			event.preventDefault();
			form.classList.add('modal-error');
			setTimeout(function(){form.classList.remove('modal-error');}, 600);

		}
		else {
			localStorage.setItem("login",f_login.value);
			localStorage.setItem("email",f_email.value);
		}
	});

	button.addEventListener('click',function(event){
		event = event || window.event;
		if(wrapper && !wrapper.classList.contains('element-show')){
			event.preventDefault();
			wrapper.classList.add('element-show');
			
			if(s_login && s_email){
				f_login.value=s_login;
				f_email.value=s_email;
				f_login.classList.add("content-exist");
				f_email.classList.add("content-exist");
				f_comment.focus();
			}
			else{
				f_login.focus();
			}
		}
	});

	wrapper.addEventListener('click',function(event){
		event = event || window.event;
		if (event.target == this){
				if(wrapper && wrapper.classList.contains('element-show')){
					event.preventDefault();
					wrapper.classList.remove('element-show');
					form.classList.remove('modal-error');
				}
		}
	});

	button_close.addEventListener('click',function(event){
		event = event || window.event;
		if(wrapper && wrapper.classList.contains('element-show')){
			event.preventDefault();
			wrapper.classList.remove('element-show');
			form.classList.remove('modal-error');
		}
	});

	window.addEventListener("keydown", function(event){
		if(event.keyCode === 27){
			if(wrapper.classList.contains('element-show'))
				wrapper.classList.remove("element-show");
			form.classList.remove('modal-error');
		}
	})

	f_login.addEventListener('blur',function(event){validateInput(event,f_login)});
	f_email.addEventListener('blur',function(event){validateInput(event,f_email)});
	f_comment.addEventListener('blur',function(event){validateInput(event,f_comment)});
}


if(email)
	email.addEventListener('blur',function(event){validateInput(event,email)});
