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
    
window.fib=(number)->
  x=1
  y=1
  z=0
  #arr=[]
  sum = 0
  while x<number
    z=x
    x=x+y
    y=z
    sum= sum + x  if x%2 is 0 
    
    #arr.push(x) if x%2 is 0
    console.log(x)
  console.log(sum)
  2
    
  

window.clickhandler=()->
  $(".toggle").click( ()->
    console.log "test"
    $(this).hide()
  )
  

  
sync_object = 
  "GDrive":
    "key": "424243246254-n6b2v8j4j09723ktif41ln247n75pnts.apps.googleusercontent.com"
    "scope": "https://www.googleapis.com/auth/drive"
    "app_name": "diaryapp"
  "Dropbox":
    "key": "q5yx30gr8mcvq4f"
    "secret": "qy64qphr70lwui5"
    "app_name": "diaryapp"

Nimbus.Auth.setup(sync_object)

window.Todo = Nimbus.Model.setup("Todo", [ "done", "description"])

window.createTodo = (description,done) -> 
  instance = Todo.create({ "description":description, "done":done})
  
window.render_todo = () ->
  $(".list").html("")
  for x in Todo.all()
    if x.done is true
      todostring = "<li>" + x.description + '<div class="toggle active"> <div class="toggle-handle"></div> </div>' + "</li>"
    else 
      todostring = "<li>" + x.description + '<div class="toggle"> <div class="toggle-handle"></div> </div>' + "</li>"
    #console.log(x)
    #console.log("<li>" + x.description + "</li>")
    #console.log(x.description)
    $(".list").append(todostring)
    
    



