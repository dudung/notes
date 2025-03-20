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


## test area
Following are current result after resolving previous problems.

{{< graphic >}}

{{< canvas left="40px" top="20px" borderwidth="1px" >}}
xmin = 0;
ymin = 0;
xmax = 10;
ymax = 25;
fx = "(x - 5)**2";
{{< /canvas >}}
  
{{< equation left="140px" top="220px" borderwidth="1px" >}}
${\mathbf X}  \ket{\psi} = x \ket{\psi}$
{{< /equation >}}
  
{{< equation left="-20px" top="110px" angle="-90" borderwidth="1px" >}}
${\mathbf Y}  \ket{\psi} = y \ket{\psi}$
{{< /equation >}}

{{< /graphic >}}


## refs
[^viridi_2025]: Sparisoma Viridi, "js for fun 4", notes, 20 Mar 2025, (-), url https://dudung.github.io/notes/25c52/ [20250320].