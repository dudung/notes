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


## test area
This is where the shortcode tested.

{{< graphic background="#f8f8f8" >}}

{{< lissajous id="ljs1" left="20px" top="20px" >}}
A1 = 1
T1 = 1
p1 = 0

A2 = 1
T1 = 2
p1 = 0
{{< /lissajous >}}

{{< /graphic >}}



## refs
[^viridi_2025a]: Sparisoma Viridi, "graphic shortcode", notes, 20 Mar 2025, url https://dudung.github.io/notes/25c53/ [20250321].
[^viridi_2025b]: Sparisoma Viridi, "js for fun 4", notes, 20 Mar 2025, url https://dudung.github.io/notes/25c52/ [20250321].