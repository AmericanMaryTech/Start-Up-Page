# Custom Startpage

[Live Preview](https://jgavrilo.github.io/startuppage/)

Feel free to fork and make your own changes!

- Font: Fira Code
- Colorscheme: Gruvbox Dark
- Cat Gif: [Here](https://twitter.com/avogado6/status/1165595520967954432?s=19)

![startpage](startpage.gif)

## Features

- Responsive design that stacks elements for smaller screens
- Main hub with date, time, and categorized bookmarks
- Left container with a GIF and an embedded Google Calendar
- Right container with a Todo List App

## Customization

You can customize the startpage by modifying the CSS variables for colors, container widths, and font sizes in the `style.css` file. Additionally, you can change the content and layout by editing the `index.html` file.

## Google Calendar Integration

To integrate Google Calendar, update the `src` attribute of the `iframe` element in the calendar section of `index.html` with your Google Calendar's embed URL.

## Todo List App Dependency

The Todo List App included in the right container is based on the [Todo List App JavaScript Tutorial](https://github.com/dwyl/javascript-todo-list-tutorial). This tutorial teaches you how to create a Todo List App from scratch using "Vanilla JavaScript" while following a strict Test-Driven Development approach. The app also follows the Elm Architecture (TEA) for organizing code and includes features like browser routing/navigation and localStorage for offline support. The app's architecture-related code has been abstracted into a mini frontend framework called "elmish," which is inspired by Elm but intended for educational purposes.

To integrate the Todo List App into your startpage, you'll need to include the `elmish.js` and `todo-app.js` files in your project and reference them in your `index.html` file.

## Dependencies

- Elmish.js
- TodoMVC App CSS
