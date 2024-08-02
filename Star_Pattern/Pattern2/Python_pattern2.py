def pattern2(N):
    for i in range(N):
        row = ""
        for j in range(i + 1):
            row += "* "
        print(row)

N = int(input("Enter the number of rows: "))
pattern2(N)

