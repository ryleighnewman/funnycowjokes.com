const jokes = [
    "Why do cows have hooves instead of feet? Because they lactose.",
    "What do you call a cow with no legs? Ground beef.",
    "Why did the cow cross the road? To get to the udder side!",
    "What do you get when you cross a cow and a duck? Milk and quackers!",
    "Why don't cows have any money? Because farmers milk them dry!",
    "What do you call a sleeping cow? A bulldozer.",
    "Why are cows such great dancers? Because they have all the best mooooves.",
    "What do you get from a pampered cow? Spoiled milk."
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

    // Temporarily disable the button to prevent it from staying in a pressed state
    jokeButton.disabled = true;
    jokeButton.style.backgroundColor = '#1e7e34'; // Optional: change the color to indicate press

    setTimeout(function() {
        jokeButton.disabled = false;
        jokeButton.style.backgroundColor = '#28a745'; // Reset to the original color
        jokeButton.blur(); // Remove focus from the button
    }, 300); // Adjust the delay time as needed
});

// Set an initial joke when the page loads
document.getElementById('joke-box').textContent = getRandomJoke();