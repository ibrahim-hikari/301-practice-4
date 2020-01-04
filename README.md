# 301-practice-4

1. **In an express server application, what does dotenv do**

* It is a module that loads environment variables from a .env file into `process.env` , In general we use it to store variables 

2. **What does the following code do:**

``` 
function render( item ) {
  let markup = $('#item-template').html();
  let runTemplate = Handlebars.compile(markup);
  $("#list").append( runTemplate(markup) );
};
```

* This function is a basic example of handlebars template, it first gives the required values to the tag with id=item-template, then takes the hole content of this tag and append it to a tag with id=list.

3. **What is the difference between relative and absolute positioning in CSS? In which SMACSS file would you put a rule with positioning?**

 

* `position: relative;` is positioned relative to its normal position.

* `position: absolute;` is positioned relative to the nearest positioned ancestor.

