function pattern5(N) {
    // This is the outer loop which will loop for the rows.
    for (let i = 0; i < N; i++) {
        // This is the inner loop which loops for the columns
        // number of columns = (N - row index) for each line here.
        let row = "";
        for (let j = N; j > i; j--) {
            row += "* ";
        }
        
        // Print the row and give a line break
        console.log(row);
    }
}

// Take user input using prompt
const N = parseInt(prompt("Enter the number of rows:"));

// Call the function with the user input
pattern5(N);

