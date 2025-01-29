+++
title = 'shortcodes script loader and runner'
date = '2025-01-29T17:40:19+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['shortcode', 'js']
url = '25a66'
+++

+ Shortcodes
```toml
{{</* script/loader */>}}
utils.js
{{</* /script/loader */>}}

{{</* script/runner id="div1" */>}}
print("div1", "Hello, World!");
{{</* /script/runner */>}}
```
{{< script/loader >}}
utils.js
{{< /script/loader >}}
{{< script/runner id="div1" >}}
print("div1", "Hello, World!");
{{< /script/runner >}}
