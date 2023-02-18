// ============Assignment 2==============

// 1
// var username

// 2
// var myName="Ahsan Akbar"

// 3
// var message
// message="Hello World"
// alert(message)

// 4
// var myName="My name is Ahsan Akbar"
// var age="I am 22 years old"
// var university="University: SSUET"
// var courseName="Course: Front-End Mobile & App Developer"
// alert(myName)
// alert(age)
// alert(university)
// alert(courseName)

// 5
// var product="PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(product)

// 6
// var NoOfChildren= 2
// var partnerName="XYZ"
// var location1="Australia"
// var jobTitle="Senior Full Stack Developer"
// alert("You will be a "+jobTitle+" in "+location1+", and married to "+partnerName+" with "+NoOfChildren+" kids.")

// 7
// var email="ahsan.akbar.543@gmail.com"
// alert("My email address is "+email)

// 8
// var book="Smarter way to learn JavaScript"
// alert("I am trying to learn from the book "+"'"+book+"'" )

// 10
// document.write("Yay! i can write HTML content through JavaScript")


// ============Assignment 3==============

// 1
// var age=22
// alert("I am "+age+" years old")

// 2
// var visits=100 
// alert("You have visited this site "+visits+" times")

// 3
// var birthYear=2000
// document.write("My birth year is "+birthYear+"<br>")
// document.write("Data type of my declared variable is "+typeof birthYear )

// 4
// var visitorName="Ahsan Akbar"
// var product="Trouser"
// var quantity=2
// document.writeln(visitorName+" ordered "+quantity+" "+product+" from Nike store")


// ============Assignment 4==============

// 1
// var num1,num2,num3
// num2=4
// alert(num2)

// 2
// var number
// var _num1
// var $name
// var emailAddress
// var first_name

// var 1num
// var @name
// var first.name
// var this
// var #$%^&*

// 3
// document.write("<ol><h1>Rules for naming JS variable</h1><li>Variable names can only contain:alpha-numeric characters and underscores</li><li>Variables must begin with a $ sign, underscore or character</li><li>Variable names are case sensitive </li><li>Variable names should not be JS <u>keywords</u> </li> </ol>")


// ============Assignment 5-7==============

// 1
// var num1=4
// var num2=10
// var sum= num1+num2
// document.write("Sum of "+num1+" and "+num2+" is "+sum +"<br>")

// 2
// var subtraction= num1-num2
// var multiplication=num1*num2
// var division=num1/num2
// var modulus=num1%num2
// document.write("Subtraction of "+num1+" and "+num2+" is "+subtraction +"<br>")
// document.write("Multiplication of "+num1+" and "+num2+" is "+multiplication +"<br>")
// document.write("Division of "+num1+" and "+num2+" is "+division +"<br>")
// document.write("Modulus of "+num1+" and "+num2+" is "+modulus +"<br>")

// 3
// var num
// document.write("Value after variable declaration is: "+ num+"<br>")
// num=100
// document.write("Initial value: "+ num+ "<br>")
// num++
// document.write("Value after increment: "+ num+ "<br>")
// num+=7
// document.write("Value after adding 7: "+ num+ "<br>")
// num--
// document.write("Value after decrement: "+ num+ "<br>")
// num%=3
// document.write("The remainder is: "+num)

// 4
// var ticketPrice=600
// var ticketQuantity= +prompt("How many tickets do you want to purchase")
// var totalCost=ticketQuantity*ticketPrice
// document.write("Total cost to buy "+ticketQuantity+" tickets to a movie is "+totalCost+" PKR")

// 5
// var num= parseInt( prompt("Enter the number you want to generate table of:"))
// document.write("Multiplication table of "+num+"<br>")
// for(var i=1;i<=10;i++){
//     result=num*i
//     document.write(num+" x "+i+" = "+result+"<br>")
// }

