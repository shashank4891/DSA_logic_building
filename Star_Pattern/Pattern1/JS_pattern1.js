function pattern1(N) {
    // This is the outer loop which will loop for the rows.
    for (let i = 0; i < N; i++) {
        // This is the inner loop which here, loops for the columns
        // as we have to print a rectangular pattern.
        let row = "";
        for (let j = 0; j < N; j++) {
            row += "* ";
        }
        
        // Print the row and give a line break
        console.log(row);
    }
}

// Take user input using prompt
const N = parseInt(prompt("Enter the number of rows:"));

// Call the function with the user input
pattern1(N);
