+++
title = 'equivalent strain'
date = '2025-01-31T06:01:09+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['ansys']
url = '25a69'
math = true
[ref]
author = 'Dragana Jandric'
title = 'Mechanical Strain in Deformation Analysis – Lesson 5: Evaluating Strain Results'
source = 'Ansys'
created = '23 May 2020'
updated = ''
url = 'https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/05/Lesson-5-Evaluate-Strain-Results.pdf'
accessed = '20250131'
+++

$$\tag{1}
\left[
\begin{array}{ccc}
\epsilon _{xx} & \epsilon _{xy} & \epsilon _{xz} \newline
\epsilon _{yx} & \epsilon _{yy} & \epsilon _{yz} \newline
\epsilon _{zx} & \epsilon _{zy} & \epsilon _{zz} \newline
\end{array}
\right]
$$


$$\tag{2}
\begin{array}{rcl}
\displaystyle \epsilon_{\rm eqv} & = & \displaystyle  \frac{1}{1 + \nu} \left[ \frac{1}{2} (\epsilon _{xx} - \epsilon _{yy})^2 + \frac{1}{2} (\epsilon _{yy} - \epsilon _{zz})^2  \right. \newline \newline
& & \displaystyle \left.
\frac{1}{2} (\epsilon _{zz} - \epsilon _{xx})^2 + 3(\epsilon _{xy}^2 + \epsilon _{yz}^2 + \epsilon _{zx}^2) \right] ^{1/2}
\end{array}
$$
