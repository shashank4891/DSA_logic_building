def pattern5(N):
    for i in range(N):
        row = ""
        for j in range(N, i, -1):
            row += "* "
        print(row)

N = int(input("Enter the number of rows: "))
pattern5(N)

