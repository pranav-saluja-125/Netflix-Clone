# Netflix Clone

## Introduction

## HTML and CSS

We'll be creating Web pages with HTML and CSS. So, what are they you might ask? Well, all you need to know at this point is that HTML (or Hypertext markup language) is what you use to structure the content of your site that browsers can understand. Think of all the headings, paragraphs and links to other pages you see on the sites. CSS (or Cascading Style Sheets) is what you use to style appearance of the content created by HTML. Think of such things as colors of the texts, animations, and typography.

## Writing your first HTML page

To begin writing your first HTML page, all we need is a text editor and a Web browser. I am a big fan of [Atom](https://atom.io/) editor provided by [GitHub](https://github.com).

Let's create a new file and save it with *.html* extension, similarly to *.doc* used by Microsoft Word.

Now, all HTML documents are required to have a certain structure that include the following declaration and elements.

    <!DOCTYPE html>
    <html>
      <head>
      </head>

      <body>
      </body>
    </html>

Let me explain it to you line-by-line:

* `<!DOCTYPE html>` tells the browser the version of HTML we'll be using. In this case, though we're just saying we're going to use  the latest version available.

* `<html>` tells that we're a starting a new HTML document. By the way, these identifiers (or elements) enclosed in `<` and `>` are called tags. There are different kind of tags, such as headings, paragraphs, links, etc. Here we say we're starting an HTML document and down there we're ending it with `</html>`. Most of the tags have to be closed, except to a few we will see later.

* Inside the HTML document, we specify the so called `<head>` tag, which is used as the top of the document for it's title, links to other resources, and other metadata. This section is processed by the browser, but not visible to the users.

* Finally, we have the `<body>` tag, which defines what will be visible to the users looking at this page.

The HTML element reference can be found [here](http://htmlreference.io).

Now save the file and open it in the browser. Nothing interesting, right?

Let's add some more tags:

      <head>
        <meta charset="utf-8">
        <title>Netflix Spain - Watch TV Shows Online, Watch Movies Online</title>
      </head>
      ...
      <body>
        <h1>See what's next.</h1>
      </body>

* Firstly, we'll add the `<title>` of the page just like on the Netflix site.
* Then, we'll add the `<meta>` tag defining the character encoding of this document, so that the browser would know how to show special characters in different languages.
* Finally, we'll extend the `<body>` section with something interesting for the users, the main heading `<h1>` as on the Web site.

## Writing your first CSS

The page looks very dull, so let's add some appearance to it with CSS. As mentioned earlier, the HTML `<head>` section is used to link to any additional resources, and that's exactly where we'll link to our CSS file.

        <link href="css/style.css" rel="stylesheet"/>


* `href` is an attribute of the `<link>` tag, which says where to look a CSS file.
* So, this would search for a file named `style.css` in the `css` directory relative to our html file. As you see, CSS has it's own extension `.css`.
* The `rel` attribute denotes that we're linking *stylesheet*, and not icons, or anything else.
* Create a `css` directory with a `style.css` file:

    body {
      margin: 0;
    }

* In CSS we target elements we want style. Each definition is wrapped into a pair of curly braces and every statement inside is terminated with a semicolon.
* In the example above, we target `body` element and remove any space around it with a CSS property named `margin`.

Next up, let's add a background image to the page into a so called *header* section.

    <header>
      <h1>See what's next.</h1>
    </header>

* `<header>` is an HTML tag that represents a container for an introductory content or navigational links.
* Back to CSS and set the background image to the header. `background` CSS property allows to specify multiple backgrounds, so we will put the image underneath and the black gradient on top.

    header {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.05)), url('../img/header-background.jpg')
      height: 100vh;
    }

* The `background-image` property sets a background for an element  at a given location.
* The `height` property will set the header to `100vh`, which means 100% of viewport height, where viewport is the screen.

