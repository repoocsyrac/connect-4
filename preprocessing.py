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

# 4 counters in a row vertically
i = 0;
j = 0;

while(i <= 20):
    board = i*"0"
    while(j <= 3):
        board = board + "1" + "000000"
        j = j+1
    board = board + (42-len(board)) * "0"
    board = board[:42]
    positions.append(board)
    i = i+1
    j=0

# 4 counters in a row diagonally (/)
i = 3;
j = 0;

while(i <= 20):
    board = i*"0"
    while(j <= 3):
        board = board + "1" + "00000"
        j = j+1
    board = board + (42-len(board)) * "0"
    board = board[:42]
    positions.append(board)
    if(i%7 == 6):
        i = i+3
    i = i+1
    j=0

# 4 counters in a row diagonally (\)
i = 0;
j = 0;

while(i <= 17):
    board = i*"0"
    while(j <= 3):
        board = board + "1" + "0000000"
        j = j+1
    board = board + (42-len(board)) * "0"
    board = board[:42]
    positions.append(board)
    if(i%7 == 3):
        i = i+3
    i = i+1
    j=0

# writing to csv
file = open("positions.csv", "w")
for position in positions:
    file.write(position + ",")
file.close()