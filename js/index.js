const quote = document.getElementById("quote");

var motivational_quotes = [
        "Push yourself because no one else is going to do it for you.",
        "The only bad workout is the one that didn’t happen.",
        "Success starts with self-discipline.",
        "Your only limit is you.",
        "Don’t stop when you’re tired; stop when you’re done.",
        "Strength doesn’t come from what you can do; it comes from overcoming the things you once thought you couldn’t.",
        "The body achieves what the mind believes.",
        "Train hard, stay focused, and the results will follow.",
        "The pain you feel today will be the strength you feel tomorrow.",
        "Every workout is progress, no matter how small.",
        "If it doesn’t challenge you, it won’t change you.",
        "Wake up with determination; go to bed with satisfaction.",
        "Dream it. Believe it. Achieve it.",
        "Don’t wish for a good body. Work for it.",
        "Excuses don’t burn calories."
    ]

quote.innerText = `"${motivational_quotes[Math.floor(motivational_quotes.length * Math.random())]}"`