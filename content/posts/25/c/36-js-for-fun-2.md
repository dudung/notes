+++
title = 'js for fun 2'
date = '2025-03-13T20:55:18+07:00'
draft = false
math = false
type = 'notes'
authors = ['viridi']
tags = ['for-fun']
categories = ['js']
url = '25c36'
[ref]
author = 'Sparisoma Viridi'
title = 'js for fun 2'
source = 'notes, 13 Mar 2025'
updated = '-'
url = 'https://dudung.github.io/notes/25c36/'
accessed = '20250313'
+++

{{< columns >}}
+ copy textarea to textarea
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}

<!--more-->

This is a continuation of previous note [^viridi_2025], to have fun with JavaScript in a Hugo post.


## copy textarea to textarea
Two textarea elements and a button for copying content of left textarea to right textarea.

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");
const ta1 = document.createElement("textarea");
const ta2 = document.createElement("textarea");
const bt1 = document.createElement("button");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  width = "200px";
  height = "160px";
  overflowY = "scroll";
}

with(ta2.style) {
  width = "200px";
  height = "160px";
  overflowY = "scroll";
}

bt1.innerHTML = "Copy";
bt1.addEventListener("click", function() { copy(ta1, ta2) });

cnt.appendChild(ta1);
cnt.appendChild(bt1);
cnt.appendChild(ta2);

function copy(t1, t2) {
  t2.value = t1.value;
}
{{< /script/runner >}}

Previous result can be obtained with following lines of code.

```php
{{</* script/runner id="cnt1" */>}}
const cnt = document.getElementById("cnt1");
const ta1 = document.createElement("textarea");
const ta2 = document.createElement("textarea");
const bt1 = document.createElement("button");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  width = "200px";
  height = "160px";
  overflowY = "scroll";
}

with(ta2.style) {
  width = "200px";
  height = "160px";
  overflowY = "scroll";
}

bt1.innerHTML = "Copy";
bt1.addEventListener("click", function() { copy(ta1, ta2) });

cnt.appendChild(ta1);
cnt.appendChild(bt1);
cnt.appendChild(ta2);

function copy(t1, t2) {
  t2.value = t1.value;
}
{{</* /script/runner */>}}
```

Notice that the use of CSS `display: flex;` combined with `align-items: flex-start;` make it is easier to align elements to top compared to using div.


## refs
[^viridi_2025]: Sparisoma Viridi, "js for fun 1", notes, 9 Mar 2025, url https://dudung.github.io/notes/25c22/ [20250313].
