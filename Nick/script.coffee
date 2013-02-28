window.list= [1,2,3,4,5]
window.Obj=
  name: "Nick"
  number: "2022622722"
  height: "72"
  
window.sumarray=(number_array)->
  total = 0
   
  for x in number_array
    total = total + x
  console.log(total) 

window.sum1=(number)->
  number_array = [1..number-1]
  total = 0
  for x in number_array   
    if x % 3 is 0 or x % 5 is 0
      total = total + x
      console.log(total)
    
window.clickhandler=()->
  $(".toggle").click( ()->
    console.log "test"
    $(this).hide()
  )
  
  

    
  