// 6
// var celciusTemp=12
// var fahrenheitConverter=(celciusTemp* 9/5)+32
// var fahrenheitTemp= 68
// var celciusConverter=(fahrenheitTemp-32)* 5/9
// document.writeln(celciusTemp+"&deg;C is "+fahrenheitConverter+"&deg;F <br>")
// document.writeln(fahrenheitTemp+"&deg;F is "+celciusConverter+"&deg;C")

// 7
// var item1Price=560
// var item2Price=200
// var item1Quantity=2
// var item2Quantity=5
// var shippingCharges=150
// var totalCost= (item1Price*item1Quantity) + (item2Price*item2Quantity) + shippingCharges
// document.write("<h3>Shopping Cart</h3><br><br>Price of item 1 is "+item1Price+"<br>Quantity of item 1 is "+item1Quantity+"<br>Price of item 2 is "+item2Price+"<br>Quantity of item 2 is "+item2Quantity+"<br>Shipping Charges: "+shippingCharges+"<br><br>Total cost of your order is "+totalCost+" PKR")

// 8
// var totalMarks= +prompt("Enter the total marks")
// var obtainedMarks= +prompt("Enter the marks you have obtained")
// var percentage= (obtainedMarks/totalMarks) *100
// document.write("<h2>Marks Sheet</h2><br>Total marks: "+totalMarks+"<br>Marks obtained: "+obtainedMarks+"<br>Percentage: "+percentage+"%")

// 9
// var dollars=10
// var riyals=25
// var pkrCurrency= (10*104) + (25*28)
// document.write("<h2>Currency in PKR</h2><br><br>Total currency in PKR: "+pkrCurrency)

// 10
// var num=10
// var calculation=num+5*10/2
// document.write(calculation)

// 11
// var currentYear=2015
// var birthYear= 1992
// var age=currentYear-birthYear
// document.write("Age Calculator <br><br> Current Year: "+currentYear+"<br>Birth Year: "+birthYear+"<br>They are either "+age+" or "+ ++age +" years old")

// 12
// var radius=12
// var circumference= 2 * 3.142 * radius**2  
// var area= 3.142 * radius**2
// document.write("The Geometrizer <br><br>Radius of a circle: "+radius+"<br>The circumference is: "+circumference+"<br>The area is: "+area)

// 13
// var a=10
// document.write("Result: <br> The value of a is: "+a+"<br>.............................<br>" )
// document.write("The value of ++a is: "+ ++a +"<br>Now the value of a is: "+a+"<br><br>")
// document.write("The value of a++ is: "+ a++ +"<br>Now the value of a is: "+a+"<br><br>")
// document.write("The value of --a is: "+ --a +"<br>Now the value of a is: "+a+"<br><br>")
// document.write("The value of a-- is: "+ a-- +"<br>Now the value of a is: "+a+"<br><br>")

// 14
// var a=2, b=1
// var result= --a - --b + ++b + b--  
// document.write("--a; "+ --a +"<br>")
// // document.write("--a - --b; "+ --a - --b +"<br>")
// // document.write("--a - --b + ++b; "+ --a - --b + ++b +"<br>")
// // document.write("--a - --b + ++b + b--; "+ --a - --b + ++b + b-- +"<br>")
// document.write("a is: "+a + "<br>")
// document.write("b is: "+b + "<br>")
// document.write("result is: "+result + "<br>")

// 15
// var favSnack="Snicker Chocolate"
// var currentAge=23
// var maxAge=100
// var consumptionPerDay= 2
// var lifeTimeSupply= (maxAge-currentAge)*365*2 
// document.write("The Lifetime Supply Calculator<br><br>")
// document.write("Favourite Snack: "+favSnack +"<br>")
// document.write("Current Age: "+currentAge +"<br>")
// document.write("Estimated Maximum Age: "+maxAge +"<br>")
// document.write("Amount of snacks per day: "+consumptionPerDay +"<br>")
// document.write("You will need "+lifeTimeSupply+" "+favSnack+" to last you untill the ripe old age of "+maxAge +"<br>")


