const quotes = [
    {
        quote : "I'm not a fan of a dog.",
        author : "J.K. Rowling"
    },
    {
        quote : "I'm not a fan of a dog.",
        author : "J.K. Rowling"
    },
    {
        quote : "I'm not a fan of a dog.",
        author : "J.K. Rowling"
    },
    {
        quote : "I'm not a fan of a dog.",
        author : "J.K. Rowling"
    },
    {
        quote : "I'm not a fan of a dog.",
        author : "J.K. Rowling"
    }];

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;