The CSS reference can be found [here](http://cssreference.io).

## Adding navigation and logo with SVG

Let's add page navigation with a Netflix logo next.

    <nav>
      <a href="#">Netflix</a>
    </nav>


The `<nav>` tag defines navigational items on the page. The `<a>` tag is similar to `<link>` we've seen earlier, but it can have content and is used in the `<body>` section, as opposed to the `<head>` with `<link>`. `<a>` tag can be used to link to other pages. For example, we could have a page named `about.html` and link to it.

Now let's replace the text with an actual Netflix logo. And for that we'll use a new tag, called `<img>`.

    <a href="">
      <img src="img/logo.svg">
    </a>  

As you see, `<img>` tag has an attribute `src` that links to an actual image. But it's too big, so we'll make it the same size as on the original page. Notice how we nest the `img` element in CSS inside the `nav` element, because we don't want other images on the page to get these properties.

    nav img {
      width: 167px;
      height: 45px;
    }

We'll make a few more adjustments to the navigation and position of the logo. First of all, we'll define a class for an `<a>` tag so that we can reference it in CSS and set the height to the navigation.

    <a class="logo" href="">

And CSS:

    nav a {
      display: inline-block;
      line-height: 90px;
    }

    header nav {
      height: 90px;
    }

    nav img {
      max-width: 167px;
      max-height: 45px;
      vertical-align: middle;
    }

    nav .logo {
      margin-left: 3%;
    }

* The `display` property specifies the box type for an element. The box model is a CSS concept of how elements are positioned on the page.
* Then we set the height of the `<a>` tags inside navigation to 90px.
* Then we align the image inside the navigation vertically in the middle.
* And finally, add 3% left spacing to our link with a class `.logo`.

Finally, let's add the *Sign in* button to the navigation on the right:

    <a class="signin" href="https://www.netflix.com/login">
      Sign In
    </a>

    nav .signin {
      color: #fff;
      float: right;
      background-color: #e50914;
      line-height: normal;
      margin-top: 18px;
      margin-right: 3%;
      padding: 7px 17px;
      font-weight: 400;
      border-radius: 3px;
      font-size: 16px;
      text-decoration: none;
    }

* This time we've linked to an external page and defined the class for this link `signin`, which we can use further in CSS.
* Notice the color codes are in the so called [HEX format](http://htmlcolorcodes.com/).
* The `float` is a new property that tells the element to be positioned on the right.

## Adding fonts and default styles

The fonts do not look similar to ones on the Netflix site, so let's add them to be applied to entire page, as well as the default font size and colors:

    html, body {
      font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
      color: white;
      background-color: black;
      font-size: 16px;
      margin: 0;
    }

    * {
      box-sizing: border-box;
    }

Notice how we can target multiple elements in CSS by separating them with a comma. The `font-family` sets the font for the texts on the page. The `box-sizing: border-box` is something I recommend you use always, as it will include the border and padding in the calculation of the width and height of the elements you style.

## Adding pitch section

Now, we'll add the pitch area.

    <section class="pitch">
      <h1 class="pitch__title">See what’s next.</h1>
      <p class="pitch__subtitle">WATCH ANYWHERE. CANCEL ANYTIME.</p>
    </section>

* As you see, we've used the new `<section>` tag to define the section of the page and gave it a class `pitch`. This allows us to work with these elements as a group in CSS.
* We also introduced a `<p>` tag, which is just a paragraph.
* We also gave the classes to `<h1>` and `<p>` tags, prefixing them with the class of a section for better reading.

    .pitch {
      margin: 0 3%;
      position: absolute;
      top: 35%;
      font-size: 1.8vw;
    }

    .pitch__title {
      font-size: 3em;
      margin: 0 0 0.2em;
      font-weight: 700;
    }

    .pitch__subtitle {
      margin: 0 0 .5em;
    }

* This is another way of specifying `margin`. Instead of defining each margin (`margin-right`, etc.), we only set one margin for values top, right, bottom, left. Alternatively, we could condense it further and set the first value for both top and bottom, which is 0, and the second part for left and right, which is 3% as with the logo.
* `position` property specifies the positioning method used. It's used in conjunction with `top` property, which says to have 35% from the top of the page.
* `font-size` is defined in [viewport units](https://css-tricks.com/viewport-sized-typography/), telling to use 1.8% of viewport width. The next font size is defined in `em`, which means relative to the current font size, 3x in this case.

## Adding JOIN button and hover effects

Next up, we'll add JOIN button with a new `button` tag:

    <p class="pitch__subtitle">...
    <button class="btn">JOIN FREE FOR A MONTH</button>

And a corresponding CSS:

    .btn {
      font-size: 14px;
      letter-spacing: 1.9px;
      font-weight: 400;
      margin: .5em .5em .5em 0;
      padding: 12px 2em;
      color: #fff;
      background-color: #e50914;
      cursor: pointer;
      text-decoration: none;
      vertical-align: middle;
      font-family: Arial,sans-serif;
      border-radius: 2px;
      user-select: none;
      text-align: center;
      border: 0;
    }    

How about adding hover effects, meaning when you mouse over the buttons? Well, we have an `:hover` selector that can be applied to the elements, so let's add it to the both buttons we have:

    nav .signin:hover, .btn:hover {
      background: #f40612;
    }  

## 3 features with flex box

Now that we're done with the header, let's move on to the Netflix features (the 3 benefits). First we'll create another navigation with 3 images, headings and links:

    <div id="features">
      <nav>
        <div>
          <a href="#">
            <img alt="Cancel anytime" src="img/cancel.svg"/>
            <h2>
              No commitments
              <br/>
              Cancel online at anytime
            </h2>
          </a>

          <a href="#">
            <img alt="Watch anywhere" src="img/watchanywhere.svg"/>
            <h2>
              Watch anywhere
            </h2>
          </a>

          <a href="#">
            <img alt="Pick your price" src="img/pickprice.svg"/>
            <h2>
              Pick your price
            </h2>
          </a>
        </div>
      </nav>
    </div>

* We've used a new tag called `<div>`, which is used to define a division. We also gave it an `id` that we can use later in CSS. In contrast to classes, IDs are unique, so there could be only element with the same ID on the page.
* We've also added `alt` property to the `<img>` tag, which helps search engines like Google to identify these images as text.
* Finally, we've use the `<br/>` tag, which is used to leave a line break between the elements.

But it doesn't look quite right, so let's style them up:

    #features > nav {
      padding-top: 35px;
      background-color: #141414;
      border-bottom: 2px solid #3d3d3d;
    }

    #features > nav a {
      text-decoration: none;
      text-align: center;
      vertical-align: top;
      font-weight: bold;
      color: #777;
      height: 125px;
      line-height: 20px;
    }

    #features > nav a:hover {
      color: white;
    }

    #features > nav a img {
      height: 49px;
    }

    #features > nav a h2 {
      margin: 10px 0 0;
      font-size: 1em;
    }

