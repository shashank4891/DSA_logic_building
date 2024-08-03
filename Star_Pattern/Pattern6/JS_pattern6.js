function pattern6(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        for (let j = N; j > i; j--) {
            row += (N - j + 1) + " ";
        }
        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));

pattern6(N);

