const jokes = [
    "Why do cows have hooves instead of feet? Because they lactose.",
    "What do you call a cow with no legs? Ground beef.",
    "Why did the cow cross the road? To get to the udder side!",
    "What do you get when you cross a cow and a duck? Milk and quackers!",
    "Why don't cows have any money? Because farmers milk them dry!",
    "What do you call a sleeping cow? A bulldozer.",
    "Why are cows such great dancers? Because they have all the best mooooves.",
    "What do you get from a pampered cow? Spoiled milk.",
    "Why do cows wear bells? Because their horns don't work.",
    "What do you get when you cross a cow with a trampoline? A milkshake!",
    "Why did the cow go to outer space? To visit the Milky Way!",
    "What do you call a cow that can't moo? A milk dud.",
    "Why did the cow get promoted? Because she was outstanding in her field.",
    "What's a cow's favorite place to go for fun? The mooo-vies!",
    "What do you call a cow with two legs? Lean beef.",
    "What do you call a cow that just gave birth? De-calf-inated.",
    "What's a cow's favorite musical note? Beef-flat.",
    "Why don't cows play basketball? They're afraid of the steaks.",
    "What do you call a cow that tells jokes? A laughing stock.",
    "Why did the cow go to the gym? To get beefed up.",
    "How do cows stay up to date? They read the moooos-paper.",
    "What did the cow say to the calf at night? It's pasture bedtime.",
    "Why did the cow visit the nightclub? She heard it was legen-dairy.",
    "Why did the cow get a massage? She had a lot of tension in her calves.",
    "What do you call a cow that doesn't give milk? An udder failure.",
    "Why did the cow fail at being a comedian? His jokes were too cheesy.",
    "Why did the cow stay up all night? To watch the moooonlight.",
    "Why do cows make such great employees? They're always herd-working.",
    "What did the cow say when it heard a bad joke? That's bull!",
    "What happens when cows stop shaving? They grow mooo-staches.",
    "What do you call a cow in an earthquake? A milkshake!",
    "Why was the cow so stressed? It had a lot of beef to settle.",
    "How does a cow apologize? It says, 'I'm sorry, I didn't mean to steer you wrong.'",
    "Why did the cow visit the art museum? To see the mooo-na Lisa.",
    "What do you call a cow that plays an instrument? A moo-sician.",
    "Why did the cow jump over the moon? Because the farmer had cold hands.",
    "What do you get when you tell a cow a bad joke? Udder silence.",
    "Why was the cow so good at karate? It practiced moo-thai.",
    "Why did the cow get a ticket? For moo-ving violations.",
    "How do cows introduce their wives? 'Meat my wife.'",
    "What do you call a cow that works for a gardener? A lawn moo-er.",
    "Why did the cow audition for a play? She wanted a steak in the production.",
];

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

document.getElementById('joke-button').addEventListener('click', function() {
    const jokeBox = document.getElementById('joke-box');
    const jokeButton = document.getElementById('joke-button');
    
    // Display the joke
    jokeBox.textContent = getRandomJoke();

    // Manually handle the "pressed" state of the button
    jokeButton.classList.add('pressed');
    
    // Set a timeout to remove the "pressed" state
    setTimeout(function() {
        jokeButton.classList.remove('pressed');
        jokeButton.blur(); // Remove focus from the button
    }, 150); // Adjust the delay time as needed
});

// Set an initial joke when the page loads
document.getElementById('joke-box').textContent = getRandomJoke();