// ============Assignment 8-11==============

// 1
// var name1= prompt("Please enter your name")
// alert("Hi, "+name1)

// 2
// var num= +prompt("Enter the number you want table of")

// for( var a=1; a<=10; a++){
//     if(num=+num){
//     var result=num*a
//     document.write(num+" x "+a+" = "+result+"<br>")
// }
// else{
//     document.write(5+" x "+a+" = "+(5*a)+"<br>")
// }
// }

// 3
// var city= prompt("Enter the city name")
// var cityLowerCase = city.toLocaleLowerCase()
// if(cityLowerCase=="karachi"){
//     document.write("Welcome to the city of lights")
// }
// else{
//     document.write("You are in "+city)
// }

// 4
// var gender = prompt("Enter your gender")
// // var gen=gender.toLowerCase()
// gender = gender.toLowerCase()
// if (gender === "male") {
//     document.write("Good Morning Sir")
// }
// else {
//     document.write("Good Morning Ma'am")
// }

// 5
// var color=prompt("Enter the Signal color")
// color=color.toLowerCase()
// if(color=="red"){
//     document.write("Vehicle must stop")
// }
// else if(color=="yellow"){
//     document.write("Vehicles should get ready to move")
// }
// else if(color=="green"){
//     document.write("Vehicles can move now")
// }
// else{
//     document.write("This is not the signal color ")
// }

// 6
// var maxAge=+prompt("Enter your max age")
// var currentAge=+prompt("Enter your current age")
// if(currentAge<=maxAge){
//     document.write("You are welcome")
// }

// 7
// var remainingFuel=+prompt("Enter the fuel remaining in your car")
// if(remainingFuel<0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("You are good to go")
// }

// 8
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// if (true){
//  alert("True");
// }
// if (false){
//  alert("False");
// }
// if("car" < "cat"){
//  alert("car is smaller than cat");
// }

// 9



// 10                                                       error hy iss mn!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var newitem1Name=prompt("Enter the name of item 1")
// var newitem1Price=+prompt("Enter the price of item 1")
// var newitem1Quantity=+prompt("Enter the quantity of item 1")
// var newitem2Name=prompt("Enter the name of item 2")
// var newitem2Price=+prompt("Enter the price of item 2")
// var newitem2Quantity=+prompt("Enter the quantity of item 2")
// var newshippingCharges=200
// var newtotalCost=(newitem1Price*newitem1Quantity)+(newitem2Price*newitem2Quantity)+newshippingCharges
// if(newtotalCost>2000){
//     newdiscountedPrice=newtotalCost*10/100
//     document.write("Item 1: "+newitem1Name+"<br>Price: "+newitem1Price+"<br>Quantity: "+newitem1Quantity+"<br><br>Item 2: "+newitem2Name+"<br>Price: "+newitem2Price+"<br>Quantity: "+newitem2Quantity+"<br>Total Cost: "+newtotalCost+"<br>10% Discount<br>"+"Discounted Price: "+newdiscountedPrice+"<br><br>")
// }
// else{
//     document.write("Item 1: "+newitem1Name+"<br>Price: "+newitem1Price+"<br>Quantity: "+newitem1Quantity+"<br><br>Item 2: "+newitem2Name+"<br>Price: "+newitem2Price+"<br>Quantity: "+newitem2Quantity+"<br>Total Cost: "+newtotalCost)
// }

// 11
// var secretNum=9
// var guessNum=+prompt("Guess the secret Number")
// if(secretNum==guessNum){
//     document.write("Bingo! Correct answer")
// }
// else if(guessNum>10){
//     document.write("You enter a high number...Please enter number ranging from 1 to 10")
// }
// else{
//     document.write("Close enough to the correct answer")
// }

// 12
// var numb=+prompt("Enter any number")
// mod=numb%3
// if(mod==0){
//     document.write("Number is divisible by 3")
// }
// else{
//     document.write("Number is not divisible by 3")
// }

