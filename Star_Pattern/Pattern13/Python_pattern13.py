def pattern13(N):
    num = 1
    
    for i in range(1, N + 1):
        row = ""
        
        for j in range(1, i + 1):
            row += str(num) + " "
            num += 1
        
        print(row)

# Take user input
N = int(input("Enter the number of rows:"))
pattern13(N)

