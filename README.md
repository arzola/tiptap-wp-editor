# Tiptap WP editor

The Real Gutenberg Alternative for serious writers.

### Main reasoning

- Classic editor is built in ancient technology (tinymce) and it’s not suited for modern tooling
- Gutenberg could be great to build websites but not for writing
    - We need to make configurable where do you want to use this editor experience (for instance only on blog posts?
    - Maybe it could co-exists with Gutenberg only to work on blog posts, where people wants to write content
- It should work on WP 100% but compatible with Pressbooks

## Description

Tiptap is a WYSIWYG editor that is based on ProseMirror. 
It is a highly customizable editor that can be used with Vue.js, React, or plain JavaScript. 
It is a great alternative to Gutenberg for those who want a more minimalistic editor.

### Brainstorm ideas

- Incredible latex support with formulas rendered by default
- Collaborative features using websockets (challenging). (I need to double check tip tap licence), I also need to double check server security, auth, etc…
    - Transparent auth with backend using WP login
    - Find a way to work with revisions
- Review which extensions are nice to be included by default
- Pleasant full screen editor experience
- It should have strong support for most used embeds like Math formulas, Video, Images, Code Snippets
- Provide a clean way to extend support for other embeds like H5P

### TODO first real MVP

- [x]  Select CSS framework (tailwind)
- [x]  Add TS, eslint, prettier, pint, tests
- [ ]  Read Refactoring UI to get some design tactics and build something good
- [ ]  Map all the basic components and create tests and skeleon of each of those
- [ ]  Define basic structure for the MVP elements, like b, s, underline, text formatting, alignment, code blocks, maybe custom html blocks
- [ ]  Create clean PHP structure, double check how to use composer properly on wp-plugins that will be distributed through zip files
- [ ]  SlashCMD, bubble menu
- [ ]  Save content
- [ ]  Replicate classic editor current functionality to make it a drop-in replacement
- [ ]  WP config to configure where to apply, collaborative features, maybe optional tiptap extensions.
- [ ]  Parse current tinymce content and convert it to blocks (challenging)

## Features

- Customizable
- Lightweight
- Easy to use
- Highly performant
- Supports basic markdown
- Supports HTML
- Supports plain text
- Supports images
- Collaborative editing (PRO)
