// window.onload = function() {
//     addfooter();
// };

function addfooter(){
    const footer_tag = document.querySelector('footer');
    var Copyrights = document.createElement("p");
    Copyrights.textContent = "Copyright 2024 UAELANDMARKS.com All rights reserved";
    var links = document.createElement("div");
    links.classList.add("footer-options");
    const link_texts = ["Terms & Conditions |", " Privacy Policy |"," Disclaimer"];
    for(let i = 0; i < 3; i++){
        var anchor = document.createElement("a");
        anchor.href = "#";
        anchor.textContent = link_texts[i];
        links.appendChild(anchor);
    }
    var image = document.createElement("img");
    image.src = "/images/City10.png";
    image.alt = "image";
    image.width= "200";

    footer_tag.appendChild(Copyrights);
    footer_tag.appendChild(links);
    footer_tag.appendChild(image);
}