* Notice how we used here the `>` selector that denotes that we want to match the first child element inside the `features` div.

Let's refresh the page and things look the same, but *not* positioned correctly. We'll fix it with a CSS feature called [flex box](http://cssreference.io/flexbox). Flexbox makes it easy to create responsive/flexible layouts with CSS.

We'll modify our features with more classes we can style later:

    <div class="center columns size-80">
      <a class="column" href="#">
        <img alt="Cancel anytime" src="img/cancel.svg"/>
        <h2>
          No commitments
          <br/>
          Cancel online at anytime
        </h2>
      </a>

      <a class="column" href="#">
        <img alt="Watch anywhere" src="img/watchanywhere.svg"/>
        <h2>
          Watch anywhere
        </h2>
      </a>

      <a class="column" href="#">
        <img alt="Pick your price" src="img/pickprice.svg"/>
        <h2>
          Pick your price
        </h2>
      </a>
    </div>

And finally add some CSS helpers:

    .columns {
      display: flex;
    }

    .column {
      display: block;
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
    }

    .center {
      margin: 0 auto;
    }

    .size-80 {
      width: 80%;
    }

* Firstly, we've defined the columns to display with flex.
* Each column is set to `flex-grow` to `1`, which means that the columns will take full width and distributed equally. We also gave it a property of `flex-shrink`, which makes the columns to shrink if necessary.
* Notice our new class `.center` with a new definition of margin `auto`, which means it will automatically center the element horizontally.
* Finally, the `.size-80` is a helper class that makes it easier for us to apply width of 80% to any element.

# Adding tabs with a bit of JavaScript

When you click on each feature section, the content of the bottom part changes - so this functionality is called *Tabs*. Since this behaviour goes beyond  the structure (HTML) and appearance (CSS), we'll need a bit of JavaScript.

As we're not covering JavaScript concepts in this tutorial, we'll just quickly skim thru this section:

Place these lines right before the end of the `<body>` tag.

      ...
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="js/app.js"></script>
    </body>


Create a file named `app.js` under `js` folder:

    $(function() {
      var tabs = $('#features > nav a');
      var tabsContent = $('#features > article > section');

      tabs.click(function(e) {
        e.preventDefault();

        var that = $(this);

        tabs.removeClass('is-selected');
        that.addClass('is-selected');
        tabsContent.removeClass('is-selected');

        tabsContent
          .filter((i, tab) => $(tab).data('id') === that.data('id'))
          .addClass('is-selected');
      });
    });

Briefly, the code snippet will compare the IDs of feature navigation elements and the content, and if they match, add the `is-selected` class, while also removing it from other elements.

Let's test it out by creating a layout for our feature content:

    <nav>
      <div class="center columns size-80">
        <a class="column is-selected" href="#" data-id="cancelanytime">
          <img alt="Cancel anytime" src="img/cancel.svg"/>
          <h2>
            No commitments
            <br/>
            Cancel online at anytime
          </h2>
        </a>

        <a class="column" href="#" data-id="watchanywhere">
          <img alt="Watch anywhere" src="img/watchanywhere.svg"/>
          <h2>
            Watch anywhere
          </h2>
        </a>

        <a class="column" href="#" data-id="pickprice">
          <img alt="Pick your price" src="img/pickprice.svg"/>
          <h2>
            Pick your price
          </h2>
        </a>
      </div>
    </nav>

    <article>
      <section class="is-selected" data-id="cancelanytime">
        About feature 1
      </section>

      <section data-id="watchanywhere">
        About feature 2
      </section>

      <section data-id="pickprice">
        About feature 3
      </section>
    </article>

* We've defined the content of our features in an `<article>` and respective `<section>`s.
* Also, notice how we've used a new `data-id` attribute in both the tab link and the content, so that our JS code can match them.
* Finally, we've set the class `is-selected` to the first feature.

Now, we only lack a bit of CSS:

    #features > nav a.is-selected {
      border-bottom: 5px solid #e50914;
      color: white;
    }

    ...

    #features > article > section {
      display: none;
      padding: 40px 0;
    }

    #features > article > section.is-selected {
      display: block;
    }

