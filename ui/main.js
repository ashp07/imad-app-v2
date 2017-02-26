// counter
var button = document.getElementById('counter');

button.onclick = function()
{
    //Create a request object
    var request=new XMLHttpRequest();
    
    //Capture the Response
    request.onReadyStateChange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
           //Take some action
           if(request.status == 200){  //200 means successfull response
              //Capture a list of names and render it as a list
                 var names = request.responseText;
                 names = JSON.parse(names);
                 
                  var list ='';
                    for (var i=0; i<names.length; i++)
                      {
                     list += '<li>' + names[i] + '</li>';
                      }
                   var ul = document.getElementById('namelist');
                   ul.innerHTML = list;
      
           }
        } 
        //Do nothing
    };
    
    //Making a request
    request.open('GET','http://ashp07.imad.hasura-app.io/aubmit-name?name=' +name , true);
    request.send(null);
    
};

  //Submit Name
  var nameInput = document.getElementById('name');
  var name =  nameInput.value;
  var submit = document.getElementById('submit_btn');
  submit.onclick = function()
  {
    //Make a request to the server and send the name
    

  };
  
  