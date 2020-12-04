# html-to-react-ts

A small library to convert raw HTML strings to JSX. I build this library for some rare cases that you need to keep 
the React JSX.Element type, in many cases you won't need this library. 

If you just want to insert raw html into a React component then use: 

`<div dangerouslySetInnerHTML={{__html: "<h1>Hello World</h1>"}}></div>`

When using `dangerouslySetInnerHTML` be aware of the XSS vulrabillity you add to your site and make sure that everything put in there is escaped HTML. 

When strings are really no option for you, then use this library. Wich is just a manual conversion from parsed html to JSX. 
This does not have all tags implemented yet, I only added the html tags I needed at the time. You can add more by need. 

The code in this repo is not complete and a lot of HTML tags are missing and also for attributes. When the string contains 
not implemented HTML then you will see: 

> <>No implementation for: {TAG NAME}</>

You can use it like this: 

`raw_html_to_jsx("<h1 class='main-header' id='element-1'>Hello World</h1>")`

## Dependencies 

- React [repo](https://github.com/facebook/react)
- htmlparser2 [repo](https://github.com/fb55/htmlparser2)
- domhandler [repo](https://github.com/fb55/domhandler)