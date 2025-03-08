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
title = 'js for fun'
source = 'notes, 9 Mar 2025'
updated = 'not yet'
url = 'https://dudung.github.io/notes/25c22/'
accessed = '20250309'
+++

+ customize container

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


## refs
[^viridi_2025]: Sparisoma Viridi, "shortcodes script loader and runner", notes, 19 Jan 2025, url http://dudung.github.io/notes/25a66/ [20250309].
