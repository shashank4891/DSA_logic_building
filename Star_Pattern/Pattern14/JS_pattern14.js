function pattern14(N) {
    for (let i = 0; i < N; i++) {
        let row = "";
        for (let ch = 'A'; ch <= String.fromCharCode('A'.charCodeAt(0) + i); ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
            row += ch + " ";
        }
        console.log(row);
    }
}

const N = parseInt(prompt("Enter the number of rows:"));

pattern14(N);

