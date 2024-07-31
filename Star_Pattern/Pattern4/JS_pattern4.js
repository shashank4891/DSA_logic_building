function pattern4(N) {
    // This is the outer loop which will loop for the rows.
    for (let i = 1; i <= N; i++) {
        // This is the inner loop which loops for the columns
        // number of columns = row number for each line here.
        // Here, we print numbers equal to the row number
        // instead of stars in each row.
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        
        // Print the row and give a line break
        console.log(row);
    }
}

// Take user input using prompt
const N = parseInt(prompt("Enter the number of rows:"));

// Call the function with the user input
pattern4(N);

