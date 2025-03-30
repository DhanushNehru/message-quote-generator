const dayjs = require("dayjs");
const { quotes } = require("./quotes");

class MessageQuoteGenerator {
  constructor(options = {}) {
    this.time = options.time ? dayjs(options.time) : dayjs();
    this.name = options.name || "";
    this.period = options.period || this.getPeriodFromTime(); // morning, evening, etc.
    this.includeQuote = options.includeQuote !== false; // true by default
    this.includeAuthor = options.includeAuthor !== false; // true by default
    this.greetingTemplate =
      options.greetingTemplate || "Hi! {name}, {greeting}!";
  }

  // Determine period based on time if not provided
  getPeriodFromTime() {
    const hour = this.time.hour();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 22) return "Good evening";
    return "Good night";
  }

  // Get random quote
  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Generate the greeting message
  generateGreeting(additionalParams = {}) {
    let greeting = this.period;
    let message = this.greetingTemplate
      .replace("{name}", this.name || "there")
      .replace("{greeting}", greeting);

    // Replace additional parameters in the template
    Object.keys(additionalParams).forEach((key) => {
      message = message.replace(`{${key}}`, additionalParams[key]);
    });

    return message;
  }

  // Generate the full response
  generate(additionalParams = {}) {
    const response = {
      greeting_message: this.generateGreeting(additionalParams),
    };

    if (this.includeQuote) {
      const quote = this.getRandomQuote();
      response.quote = quote.text;
      if (this.includeAuthor) {
        response.author = quote.author;
      }
    }

    return response;
  }
}

module.exports = MessageQuoteGenerator;
