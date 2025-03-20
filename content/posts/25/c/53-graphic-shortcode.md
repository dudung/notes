+++
title = 'graphic shortcode'
date = '2025-03-20T11:35:07+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi']
tags = ['graphic']
categories = ['shortcode']
url = '25c53'
[ref]
author = 'Sparisoma Viridi'
title = 'graphic shortcode'
source = 'notes, 20 Mar 2025'
updated = '-'
url = 'https://dudung.github.io/notes/25c53/'
accessed = '20250320'
+++

{{< columns >}}
+ problem 1
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}


<!--more-->

This note is a continuation of previous note [^viridi_2025].


## problem 1
When there are more than one container, even already with different ID, they still refer to the same container. ~Can not continue. Close this as not work and will be continued in other note~.

```php
{{</* graphic */>}}
  {{</* subgraphic left="10%" top="25%" width="30%" height="10%" borderwidth="1px" fontsize="2m" */>}}
    ${\mathbf H}  \ket{\psi} = E \ket{\psi}$
  {{</* /subgraphic */>}}
  
  {{</* subgraphic left="10%" top="35%" width="30%" height="10%" borderwidth="1px" fontsize="2m" */>}}
    ${\mathbf H}  \ket{\psi} = E \ket{\psi}$
  {{</* /subgraphic */>}}
{{</* /graphic */>}}
```

Feature for dynamic size of all elements is cancelled. Concentrate only for article part of a note. At least the graphic shortcode can be taken as screenshot for OSF slide.


## problem 2
While editing Hugo post, template, shortcode, or CSS, it seems to cache previous version of style, so the current style does not affect immediately. Suggestions [^gpt-4o_2025] have been tested, but none works smoothly but only intermittens. 


## test area
Following are current result after resolving previous problems.

{{< graphic >}}

{{< canvas left="60px" top="20px" width="200px" height="200px" >}}
tmin = 0
tmax = 6.28
nt = 101

xmin = -1.01
xmax = 1.01
nx = 11

ymin = -1.01
ymax = 1.01
ny = 11

fx = "Math.sin(1*t)"
fy = "Math.sin(2*t)"
{{< /canvas >}}

{{< equation left="140px" top="250px" >}}
$x = \sin t$
{{< /equation >}}

{{< equation left="-10px" top="110px" angle="-90" >}}
$y = \sin 2t$
{{< /equation >}}

{{< /graphic >}}

To obtain above result following lines are required.

```php
{{</* graphic */>}}

{{</* canvas left="60px" top="20px" width="200px" height="200px" */>}}
tmin = 0
tmax = 6.28
nt = 101

xmin = -1.01
xmax = 1.01
nx = 11

ymin = -1.01
ymax = 1.01
ny = 11

fx = "Math.sin(1*t)"
fy = "Math.sin(2*t)"
{{</* /canvas */>}}

{{</* equation left="140px" top="250px" */>}}
$x = \sin t$
{{</* /equation */>}}

{{</* equation left="-10px" top="110px" angle="-90" */>}}
$y = \sin 2t$
{{</* /equation */>}}

{{</* /graphic */>}}
```

Notice that instead of using $y = f(x)$ it uses parametric equations [^dawkins_2023], e.g. $x = fx(t)$ and $y = fy(t)$.


## refs
[^dawkins_2023]: Paul Dawkins, "Section 9.1 : Parametric Equations and Curves", Paul's Online Notes, 5 Jul 2023, url https://tutorial.math.lamar.edu/classes/calcii/parametriceqn.aspx[20250320].
[^gpt-4o_2025]: GTP-4o, "CSS Caching Issues", ChatGTP, 20 Mar 2025, url https://chatgpt.com/share/67dc2901-beb8-800a-ad4b-25c906fb87b2 [20250320].
[^viridi_2025]: Sparisoma Viridi, "js for fun 4", notes, 20 Mar 2025, (-), url https://dudung.github.io/notes/25c52/ [20250320].
