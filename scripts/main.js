function setName() {
    user_name = prompt("Please enter your name")
    localStorage.setItem("my_name", user_name);
}

function setTitle(user_name){
    my_heading.textContent = "Hello "+user_name;
}

function setImage(){
    let src = my_image.getAttribute("src");
    if(src === "images/Nero.jpg"){
        my_image.setAttribute("src", "images/"+"beagle.jpg");
    }else {
        my_image.setAttribute("src", "images/Nero.jpg");
    }
}

function createListitem(){
    item = document.createElement("li")
    item.textContent = "New Element"
    addChangeListitem(item)
    my_list.appendChild(item);
}

function addChangeListitem(list_element){
    list_element.onclick = () => {list_element.textContent = prompt("New Value");}
}


let my_heading = document.querySelector("h1");
let my_button = document.querySelector("button");

let my_list_div = document.querySelector(".index");
let my_list_title = my_list_div.querySelector("h3");
let my_list = my_list_div.querySelector("ol");
let my_list_elements = my_list.querySelectorAll("li")

let my_image = document.querySelector("img");


my_heading.textContent = "Sup"
my_button.onclick = () => {setName(); setTitle(localStorage.getItem("my_name"));}
my_list_title.onclick = () => {createListitem();}
my_image.onclick = () => {setImage();}

for (let i=0; i<my_list_elements.length; i++){
    addChangeListitem(my_list_elements[i]);
}