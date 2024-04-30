## question 1
It prints out 3 because there are 3 items in prices so the loop runs 3 times

# question 2
it prints our 150 because the last item in the list is discounted by 50%.

# question 3
It prints out 150 of the last item already discounted and rounded, since 150 is already rounded it stayed the same.

# question 4
The function will return the array of discounted prices which is [50,100,150]

# question 5
it returned an error becasue i is not defined outside the for loop.

# question 6
it returned an error becasue discountedPrice is not defined outside the for loop

# question 7
it printed out 150 because it was the last finalPrice calulated in the loop and the variable was declared outside the for loop so it didnt run into the same problem as the last question

# question 8
it return the array of discounted prices that were calculated in the function which is [50,100,150]

# question 9
it returns an error because i only exits insdie the for loop, not outside of it.

# question 10
it prints out 3 because the length of the array of prices is 3 and is declared in the same block

# question 11
it should return the array of discounted prices that which is [50,100,150]. Even though the variable is a const you can still change the elements inside the array.

# question 12
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseload[0]

# question 13
A. '3' + 2 = '32' because the the string concatenates
B. '3' - 2 = 1, 3 is treated as an int and subtracts
C. 3 + null = 3, null is treated as a 0
D. '3' + null = '3null' since null is treated as a string because 3 is a string
E. true + 3 = 4 , true is treated as an int because of addition
F. false + null = 0 , both true and false are treated as a 0
G. '3' + undefined = '3undefined' , undifinded is treated like a string brecasue 3 is a string
H. '3' - undefined = NaN, 3 is treated like an int and subtracting with an undefined number causes Nan

# question 14
'2' > 1 = true, "2" is treated like an int 
'2' < '12' = false, since both are string they are compared lexographically
2 == '2' = true, '2' is treated like an int
2 === '2' = false , === checks the type of both objects but one is a string and the other an int
true == 2 = false, true is treated like an the int 1
true === Boolean(2) = true, the boolean of anything that is not 0 is considered true

# question 15 
'==' is equal and check the equivalence of 2 variables after conversion, but '===' does not do the conversion and also checks the type of variable it is.

## question 17
When modifyArray is called, array = [1,2,3] and callback = doSomething. An empty array is made called newArr, the the for loop runs for each integer inside of the first array and then calls doSomething with that int and mutiplies it by 2. Lastly, the new integer returned by doSomething is put into the newArr. When the for loop is done it return the newArr. Overall, it takes an array of number and return those numbers doubled in a new array.

## question 19
1 4 3 2