var hasFocus = true;
var secs=60;
var mins=2;
var counter;
var count;

window.onfocus = function() {
       hasFocus = true;
    execute();
};
window.onload=execute();

window.onblur = function() {
     clearInterval(counter);  
    hasFocus = false;   
};


function timer()
{	
  count=count-1;
  if (count <= 0)
  {
       alert("OMG!! WTH are you doing?? you have work baby.. Get back to work ASAP");
      
     clearInterval(counter);  

     return ;
  }
    console.log(count);
}


function execute()
{
count=secs*mins;
if(hasFocus)
{
counter=setInterval(timer, 1000); 
}
}
