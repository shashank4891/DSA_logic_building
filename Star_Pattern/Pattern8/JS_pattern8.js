function pattern8(N) {
    for (let i = 0; i < N; i++) {
        let row = "";

        // For printing the spaces before stars in each row
        for (let j = 0; j < i; j++) {
            row += " ";
        }

        // For printing the stars in each row
        for (let j = 0; j < 2 * N - (2 * i + 1); j++) {
            row += "*";
        }

        // For printing the spaces after the stars in each row
        for (let j = 0; j < i; j++) {
            row += " ";
        }

        console.log(row);
    }
}

// Take user input using prompt
const N = parseInt(prompt("Enter the number of rows:"));

// Call the function with the user input
pattern8(N);

