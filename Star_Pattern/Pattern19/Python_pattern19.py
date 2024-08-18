def pattern19(N):
    iniS = 0
    
    # Upper half of the pattern
    for i in range(N):
        row = ""
        
        # Print stars
        for j in range(N - i):
            row += "*"
        
        # Print spaces
        for j in range(iniS):
            row += " "
        
        # Print stars
        for j in range(N - i):
            row += "*"
        
        print(row)
        
        # Increase spaces by 2 for the next row
        iniS += 2
    
    # Lower half of the pattern
    iniS = 2 * N - 2
    for i in range(1, N + 1):
        row = ""
        
        # Print stars
        for j in range(i):
            row += "*"
        
        # Print spaces
        for j in range(iniS):
            row += " "
        
        # Print stars
        for j in range(i):
            row += "*"
        
        print(row)
        
        # Decrease spaces by 2 for the next row
        iniS -= 2

# Take input from the user
N = int(input("Enter the value of N: "))
pattern19(N)

