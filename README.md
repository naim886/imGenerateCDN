![Logo](https://www.imgenerate.com/images/logo.png)

# imGenerate

A fast, free, and customizable image placeholder generator for developers and designers. Instantly create high-quality placeholders with custom sizes, text, and colors for your projects.

## instalation 
It's more than easy to integrate [imGenerate](https://imgenerate.com) to your web site. Add this `CDN` on your web site. it's just plug and play.

```
https://cdn.jsdelivr.net/gh/naim886/imGenerateCDN@main/0.0.1/dist/imGenerate.min.js
```

#### And see the magic!


# Documentation

add `imgenerate` class to your <img> tag where you want to impliment  [imGenerate](https://imgenerate.com) placeholder image. 

Example:

```html
<img class="imgenerate"/>
```

## height & width

it will take width and height of parent but if you want to specify it's width and height then you have 3 methods

- Specify height and width in `data` attribute like `data-width=150` & `data-height=150` 
Example: 

```html
<img class="imgenerate" data-height="600" data-width="150"/>
```

- if `data-width` or `data-height` not found in `<img>` tag then it will find element height & width 

Example: 
``` html 
<img class="imgenerate image-1" />
<style>
    .image-1{
        width: 200px;
        height: 200px;
    }
</style>
```
- If height width are not defined by `CSS` then it will take it's parent height width.

## Background 

By default you will get `#1e3a8a` as background but why you stack with default background color? try this 

```html
<img class="imgenerate image-1" data-bg="green"/>
<img class="imgenerate image-1" data-bg="00ff00"/>
```

## Text 
You can add text on your photo 

```html
<img class="imgenerate image-1" data-text="www.imgenerate.com"/>
<img class="imgenerate image-1" data-text="200X200"/>
```
If you write `data-text="size"` then in image size will be wirtten

## Text color

By default text color is `#ffffff` but you can choose your color
```html
<img class="imgenerate image-1" data-text-color="black"/>
<img class="imgenerate image-1" data-text-color="ff0000"/>
```

## Font size 
By default font size is `24px` of course you can change it 

```html
<img class="imgenerate image-1" data-font-size="35"/>
```


## Tech Stack

**Client:** JavaScript 

**Server:** PHP, Laravel

**Client Dependenency:** jQuery


## Support

For support, email naim886@gmail.com or visit [imGenerate contact us page ](https://www.imgenerate.com/contact-us).


## Feedback & bug report

If you have any feedback or find any bug, please reach out to us at email naim886@gmail.com or visit [imGenerate contact us page ](https://www.imgenerate.com/contact-us)



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Author

- [@Naim UL Hasan](https://www.naimbd.com)
