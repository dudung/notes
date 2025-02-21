function hello(str) {
  let parent = document.getElementsByClassName("slide-content")[0];
  let div = document.createElement("div");
  parent.appendChild(div);
  div.innerHTML = "Hello, " + str + "!";
}
