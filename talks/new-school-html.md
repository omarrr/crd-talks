New-School HTML
===============

Introduce new-school HTML to people and make it approachable.

What is a stateful HTML application?
------------------------------------

- A website without page refreshes.

- Absence of a unique URL linking to a state of the application.

- The state of the application is kept in memory managed by JavaScript, instead of stored in a cookie, stored in a session or passed by query string. 

- Data is requested by AJAX methods rather than form posts or page refreshes with query string parameters.

Why a stateful HTML application?
--------------------------------

- Page refreshes can disrupt a user experience by removing the user from an environment.

- Loading and transitions between states can be designed and art directed.

- HTML works on all devices.

- The creative concept does not require features provided by Flash or Silverlight.
	
Reasons to not have a stateful HTML application
-----------------------------------------------

- The creative concepts needs features provided by Flash or Silverlight (i.e. bitmap manipulation, web cams, heavy use of video, sound, complex animation).

- Tracking and accessing information is the top priority and fully qualified URLs are needed.

Components of a stateful HTML application
-----------------------------------------

- CSS - Defines the style and design rules.

- HTML - Defines the view structure and order.

- JavaScript - Defines the data flow and transition logic.

- A server-side technology - Provides the interface to databases and other web services.

Challenges in creating stateful HTML applications
-------------------------------------------------

- Difficult to deep link and maintain browser history.

- Cross browser issues with CSS and JavaScript.

- Lack of structure in JavaScript.

The solution stack
------------------

- CSS - Sass and Compass

- HTML - Mustache.js

- JavaScript - Backbone.js and jQuery

- Server-side - Ruby on Rails

There are variations, but the goal is the same.

DEFINITIONS AND ARGUMENTS

What is Ruby on Rails?
----------------------

An open-source web framework that’s optimized for programmer happiness and sustainable productivity. It lets you write beautiful code by favoring convention over configuration.

Note: “Ruby” is a programming language. “Ruby on Rails” is an MVC framework for the the “Ruby” programming language. 

Why use Ruby on Rails?
----------------------

- Low barrier to entry and easy setup.

- Mass availability of third-party libraries (Gems).

- There is only one way. The Rails way.

- It is the most common platform in our technology department at AKQA SF.

Alternatives:
-------------

- Sinatra (Ruby)

- C#.NET MVC (C#)

- CodeIgniter (PHP)

- Apache Struts (Java)

- Django (Python)

What is Compass/Sass?
---------------------

- Sass - An extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It’s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

- Compass - A stylesheet authoring framework that makes your stylesheets and markup easier to build and maintain. With compass, you write your stylesheets in Sass instead of CSS.

Why use Compass/Sass?
---------------------
	
- Minimizes cross-browser pains with CSS.

- Removes repetitive definitions in CSS.

- Reusable ‘variables’ and ‘includes/partials’.

- It just makes sense.

What is Mustache.js?
--------------------

- Logic-less templates with javascript.

- What could be more logically awesome than no logic at all?

Why use Mustache.js?
--------------------

- Separates your views from your logic. HTML and JavaScript are not mixed.

- Allows for a simultaneous multi-developer work flow. One to work on view templates, another for logic and mediation.

- Mustache templates can be source controlled as independent files.

- Because templates are logic-less, they are language-agnostic. Mustache implementations have been written for JavaScript, Ruby, PHP, etc...

What is Backbone.js and jQuery?
-------------------------------

- Backbone.js - Supplies structure to JavaScript-heavy applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing application over a RESTful JSON interface.

- jQuery - A fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. jQuery is designed to change the way that you write JavaScript.

Why use Backbone.js and jQuery?
-------------------------------

- Removes cross-browser pains with JavaScript.

- Provides helpers for working with AJAX, animation, DOM manuipulation, etc.

- Promotes structure and order through use of an MVC design pattern and OO practices.

- Provides a hash tag routing system for maintaining state and deep linking.

EXAMPLES
--------

Compass/Sass Example
TBD

Mustache.js Example
TBD

Backbone.js and jQuery Example
TBD

Integrated Example in a Rails environment
TBD