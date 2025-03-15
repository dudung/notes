+++
title = 'js for fun 3'
date = '2025-03-15T03:48:57+07:00'
draft = false
math = false
type = 'notes'
authors = ['viridi']
tags = ['for-fun']
categories = ['js']
url = '25c39'
[ref]
author = 'Sparisoma Viridi'
title = 'js for fun 3'
source = 'notes, 15 Mar 2025'
updated = '16 Mar 2025'
url = 'https://dudung.github.io/notes/25c39/'
accessed = '20250316'
+++

{{< columns >}}
+ select and options
+ click to move button
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}

<!--more-->

In order to have fun with JavaScript in a Hugo post, this note is created as a continuation of previous ones [^viridi_2025a], [^viridi_2025b].


## select and options
A `select` element with four `option` elements construct following appearance.

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

const sel = document.createElement("select");
const op0 = document.createElement("option");
const op1 = document.createElement("option");
const op2 = document.createElement("option");
const op3 = document.createElement("option");

op0.text = "Select an option";
  op0.disabled = "true";
  op0.selected = "true";
  op0.value = "";
op1.text = "Red";
  op1.value = "red";
op2.text = "Green";
  op2.value = "green";
op3.text = "Blue"
  op3.value = "blue";

sel.append(op0);
sel.append(op1);
sel.append(op2);
sel.append(op3);
sel.addEventListener("change", selectChange);

cnt.appendChild(sel);

function selectChange(e) {
  console.log(e.target.value);
}
{{< /script/runner >}}

Above result is produced using following lines.

```php
{{</* script/runner id="cnt1" */>}}
const cnt = document.getElementById("cnt1");

const sel = document.createElement("select");
const op0 = document.createElement("option");
const op1 = document.createElement("option");
const op2 = document.createElement("option");
const op3 = document.createElement("option");

op0.text = "Select an option";
  op0.disabled = "true";
  op0.selected = "true";
  op0.value = "";
op1.text = "Red";
  op1.value = "red";
op2.text = "Green";
  op2.value = "green";
op3.text = "Blue"
  op3.value = "blue";

sel.append(op0);
sel.append(op1);
sel.append(op2);
sel.append(op3);
sel.addEventListener("change", selectChange);

cnt.appendChild(sel);

function selectChange(e) {
  console.log(e.target.value);
}
{{</* /script/runner */>}}
```

There is a trick to use firt `option` element as information but can be selected [^gam6itko_2014], which should be modified when use it using JS intead of HTML. Notice that to view the value printed using `console.log()` press CTRL+SHIFT+J for Google Chrome on Windows, where other browsers on different OS might have different keyboard shortcuts to open developer console [^turner_2023].


## click to move button
Position of an element can also be altered using an event, e.g. `button` horizontal position is advanced by clicking it.

{{< script/runner id="cnt2" >}}
const cnt = document.getElementById("cnt2");
cnt.style.position = "relative";
cnt.style.height = "20px";

const btnL = document.createElement("button");
btnL.innerHTML = "&leftarrow;";
btnL.style.position = "absolute";
btnL.style.left = "0px";
btnL.addEventListener("click", function() { decLeft(btnL, btnR) });

const btnR = document.createElement("button");
btnR.innerHTML = "&rightarrow;";
btnR.style.position = "absolute";
btnR.style.left = "30px";
btnR.addEventListener("click", function() { incLeft(btnL, btnR) });

cnt.appendChild(btnL);
cnt.appendChild(btnR);

function incLeft() {
  for(let el of arguments) {
    el.style.left = parseInt(el.style.left) + 10 + "px";
  }
}

function decLeft() {
  for(let el of arguments) {
    el.style.left = parseInt(el.style.left) - 10 + "px";
  }
}
{{< /script/runner >}}

Following are lines used to obtain above result.

```php
{{</* script/runner id="cnt2" */>}}
const cnt = document.getElementById("cnt2");
cnt.style.position = "relative";
cnt.style.height = "20px";

const btnL = document.createElement("button");
btnL.innerHTML = "&leftarrow;";
btnL.style.position = "absolute";
btnL.style.left = "0px";
btnL.addEventListener("click", function() { decLeft(btnL, btnR) });

const btnR = document.createElement("button");
btnR.innerHTML = "&rightarrow;";
btnR.style.position = "absolute";
btnR.style.left = "30px";
btnR.addEventListener("click", function() { incLeft(btnL, btnR) });

cnt.appendChild(btnL);
cnt.appendChild(btnR);

function incLeft() {
  for(let el of arguments) {
    el.style.left = parseInt(el.style.left) + 10 + "px";
  }
}

function decLeft() {
  for(let el of arguments) {
    el.style.left = parseInt(el.style.left) - 10 + "px";
  }
}
{{</* /script/runner */>}}
```

Two functions, `incLeft()` and `decLeft()`, are used to increse and decrease position of elements passed as their arguments with `10` pixels. Notice that it requires `parseInt()` function to get integer value, increase or decreas it, then append `px` at the end.


## setinterval and clear interval
..

{{< script/runner id="cnt3" >}}
const cnt = document.getElementById("cnt3");
const ta1 = document.createElement("textarea");
const ta2 = document.createElement("textarea");
const ta3 = document.createElement("textarea");
const ta4 = document.createElement("textarea");
const btn = document.createElement("button");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  width = "50px";
  height = "160px";
  overflowY = "scroll";
}

with(ta2.style) {
  width = "50px";
  height = "160px";
  overflowY = "scroll";
}

with(ta3.style) {
  width = "50px";
  height = "160px";
  overflowY = "scroll";
}

with(ta4.style) {
  width = "50px";
  height = "160px";
  overflowY = "scroll";
}

btn.innerHTML = "Run"

cnt.appendChild(ta1);
cnt.appendChild(ta2);
cnt.appendChild(ta3);
cnt.appendChild(ta4);
cnt.appendChild(btn);
{{< /script/runner >}}

..


## refs
[^gam6itko_2014]: gam6itko, Michael Haddad, "Set the select option as blank as default in HTML select element", Stack Overflow, 13 May 2014 (edited 13 Jul 2022), url https://stackoverflow.com/a/23638053/9475509 [20250315].
[^turner_2023]: Carl Turner, "Open the developer console to check for errors", Good Grants Help Center, 17 Aug 2023, url https://help.goodgrants.com/hc/en-gb/articles/360001956235 [20250315].
[^viridi_2025a]: Sparisoma Viridi, "js for fun 1", notes, 9 Mar 2025, url https://dudung.github.io/notes/25c22/ [20250315].
[^viridi_2025b]: Sparisoma Viridi, "js for fun 2", notes, 13 Mar 2025 (14 Mar 2025), url https://dudung.github.io/notes/25c36/ [20250315].
