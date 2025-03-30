# Message Quote Generator

A lightweight npm package to generate customizable greeting messages with optional random quotes and authors. Perfect for welcome messages, notifications, or any application needing dynamic greetings.

## Features
- Time-based greetings (e.g., "Good morning", "Good evening")
- Customizable greeting templates with placeholders
- Optional random quotes with or without authors
- Flexible configuration via constructor options and additional parameters
- Lightweight date/time handling

## Installation

Install the package via npm:

```bash
npm install message-quote-generator
```

# Message Quote Generator

## Usage

### Basic Example
Generate a simple greeting with a random quote:

```javascript
const MessageQuoteGenerator = require('message-quote-generator');

const generator = new MessageQuoteGenerator({ name: 'Dhanush' });
console.log(generator.generate());
```

Output:
```
{
  "greeting_message": "Hi! Dhanush, Good evening!",
  "quote": "The best way to predict the future is to create it.",
  "author": "Peter Drucker"
}
```

### Custom Template with Additional Parameters  
Use a custom template and pass additional data:  

```javascript
const generator = new MessageQuoteGenerator({
  name: 'Dhanush',
  greetingTemplate: 'Hello {name}, {greeting}! You have {tasks} tasks today.'
});
console.log(generator.generate({ tasks: 5 }));
```

Output:
```
{
  "greeting_message": "Hello Dhanush, Good evening! You have 5 tasks today.",
  "quote": "Life is what happens when you're busy making other plans.",
  "author": "John Lennon"
}
```

### Configuration Options

| Option            | Type    | Default                 | Description |
|-------------------|--------|-------------------------|-------------|
| `time`           | String | Current time            | Custom time (e.g., `"2025-03-30 18:00:00"`) |
| `name`           | String | `''`                     | Name to include in the greeting |
| `period`         | String | Derived from time        | Custom greeting (e.g., `"Good morning"`) |
| `greetingTemplate` | String | `'Hi! {name}, {greeting}!'` | Template for the greeting message |
| `includeQuote`   | Boolean | `true`                  | Include a random quote in the response |
| `includeAuthor`  | Boolean | `true`                  | Include the quote's author (if quote is enabled) |


## Gitpod

In the cloud-free development environment where you can directly start coding.

You can use Gitpod in the cloud  [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/DhanushNehru/message-quote-generator/)
