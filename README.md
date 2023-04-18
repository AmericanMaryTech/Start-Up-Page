# Custom Startpage

A personalized startpage for your browser, featuring a main hub with date, time, and categorized bookmarks, a left container with a GIF and an embedded Google Calendar, and a right container with a Todo List App.

[Live Preview](https://jgavrilo.github.io/startuppage/)

## How to Use

To use this custom startpage, you have two options:

1. Set the live preview URL as your browser's homepage: [https://jgavrilo.github.io/startuppage/](https://jgavrilo.github.io/startuppage/).
2. Download the repository and open the `index.html` file locally on your machine.

To download the repository, update it, and use it locally:

1. Click the green "Code" button on the GitHub repository page and then click "Download ZIP".
2. Extract the ZIP file to your desired location on your computer.
3. Open the `index.html` file with your preferred web browser and make sure it renders.
4. Open the `variables.js` file with your preferred editor and adjust your links.
5. Continue with steps below to make it your browser's homepage.

To set the live preview URL as your homepage, follow the instructions for your specific browser:

- [Google Chrome](https://support.google.com/chrome/answer/95314)
- [Mozilla Firefox](https://support.mozilla.org/en-US/kb/how-to-set-the-home-page)
- [Microsoft Edge](https://support.microsoft.com/en-us/microsoft-edge/change-your-home-page-4da4f121-8a63-4f5d-a7b0-5632f1b5c5ea)
- [Apple Safari](https://support.apple.com/guide/safari/customize-your-start-page-ibrw1020/mac)

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
