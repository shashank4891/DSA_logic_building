def pattern1(N):
    for i in range(N):
        row = ""
        for j in range(N):
            row += "* "
        print(row)

N = int(input("Enter the number of rows: "))
pattern1(N)

