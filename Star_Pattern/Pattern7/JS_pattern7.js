function pattern7(N) {
    for (let i = 0; i < N; i++) {
        let row = "";

        // Print spaces before stars
        for (let j = 0; j < N - i - 1; j++) {
            row += " ";
        }

        // Print stars
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }

        // Print spaces after stars
        for (let j = 0; j < N - i - 1; j++) {
            row += " ";
        }

        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));

// Call the function with the user input
pattern7(N);