* By default, we're hiding the feature section with `display: none`.
* The `is-selected` class sets it back to `block`.

## Adding features content and related styles

Now that we have the functional tabs and placeholders for the features, let's add some real content.

    <section class="is-selected center size-70" data-id="cancelanytime">
      <div class="columns">
        <div class="column">
          <h2>
            If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.
          </h2>
          <button class="btn btn-large">JOIN FOR A FREE MONTH</button>
        </div>

        <div class="column">
          <img src="img/cancelanytime_withdevice.png"/>
        </div>
      </div>
    </section>

And corresponding CSS:

    .btn-large {
      padding: 18px 20px;
    }
    ...

    #features > article {
      margin-bottom: 120px;
    }
    ...

    #features > article h2 {
      font-size: 32px;
      font-weight: 400;
      margin: 60px 0 20px;
    }

    #features img {
      max-width: 100%;
    }
    ...

    .size-70 {
      width: 70%;
    }

Next up moving to the second feature:

    <section class="center size-80" id="watchanywhere" data-id="watchanywhere">
      <div class="columns">
        <h2 class="column">
          Watch TV shows and movies anytime, anywhere — personalized for you.
        </h2>
        <button class="btn btn-large column is-narrow">JOIN FOR A FREE MONTH</button>
      </div>

      <div class="columns size-90 center">
        <div class="column text-center">
          <img src="img/asset_TV_UI.png"/>
          <h3>Watch on your TV</h3>
          <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>

        <div class="column text-center">
          <img src="img/asset_mobile_tablet_UI_2.png"/>
          <h3>Watch instantly or download for later</h3>
          <p>Available on phone and tablet, wherever you go.</p>
        </div>

        <div class="column text-center">
          <img src="img/asset_website_UI.png"/>
          <h3>Use any computer</h3>
          <p>Watch right on Netflix.com.</p>
        </div>
      </div>
    </section>

