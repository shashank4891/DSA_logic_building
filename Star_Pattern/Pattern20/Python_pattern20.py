def pattern20(n):
    # Initializing the spaces
    spaces = 2 * n - 2
    
    # Outer loop for printing rows
    for i in range(1, 2 * n):
        stars = i
        
        # Adjust stars for the second half
        if i > n:
            stars = 2 * n - i
        
        # Print stars
        row = ""
        row += "*" * stars
        
        # Print spaces
        row += " " * spaces
        
        # Print stars again
        row += "*" * stars
        
        # Print the row and move to the next line
        print(row)
        
        # Adjust spaces for the next row
        if i < n:
            spaces -= 2
        else:
            spaces += 2

# Take input from the user
N = int(input("Enter the value of N: "))
pattern20(N)

