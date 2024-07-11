# Code for calculating bitmasks of all possible winning positions & storing in csv

# Array of binary strings of length 42, each containing x4 1's, representing the positions of the line of 4
positions = []

# 4 counters in a row horizontally
i = 0;
j = 0;

while(j <= 5):
    while(i <= 3):
        row = i*"0" + "1111" + (3-i)*"0"
        positions.append(j*"0000000" + row + (5-j)*"0000000")
        i = i + 1
    j = j + 1
    i = 0

print(positions)

# 4 counters in a row vertically