Notice, how we've added an ID for this section so we can use different styles for this element.

    #features #watchanywhere h2 {
      font-size: 19px;
      padding-right: 1em;
      margin: 0 0 20px;
    }

    #features #watchanywhere > div:first-child {
      margin-bottom: 60px;
    }

    #features #watchanywhere p {
      color: #999;
    }

    ...
    .column.is-narrow {
      flex: none;
    }
    ...
    .size-90 {
      width: 90%;
    }
    ...
    .text-center {
      text-align: center;
    }

There are some new terms to be explained:

* `div:first-child` is a special selector that targets the first found div element inside the `#features #watchanywhere`.
* We've also disabled `flex` for the `is-narrow` column, so the button won't extend to columns full-width.

Finally, let's move to the last feature. For that we'd need some icons for showing checkmarks and crosses. We'll use the popular [FontAwesome](http://fontawesome.io/icons/) icon library. The so called "font icons" allow us to use vector shaped icons and style them the same way we would style texts. So, let's link this additional resource:


    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

And now we can add the content with the icons:

    <section class="center size-70" id="pickprice" data-id="pickprice">
      <div class="text-center">
        <h2>
          Choose one plan and watch everything on Netflix.
        </h2>
        <button class="btn btn-large">JOIN FOR A FREE MONTH</button>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly price after free month ends on 6/27/17</td>
            <td>EUR7.99</td>
            <td>EUR9.99</td>
            <td>EUR11.99</td>
          </tr>
          <tr>
            <td>HD available</td>
            <td><i class="fa fa-times"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <td>Ultra HD available</td>
            <td><i class="fa fa-times"></i></td>
            <td><i class="fa fa-times"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <td>Screens you can watch on at the same time</td>
            <td>1</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Watch on your laptop, TV, phone and tablet</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <td>Unlimited movies and TV shows</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <td>Cancel anytime</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <td>First month free</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
        </tbody>
      </table>
    </section>

And the corresponding CSS:

    #features #pickprice h2 {
      font-size: 22px;
      display: inline;
      margin: 0 40px 0 0;
    }

    table {
      width: 100%;
      margin-top: 20px;
    }

    table, thead, tbody {
      border-collapse: collapse;
    }

    thead {
      color: white;
      font-size: 16px;
      text-transform: uppercase;
    }

    thead th {
      padding: 10px;
    }

    tbody {
      color: #999;
    }

    tbody td {
      text-align: center;
      padding: 10px 20px;
    }

    tbody tr:nth-child(2n) {
      background-color: #222;
    }

    tbody td:first-child {
      text-align: left;
    }

