// getElementById()
let heading = document.getElementById("heading");
console.log(heading);

// Change innerHTML
heading.innerHTML = "Welcome to JavaScript DOM";

// textContent
let text = document.getElementById("text");
text.textContent = "Text Changed";

// style property
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";

// getElementsByClassName()
let boxes = document.getElementsByClassName("box");
console.log(boxes);

// getElementsByTagName()
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// querySelector()
let para = document.querySelector(".para");
console.log(para);

// querySelectorAll()
let allPara = document.querySelectorAll(".para");
console.log(allPara);

// src property
let image = document.getElementById("image");
image.src = "https://via.placeholder.com/300";

// getAttribute()
console.log(image.getAttribute("src"));

// setAttribute()
image.setAttribute("alt", "Sample Image");

// value property
let input = document.getElementById("name");
console.log(input.value);

// createElement()
let newElement = document.createElement("h2");
newElement.textContent = "New Element Created";

// appendChild()
document.body.appendChild(newElement);

// remove()
let removeElement =
document.getElementById("removeMe");

removeElement.remove();

// classList add()
heading.classList.add("active");

// classList remove()
heading.classList.remove("active");

// classList toggle()
heading.classList.toggle("dark");

// parentElement
console.log(heading.parentElement);

// children
console.log(document.body.children);

// firstElementChild
console.log(document.body.firstElementChild);

// lastElementChild
console.log(document.body.lastElementChild);

// nextElementSibling
console.log(heading.nextElementSibling);

// previousElementSibling
console.log(text.previousElementSibling);

// addEventListener()
let button =
document.getElementById("btn");

button.addEventListener(
    "click",
    function() {
        alert("Button Clicked");
    }
);

// onclick
button.onclick = function() {
    console.log("Button Pressed");
};