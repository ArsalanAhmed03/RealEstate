document.querySelector("#signupform").addEventListener('submit',function(event){
    const password_div = document.getElementById('password');
    const password = password_div.value;
    const confirm_password_div = document.getElementById('confirm-password');
    const confirm_password = confirm_password_div.value;

    if(password.length < 8){
        console.log("password to short");
        event.preventDefault();
        highlightbox(password_div,"Password Too Short");
    }
    else{
        if(confirm_password !== password){
            event.preventDefault();
            highlightbox(confirm_password_div,"Password doesn't Match");
        }
    }
});

function highlightbox(div,message){
    div.style.border = "3px solid rgba(255, 0, 0, 0.50)";
    const message_div = document.createElement("div");
    message_div.textContent = message;
    
    if(div.parentNode.lastChild === div){
        div.parentNode.appendChild(message_div);         
    }
    else{
        div.parentNode.insertBefore(message_div,div.nextSibling);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}