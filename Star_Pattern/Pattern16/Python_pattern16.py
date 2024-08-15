def pattern16(N):
    for i in range(N):
        row = ""
        for j in range(i + 1):
            row += chr(ord('A') + i) + " "
        print(row.strip())

N = int(input("Enter the number of rows: "))

pattern16(N)

