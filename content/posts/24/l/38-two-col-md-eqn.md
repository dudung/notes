+++
title = '2c md eqn'
date = '2024-12-28T05:20:42+07:00'
draft = false
type = 'xpage'
tags = ['shortcode', 'two-col']
authors = ['viridi']
math = true
url = '24l38'
+++
<!--more-->

{{< twocolumn markdown="yes" >}}
- Left column (default).
- *Italic* and **Bold**.
- Table.
a | b | c
:-: | :-: | :-:
1 | 2 | 3
{{< /twocolumn >}}

{{< twocolumn col="right" markdown="yes" >}}
- Right column.
- Equation $a$, $b$, $c$ from table
$$\tag{10}
x = a^b + c.
$$
- 0 1 2 3 4 5 6 7 8 9 a b c d e f. 
{{< /twocolumn >}}

{{< ref >}}
Author, "Title", Source, Date, {{< url "https://url.com" >}} [20241124]
{{< /ref >}}
