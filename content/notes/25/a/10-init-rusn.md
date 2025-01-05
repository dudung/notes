+++
title = 'init rusn'
date = '2025-01-05T16:10:52+07:00'
draft = false
author = ['viridi']
tags = ['rusn']
categories = ['notes']
url = '25a10'
+++
Initialize a raw, unstructured, spontaneous note.
<!--more-->

+ Create a GitHub repository with name `rusn`. \
  e.g. https://github.com/dudung/rusn.
+ Clone it to local computer.
  ```
  $ git clone https://github.com/dudung/rusn
  Cloning into 'rusn'...
  remote: Enumerating objects: 4, done.
  remote: Counting objects: 100% (4/4), done.
  remote: Compressing objects: 100% (3/3), done.
  remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
  Receiving objects: 100% (4/4), done.
  ```
+ Create a new Hugo site.
  ```
  $ hugo new site rusn -f
  Congratulations! Your new Hugo site was created in M:\rusn.

  Just a few more steps...

  1. Change the current directory to M:\rusn.
  2. Create or install a theme:
     - Create a new theme with the command "hugo new theme <THEMENAME>"
     - Or, install a theme from https://themes.gohugo.io/
  3. Edit hugo.toml, setting the "theme" property to the theme name.
  4. Create new content with the command "hugo new content <SECTIONNAME>\<FILENAME>.<FORMAT>".
  5. Start the embedded web server with the command "hugo server --buildDrafts".

  See documentation at https://gohugo.io/.
  ```
+ Create new Hugo theme with name `default`.
  ```
  $ hugo new theme default
  Creating new theme in M:\rusn\themes\default
  ```
+ Change current directory to `rusn`.
  ```
  $ cd rusn
  ```
+ Delete examples posts.
  ```
  $ rm -r themes/default/content/*
  ```
+ Open `hugo.toml` with nano.
  ```
  $ nano hugo.toml
  ```
+ Modify it to have following content.
  ```
  baseURL = 'https://dudung.github.io/rusn'
  languageCode = 'en-us'
  title = 'rusn'
  theme = 'default'
  
  enableEmoji = true
  
  [taxonomies]
    author = "authors"
    tag = "tags"
    category = "categories"

  [[menu.main]]
    name = 'Home'
    weight = 2
    identifier = 'home'
    url = '/'

  [[menu.main]]
    name = 'Tags'
    weight = 1
    identifier = 'tags'
    url = '/tags'

  [[menu.main]]
    name = 'Cats'
    weight = 0
    identifier = 'cats'
    url = '/categories'
  ```
+ Add `_index.md` under `content/authors/auser`, where `auser` will be used in a post front matter as an author.
+ Copy `_default`, `partials`, `shortcodes` folders and their content from https://github.com/dudung/rust/tree/main/layouts to `layouts` folder.
+ Copy `footer.css` and `header.css` from https://github.com/dudung/rust/tree/main/static/css to `static/css` folder.
+ Modify `baseof.html` in `layouts/_default` to point top the previous CSS files.
+ Create notes in `content/notes` folder.
+ Test it.