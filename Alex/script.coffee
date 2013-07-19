window.test= ()->
  countdown = (num for num in [10..1])
  
window.problem1= (number)->
  countdown = [1..number-1]
  sum=0
  for x in countdown
    if x%3 is 0 or x%5 is 0
      sum = sum+x
  return sum
  
window.fib= (number)->
   x=1
   y=1
   z=0
   sum=0
   while x < 4000000
     z=x
     x=x+y
     y=z
     if x%2 is 0
       sum=sum+x
   if x%2 is 0
     sum=sum-x   
   console.log(sum3)

window.prime= (number)->
  x=2
  while (number>1) and (number>=x)
    if number%x is 0
      number=number/x
      console.log(x)
    else x=x+1
  return number
  
window.tp=(testnumb)->
  x=String(testnumb).length
  if(String(testnumb)[0] is String(testnumb)[5] and String(testnumb)[1] is String(testnumb)[4] and String(testnumb)[2] is String(testnumb)[3]) 
    return true
  else
    return false
  
window.palendrome= (x,y)->
   max=0
   for x in [999..100]
       for y in [999..100]
          prod=x*y
          if tp(prod)
            if prod>max
                max=prod
    console.log(max)           
             
      
    while prod > 99999
      if tp(prod) 
        console.log(x,y,prod)     
        prod=0
      else
        x=x-a%2
        y=y-b%2
        a=a+1
        b=b+1
        prod=x*y
    
    
    
      
    
sync_object = 
  "GDrive":
    "key": "424243246254-n6b2v8j4j09723ktif41ln247n75pnts.apps.googleusercontent.com"
    "scope": "https://www.googleapis.com/auth/drive"
    "app_name": "alexapp"
  "Dropbox":
    "key": "q5yx30gr8mcvq4f"
    "secret": "qy64qphr70lwui5"
    "app_name": "alexapp"

Nimbus.Auth.setup(sync_object)
     
