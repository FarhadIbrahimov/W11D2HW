# Pass It Around

This is a simple Express.js application that allows users to count down bottles.

## Getting Started

1. Clone this repository: `git clone <repository_url>`
2. Navigate to the project folder: `cd pass-it-around`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open your web browser and visit: `http://localhost:3000` `

## How to Use

### Home Page

- Access the home page at `http://localhost:3000`
- You will see the message "99 Bottles of beer on the wall" with a link to "Take one down, pass it around".
- Click the link to decrement the number of bottles by 1.

### Counting Bottles

- Access the route `http://localhost:3000/:number` where `:number` is the current number of bottles you want to display.
- You will see the message with the current bottle count and a link to "Take one down, pass it around".
- Click the link to decrement the number of bottles by 1.
- If the number reaches 0, the link to "Take one down, pass it around" will no longer be shown.
- You can click the "Start over" link to return to the home page.

## Requirements

- Node.js
- npm packages
- Basic understanding of Express.js, routing, and HTML
- JavaScript and HTML fundamentals

## Learning Objectives

- Set up Express.js applications.
- Create custom routes.
- Use parameters from a request.

## License

This project is licensed under the [MIT License](LICENSE).
