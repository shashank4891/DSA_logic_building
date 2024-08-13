function pattern15(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        for (let ch = 'A'; ch <= String.fromCharCode('A'.charCodeAt(0) + (N - i - 1)); ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
            row += ch + " ";
        }
        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));

pattern15(N);