The special [`tr:nth-child(2n)`](https://css-tricks.com/how-nth-child-works/) selector means we will choose every second row and add a background color to it.

## Adding footer

For the footer we will use an HTML unordered list `<ul>` and the flex box to position the elements. `<footer>` itself is an HTML tag that defines the footer of the page.

    <footer class="center size-90">
      <p>
        Questions? Call <a href="tel:900 866 617">900 866 617</a>
      </p>

      <ul class="columns flex-wrap">
        <li class="column is-25">
          <a href="https://help.netflix.com/support/412"><span>FAQ</span></a>
        </li>
        <li class="column is-25">
          <a href="https://help.netflix.com"><span>Help Center</span></a>
        </li>
        <li class="column is-25">
          <a href="https://www.netflix.com/yourAccount"><span>Account</span></a>
        </li>
        <li class="column is-25">
          <a href="https://media.netflix.com/"><span>Media Center</span></a>
        </li>
        <li class="column is-25">
          <a href="http://ir.netflix.com/"><span>Investor Relations</span></a>
        </li>
        <li class="column is-25">
          <a href="https://jobs.netflix.com/jobs"><span>Jobs</span></a>
        </li>
        <li class="column is-25">
          <a href="https://www.netflix.com/redeem"><span>Gift Cards</span></a>
        </li>
        <li class="column is-25">
          <a href="https://www.netflix.com/watch"><span>Ways to Watch</span></a>
        </li>
        <li class="column is-25">
          <a href="https://help.netflix.com/legal/termsofuse"><span>Terms of Use</span></a>
        </li>
        <li class="column is-25">
          <a href="https://help.netflix.com/legal/privacy"><span>Privacy</span></a>
        </li>
        <li class="column is-25">
          <a href="https://help.netflix.com/legal/privacy#cookies"><span>Cookie Preferences</span></a>
        </li>
        <li class="column is-25">
          <a href="https://fast.com"><span>Speed Test</span></a>
        </li>
        <li class="column is-25">
          <a href="https://www.netflix.com/es-en/originals"><span>Netflix Originals</span></a>
        </li>
      </ul>
    </footer>

And the corresponding CSS:

    footer a {
      color: #999;
      text-decoration: none;
    }

    footer a:hover {
      text-decoration: underline;
    }

    footer > p {
      margin: 0 0 30px;
    }

    footer > ul {
      margin: 0;
      padding: 0;
    }

    footer > ul > li {
      list-style: none;
      margin: 0 0 16px;
      padding-right: 12px;
      min-width: 100px;
      font-size: 13px;
    }

Finally, we'll add the helper classes we used in HTML to style the positioning:

    .columns.flex-wrap {
      flex-wrap: wrap;
    }

    .column.is-25 {
      flex: none;
      width: 25%;
    }

Notice we've used the new property of the flex box called `flex-wrap: wrap`, which makes the elements wrap onto multiple lines if they don't fit the column horizontally.

The last bit on this page is the language selector and the copyright text. For that we'll use the HTML `<select>` tag and the icon from our FontAwesome library:

    <div id="lang-selection">
      <i class="fa fa-globe" aria-hidden="true"></i>
      <select tabindex="0">
        <option value="es">Español</option>
        <option selected value="en">English</option>
      </select>
    </div>

    <p id="company">Netflix Spain</p>

And the corresponding CSS:

    #lang-selection {
      margin-top: 20px;
      border: 1px solid #333;
      border-radius: 2px;
      display: inline-block;
      padding-left: 15px;
    }

    #lang-selection select {
      background-color: #000;
      border: none;
      color: #999;
      font-size: 14px;
      width: 130px;
      height: 48px;
      text-transform: uppercase;
      font-weight: 300;
    }

    #company {
      font-size: 13px;
      margin: 24px 0 50px;
    }

That's it folks!
