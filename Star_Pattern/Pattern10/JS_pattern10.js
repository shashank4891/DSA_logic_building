function pattern10(N) {
    for (let i = 1; i <= 2 * N - 1; i++) {
        let stars = i;
        if (i > N) stars = 2 * N - i;

        let row = "";
        for (let j = 1; j <= stars; j++) {
            row += "*";
        }
        
        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));

pattern10(N);

