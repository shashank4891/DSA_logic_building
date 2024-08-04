def pattern7(N):
    for i in range(N):
        row = " " * (N - i - 1)
        row += "*" * (2 * i + 1)
        row += " " * (N - i - 1)
        print(row)

N = int(input("Enter the number of rows:"))
pattern7(N)