// 13
// var team1=prompt("Enter the name of team1")
// var team1Score=+prompt("Enter the scores of team 1")
// var team2=prompt("Enter the name of team2")
// var team2Score=+prompt("Enter the scores of team 2")
// if(team1Score>team2Score){
//     document.write(team1+" have won the match")
// }
// else if(team2Score>team1Score){
//     document.write(team2+" have won the match")
// }
// else if(team2Score==team1Score){
//     document.write("It's a tie")
// }

// 14
// var string="Ahsan"
// var num=100
// var bool=true
// document.write(string+" is a "+typeof string+"<br>")
// document.write(num+" is a "+typeof num+"<br>")
// document.write(bool+" is a "+typeof bool+"<br>")

// 15
// var num=+prompt("Enter any number")
// if(num%2==0){
//     document.write("Number is even")
// }
// else{
//     document.write("Number is odd")
// }

// 16
// var temp=+prompt("Enter the temperature")
// if(temp>=40){
//     document.write("Its too hot outside")
// }
// else if(temp>30 && temp<40){
//     document.write("The weather today is normal")
// }
// else if(temp>20 && temp<30){
//     document.write("The weather today is cool")
// }
// else if(temp>10 && temp<20){
//     document.write("OMG! The weather is soo cool")
// }
// else if(temp<=10){
//     document.write("Its freezing cold outisde.Stay warm")
// }

// 17
// var num1=+prompt("Enter first number")
// var operator=prompt("Enter the operation you want to perform")
// var num2=+prompt("Enter second number")
// if(operator==="+"){
//    var result=num1+num2
//    document.write(num1+" "+operator+" "+num2+" = "+result)
// }
// else if(operator==="-"){
//     var result=num1-num2
//     document.write(num1+" "+operator+" "+num2+" = "+result)
// }
// else if(operator==="*"){
//     var result=num1*num2
//     document.write(num1+" "+operator+" "+num2+" = "+result)
// }
// else if(operator==="/"){
//     var result=num1/num2
//     document.write(num1+" "+operator+" "+num2+" = "+result)
// }
// else if(operator==="%"){
//     var result=num1%num2
//     document.write(num1+" "+operator+" "+num2+" = "+result)
// }

// 18
// var dayName=prompt("Enter the day name")
// var dayName=dayName.toLowerCase()
// if(dayName=="monday"||dayName=="tuesday"||dayName=="wednesday"||dayName=="thursday"||dayName=="friday"){
//     document.write("Its a week day")
// }
// else if(dayName==="saturday"){
//     document.write("Its a weekday")
// }
// else if(dayName=="sunday"){
//     document.write("Yay! Its a holiday")
// }

// 19
// var score=+prompt("Enter the score you get")
// if(score>50){
//     document.write("You are passed")
// }
// else{
//     document.write("Try again")
// }

// 20
// var num1=+prompt("Enter number 1")
// var num2=+prompt("Enter number 2")
// if(num1>num2){
//     document.write("The greater number of "+num1+" and "+num2+" is "+num1)
// }
// else if(num2>num1){
//     document.write("The greater number of "+num1+" and "+num2+" is "+num2)
// }
// else{
//     document.write(num1+" and "+num2+" both are equal")
// }

// 21
// var language=prompt("Enter the language code")
// language=language.toLowerCase()
// if(language=="en"){
//     document.write("Hello World")
// }
// else if(language=="ge"){
//     document.write("Hallo Welt")
// }
// else if(language=="fr"){
//     document.write("Bonjour le monde")
// }

// 22
// var num=+prompt("Enter number")
// if(num>=0){
//     document.write("Its a positive number")
// }
// else{
//     document.write("Its a negative number")
// }

// 23
// var num=+prompt("Enter the number")
// var noun=prompt("Enter the noun")
// if(num>1){
//     document.write(num+" "+noun+"s")
// }
// else{
//     document.write(num+" "+noun)
// }


