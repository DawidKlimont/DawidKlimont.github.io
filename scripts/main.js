function multiply(num1, num2){
    return num1*num2;
}

function setName() {
    let user_name = prompt("Please enter your name");
    
    localStorage.setItem("my_name", user_name);
}

function setTitle(user_name){
    my_heading.textContent = "Hello "+user_name;
}

let text = "Funny Text";
let is_text_set = true;

//  Normal Comment
/*
*   Advanced Commenting
*/

const my_heading = document.querySelector("h1");
if (is_text_set === true){
    my_heading.textContent = text;
}else {
    alert("Error");
}

console.log(multiply(21, 20));

let image = document.querySelector("img");
image.addEventListener("click", function() {
                                    let src = image.getAttribute("src");
                                    if(src === "images/Nero.jpg"){
                                        image.setAttribute("src", "images/beagle.jpg");
                                    }
                                });

let myButton = document.querySelector("button");
let my_name = "empty";


myButton.onclick = () => {
                    setName();
                    setTitle(localStorage.getItem("my_name"));
                }