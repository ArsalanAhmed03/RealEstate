function mksigndiv() {
    const MB = document.querySelector("body");

    const signinbody = document.createElement("div");
    MB.appendChild(signinbody);
    signinbody.classList.add("signinbody");
    signinbody.style.display = "none";
    signinbody.style.opacity = "0%";

    const signinbox = document.createElement("div");
    signinbody.appendChild(signinbox);
    signinbox.classList.add("signin-box");

    const cross = document.createElement("div");
    signinbox.appendChild(cross);

    function removelogin() {
        const body = document.querySelector("body");
        body.style.overflow = "auto";
        const logdiv = document.querySelector(".signinbody");
        logdiv.style.display = 'none';
        logdiv.style.opacity = '0%';
        logdiv.parentNode.removeChild(logdiv);
    }

    cross.classList.add("cross");
    cross.onclick = removelogin;

    const crossline1 = document.createElement("div");
    const crossline2 = document.createElement("div");
    cross.appendChild(crossline1);
    cross.appendChild(crossline2);
    crossline1.id = "crossline1";
    crossline2.id = "crossline2";

    const heading2 = document.createElement("h2");
    heading2.textContent = "Sign In Into Your Account";
    signinbox.appendChild(heading2);

    const heading3 = document.createElement("h3");
    heading3.textContent = "Welcome Back!";
    signinbox.appendChild(heading3);

    const form = document.createElement("form");
    form.method = "post";
    form.action = "/login";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Enter Your Email";
    form.appendChild(emailInput);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.name = "password";
    passwordInput.placeholder = "Enter Your Password";
    form.appendChild(passwordInput);

    const loginButton = document.createElement("button");
    loginButton.textContent = "LOG IN";
    form.appendChild(loginButton);

    signinbox.appendChild(form);

    const forgotPasswordLink = document.createElement("a");
    forgotPasswordLink.href = "#";
    forgotPasswordLink.textContent = "Forgot Password?";
    signinbox.appendChild(forgotPasswordLink);

    const breakDiv = document.createElement("div");
    breakDiv.classList.add("break");

    const breakline1 = document.createElement("div");
    breakline1.classList.add("breakline");
    breakDiv.appendChild(breakline1);

    const orText = document.createElement("p");
    orText.textContent = "OR";
    breakDiv.appendChild(orText);

    const breakline2 = document.createElement("div");
    breakline2.classList.add("breakline");
    breakDiv.appendChild(breakline2);

    signinbox.appendChild(breakDiv);
}

function addHeader() {
    const MainHeader = document.querySelector('header');

    const header_logo = document.createElement("a");
    header_logo.textContent = "UAE LANDMARKS";
    header_logo.href = "/src/index.html";
    header_logo.classList.add("logo");
    MainHeader.appendChild(header_logo);

    const header_pageoptions = document.createElement("div");
    header_pageoptions.classList.add("page-options");
    const textContents = ["BUY", "SELL", "RENT", "INVEST"];

    MainHeader.appendChild(header_pageoptions);

    for (let i = 0; i < 4; i++) {
        var anchor = document.createElement("a");
        anchor.textContent = textContents[i];
        anchor.href = "/" + textContents[i];
        header_pageoptions.appendChild(anchor);
    }

    const input_form = document.createElement("form");
    input_form.classList.add("input_form");
    input_form.action = "/search";
    input_form.method = "post";
    const input_box = document.createElement("input");
    input_box.type = "text";
    input_box.name = "search_term";
    input_box.placeholder = "search";
    input_form.appendChild(input_box);
    const search_btn = document.createElement("button");
    search_btn.type = "submit";
    search_btn.textContent = "search"
    input_form.appendChild(search_btn);
    MainHeader.appendChild(input_form);

    const signUpLink = document.createElement("a");
    signUpLink.href = "/SIGNUP";
    const signUpBtn = document.createElement("button");
    signUpBtn.textContent = "SignUp";
    signUpLink.appendChild(signUpBtn);
    MainHeader.appendChild(signUpLink);

    function showlogin() {
        mksigndiv();
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        const logdiv = document.querySelector(".signinbody");
        logdiv.style.display = 'flex';
        setTimeout(() => {
            logdiv.style.opacity = '100%';
        }, 100);
    }

    const signInLink = document.createElement("a");
    signInLink.onclick = showlogin;
    const signInBtn = document.createElement("button");
    signInBtn.textContent = "SignIn";
    signInLink.appendChild(signInBtn);
    MainHeader.appendChild(signInLink);
}


