def pattern4(N):
    for i in range(1, N + 1):
        row = ""
        for j in range(1, i + 1):
            row += str(i) + " "
        print(row)

N = int(input("Enter the number of rows: "))
pattern4(N)

