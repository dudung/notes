+++
title = 'exp shortcode for graphic'
date = '2025-03-21T04:17:17+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi']
tags = ['graphic']
categories = ['shortcode']
url = '25c55'
[ref]
author = 'Sparisoma Viridi'
title = 'exp shortcode for graphic'
source = 'notes, 21 Mar 2025'
updated = '-'
url = 'https://dudung.github.io/notes/25c55/'
accessed = '20250321'
+++

{{< columns >}}
+ problem
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}


<!--more-->

It is experimental shortcode for solving previous problem [^viridi_2025a], but can not be tested using JS for fun approach [^viridi_2025b], since it must have separate HTML file.


## problem
To use a shortcode multiple times in a Hugo post, it requires that the shortcode JS part should not define the same variable names. There must be a way to prevent it. One of the thinkable solution is using external JS via another shortcode. When use a function, is it possible to define the same functions and include them multiple times in the post? Mermaid and KaTeX do not face such problem and even without defining the ID explicitly. They might be considered as inspiration.


## parametric function
To create Lissajous figure following function of time $t$ is used,

$$\tag{1}
f(t) = A \sin (\omega t + \phi),
$$

where $A$ is amplitude, $\omega$ is angular frequency, $\phi$ is phase shift [^gpt-4o_2025a].


## test area
This is the section where the shortcode tested multiple times.

{{< graphic background="#f8f8f8" >}}

{{< lissajous id="ljs1" left="20px" top="20px" >}}
fx 1 1 0
fy 1 1 0
tt 0 1 100
xx -1 1 5
yy -1 1 5
{{< /lissajous >}}

{{< lissajous id="ljs2" left="240px" top="20px" >}}
fx 1 1 0
fy 1 1 1.571
tt 0 1 100
xx -1 1 11
yy -1 1 11
{{< /lissajous >}}

{{< lissajous id="ljs3" left="460px" top="20px" >}}
fx 1 1 0
fy 1 0.5 0
tt 0 1 100
xx -1 1 21
yy -1 1 21
{{< /lissajous >}}

{{< /graphic >}}


## refs
[^gpt-4o_2025a]: GPT-4o, "Lissajous Figure Parameters", ChatGPT, 21 Mar 2025, url https://chatgpt.com/share/67dcb25b-95b0-800a-8121-22f4f07b6dce [20250321].
[^viridi_2025a]: Sparisoma Viridi, "graphic shortcode", notes, 20 Mar 2025, url https://dudung.github.io/notes/25c53/ [20250321].
[^viridi_2025b]: Sparisoma Viridi, "js for fun 4", notes, 20 Mar 2025, url https://dudung.github.io/notes/25c52/ [20250321].