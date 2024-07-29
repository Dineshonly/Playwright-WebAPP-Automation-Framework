// This function generates a random number with specific requirements.
async function generateRandom() {
    // Define the desired length of the number.
    const length = 8;
    // Define the character sets for each category.
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_';

    // Ensure the inclusion of at least one character from each required character set.
    const requiredChars = [
        uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)],
        lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)],
        numericChars[Math.floor(Math.random() * numericChars.length)],
        symbolChars[Math.floor(Math.random() * symbolChars.length)],
    ];

    // Combine all characters to form the pool for the remaining characters.
    const remainingChars = lowercaseChars + uppercaseChars + numericChars + symbolChars;

    // Initialize the number with required characters to ensure their inclusion.
    let number = requiredChars.join('');

    // Generate the rest of the characters for the number.
    for (let i = number.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * remainingChars.length);
        number += remainingChars[randomIndex]; // Use index directly for simplicity.
    }

    // Shuffle the number to mix the required and non-required characters.
    number = shuffleString(number);

    // Return the shuffled number.
    return number;
}

// Helper function to shuffle a string to ensure the randomness of character positions.
function shuffleString(str) {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements.
    }
    return array.join(''); // Rejoin the array into a string.
}

// Export the generateRandom function if using as a module in Node.js.

module.exports ={generateRandom} ;


/*
* Calling Statement Example
* const number = await generateRandom();
* console.log(number);
*/