// ============================Assignment 12- 13=======================================

// 1
// var num=+prompt("Enter the number")
// if(num%3==0){
//     document.write(num+" is divisible by 3")
// }
// else{
//     document.write("It is not divisble by 3")
// }

// 2
// var num=+prompt("Enter any number")
// if(num%2==0){
//     document.write("It is even number")
// }
// else{
//     document.write("It is odd number")
// }

// 3
// var age=+prompt("Enter your age")
// if(age>18){
//     document.write("Old Enough")
// }
// else{
//     document.write("Too Young")
// }

// 4
// var name1=prompt("Enter your first name")
// name1=name1.toLowerCase()
// if(name1=="ahsan"){
//     document.write("OHH Hi, we have same name")
// }

// 5    Switch case nhi kra humne abhi

// 6
// var char=prompt("Enter any character")
// char1=char.charCodeAt()
// if(char1>="65" && char1<="90")
//     {
//     document.write(char +" is an UpperCase character <br>")
//     }
// else if (char1 >= "97" && char1 <= "122")
//     {
//     document.write(char +" is an LowerCase character <br>")
//     }
// else{ 
//     document.write(char +" is a number <br>")
// }

// 7   switch case

// 8
// var time=+prompt("Enter time in 24 Hours format")
// if(time>=0 && time<1200){
//     document.write("Good Morning")
// }
// else if(time>=1200 && time<1700){
//     document.write("Good Afternoon")
// }
// else if(time>=1700 && time<2100){
//     document.write("Good Evening")
// }
// else if(time>=2100 && time<2359){
//     document.write("Good Night")
// }
// else{
//     document.write("Incorrect time format")
// }

// 9
// var year=+prompt("Enter the year in YYYY format")
// if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
//     document.write(year+" is a leap year")
// }
// else{
//     document.write(year+" is not a leap year")
// }

// 10
// var correctPass="ahsan12345"
// var password=prompt("Enter your password")
// if(correctPass==password){
//     document.write("Correct password")
// }
// else{
//     document.write("Incorrect password<br>"+password)
// }

// 11
// var fname="Ali"
// if(fname=="Fahad"){
//     document.write("Hello Fahad")
// }
// else{
//     document.write("You are not Fahad")
// }

// 12
// var hour = 13;
// if (hour < 18) {
//     document.write("Good day")
// }
// else {
//     document.write("Good evening")
// }

// 13
// var num1=+prompt("Enter number 1")
// var num2=+prompt("Enter number 2")
// if(num1>num2){
//     document.write(num1+" is greater")
// }
// else if(num2>num1){
//     document.write(num2+" is greater")
// }
// else{
//     document.write("Both number are equal")
// }

// 14
// var num=+prompt("Enter any number")
// if(num==0){
//     document.write("The number is zero")
// }
// else if(num>0){
//     document.write("The number is positive")
// }
// else{
//     document.write("The number is negative")
// }

// 15
// var time=+prompt("Enter time in 24 hours format")
// if(time>=6 && time<=9){
//     document.write("Breakfast time")
// }
// else if(time>=11 && time<=13){
//     document.write("Lunch time")
// }
// else if(time>=17 && time<=20){
//     document.write("Dinner time")
// }
// else{
//     document.write("Sorry, you'll have to wait, or go get a snack.")
// }

// 16
// var val=true
// document.write(val+" is a "+ typeof val)

// 17
// var char=prompt("Enter a character")
// char=char.toLowerCase()
// if(char=="a"|| char=="e"|| char=="i"|| char=="o"|| char=="u"){
//     document.write(char+" is a vowel")
// }
// else{
//     document.write(char+" is not a vowel")
// }

// 18
// var num1=+prompt("Enter number 1")
// var operator=prompt("Enter the correct comparison operator")
// var num2=+prompt("Enter number 2")
// if(num1==num2 && operator=="=="){
//     document.write("true")
// }
// else{
//     document.write("false")
// }

// 19   switch case

// 20
