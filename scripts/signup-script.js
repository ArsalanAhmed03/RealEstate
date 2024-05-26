document.querySelector("#signupform").addEventListener('submit', async function (event) {
    const Email_div = document.getElementById('email');
    const email = Email_div.value;
    const password_div = document.getElementById('password');
    const password = password_div.value;
    const confirm_password_div = document.getElementById('confirm-password');
    const confirm_password = confirm_password_div.value;
    const PhoneNumber_div = document.getElementById('phone');
    const PHN = PhoneNumber_div.value;

    event.preventDefault();

    if (password.length < 8) {
        console.log("Password too short");
        highlightbox(password_div, "Password Too Short");
    } else if (confirm_password !== password) {
        highlightbox(confirm_password_div, "Password doesn't match");
    } else {
        try {
            const response = await fetch('/validate-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email , PHN: PHN})
            });

            if (!response.ok) {
                const result = await response.json();
                if(response.status === 400){
                    highlightbox(Email_div, result.message);
                }
                else{
                    highlightbox(PhoneNumber_div, result.message);
                }
            } else {
                const result = await response.json();
                console.log(result.message);
                document.querySelector("#signupform").submit();
            }
        } catch (error) {
            console.error("Error during email validation", error);
        }
    }
});


function highlightbox(div, message) {
    div.style.border = "3px solid rgba(255, 0, 0, 0.50)";
    const message_div = document.createElement("div");
    message_div.textContent = message;

    if (div.parentNode.lastChild === div) {
        div.parentNode.appendChild(message_div);
    }
    else {
        div.parentNode.insertBefore(message_div, div.nextSibling);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}