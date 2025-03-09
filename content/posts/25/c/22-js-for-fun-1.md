+++
title = 'js for fun 1'
date = '2025-03-09T05:17:53+07:00'
draft = false
math = false
type = 'notes'
authors = ['viridi']
tags = ['for-fun']
categories = ['js']
url = '25c22'
[ref]
author = 'Sparisoma Viridi'
title = 'js for fun 1'
source = 'notes, 9 Mar 2025'
updated = 'not yet'
url = 'https://dudung.github.io/notes/25c22/'
accessed = '20250309'
+++

{{< columns >}}
+ customize container
+ toggle button
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}

<!--more-->

There was a pair of shortcodes allowing to have fun with JS inside a Hugo post. They are `script/loader` and `script/runner` [^viridi_2025]. The former is for loading JS from external and the later is for executing JS in the post. Here the last will be used in having fun with JS in a Hugo post.


## customize container
a `div` is the container for DOM elements created by JS placed between pair of `script/runner` shortcode.

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");
cnt.innerHTML = "Hello, World!";

with(cnt.style) {
  border = "2px solid cyan";
  borderRadius = "20px"
  padding = "4px 12px";
  width = "200px";
  textAlign = "center";
  background = "darkblue";
  color = "white";
}
{{< /script/runner >}}

Above result is obtained using following code.

```php
{{</* script/runner id="cnt1" */>}}
const cnt = document.getElementById("cnt1");
cnt.innerHTML = "Hello, World!";

with(cnt.style) {
  border = "2px solid cyan";
  borderRadius = "20px"
  padding = "4px 12px";
  width = "200px";
  textAlign = "center";
  background = "darkblue";
  color = "white";
}
{{</* /script/runner */>}}
```

Notice that `document.getElementById("cnt1")` is due to `id="cnt1"`, argument of the shortcode. And the text "Hello, World!" is set using 
`.innerHTML` property of `div` element. There is better approach using `.appendChild()` method.

If there is more that one use of `script/runner` shortcode, every container should have unique `id`. Otherwise it will only modified the first one.


## toggle button
Previously, how to customize a structural element is shown. In this part example of a form element, a button, is given. What elements fall in which categories, structural or form elements, can be found in some resources but not with the exact same categories [^gpt4o_20205].

{{< script/runner id="cnt2" >}}
const cnt = document.getElementById("cnt2");

const btn = document.createElement("button");
btn.innerHTML = "Off";

btn.addEventListener("click", function() {
    if(btn.innerHTML == "Off") {
      btn.innerHTML = "On";
    } else {
      btn.innerHTML = "Off";
    }
});

cnt.appendChild(btn);
{{< /script/runner >}}

Following is code to get above result.

```php
{{</* script/runner id="cnt2" */>}}
const cnt = document.getElementById("cnt2");

const btn = document.createElement("button");
btn.innerHTML = "Off";

btn.addEventListener("click", function() {
    if(btn.innerHTML == "Off") {
      btn.innerHTML = "On";
    } else {
      btn.innerHTML = "Off";
    }
});

cnt.appendChild(btn);
{{</* /script/runner */>}}
```

Using `click` event the `button` will toggle its state between `On` and `Off`. It is not a good example for toggle button. But just for now it is working. 

## textarea
..

{{< script/runner id="cnt3" >}}
const cnt = document.getElementById("cnt3");
const ta = document.createElement("textarea");

with(ta.style) {
  overflowY = "scroll";
  height = "100px";
  width = "220px";
}

ta.value = "\
10 REM Simple Program\n\
15 BEGIN\n\
20 PRINT 'Hello, World!'\n\
30 END\
";

cnt.appendChild(ta);
{{< /script/runner >}}

..


## refs
[^viridi_2025]: Sparisoma Viridi, "shortcodes script loader and runner", notes, 19 Jan 2025, url http://dudung.github.io/notes/25a66/ [20250309].
[^gpt4o_20205]: GPT-4o, "Structural and Form Elements", Chat GPT, 9 Mar 2025, url https://chatgpt.com/share/67cd065f-de60-800a-9aaa-d0d1b4f7966f [20250309].