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

function main() {
    // Here, we have taken the value of N as 5.
    // We can also take input from the user.
    const N = 5;
    pattern1(N);
}

// Call the main function to execute the code
main();

