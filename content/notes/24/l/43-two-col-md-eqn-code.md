+++
title = '2c md-eqn code'
date = '2024-12-28T09:38:15+07:00'
type = 'xpage'
tags = ['shortcode', 'two-col']
authors = ['viridi']
math = true
url = '24l43'
+++
<!--more-->

{{< twocolumn markdown="yes" >}}
+ Roots of $y = ax^2 + bx + c$ can be obtained from
$$
x_{1,2} = \frac{-b \pm \sqrt{D}}{2a}.
$$
+ Discriminant $D = b^2 - 4c$. 
{{< /twocolumn >}}

{{< twocolumn col="right" markdown="yes" >}}
```py
a = 1
b = -9.5
c = 15

D = b**2 - 4*a*c
x1 = (-b - D**0.5) / (2*a)
x2 = (-b + D**0.5) / (2*a)

print('x1 =', x1)
print('x2 =', x2)
```
{{< /twocolumn >}}

{{< ref >}}
dudung, OneCompiler, 28 Dec 2024, {{< url "https://onecompiler.com/python/434bxmyz4" >}} [20241228].
{{< /ref >}}
