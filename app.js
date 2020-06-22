// Just puts the default value in the text areas
function default_text()
{
     // putting defaut values in the text area
    document.getElementById("Html").defaultValue = "<!DOCTYPE html>\n<h1>Hello World !</h1>";
    document.getElementById("Css").defaultValue = "body{ background: orange; }";
    document.getElementById("Js").defaultValue = "";
    
    //calling the function to show the default values in iframe.. 
    view_in_iframe();
    
}

// this function is used to print the html css and js inside iframe..
function view_in_iframe(){

  var html = document.getElementById("Html");
  var css = document.getElementById("Css");
  var js = document.getElementById("Js");
  var viewer = document.getElementById("Viewer").contentWindow.document;
  
  // printing inside iframe .. binding html css js together.. 
  viewer.open();
      viewer.writeln(
        html.value +
          "<style>" + css.value + "</style>" + "<script>" +js.value +"</script>"
      );
      viewer.close();
} 

//calling the functions
default_text();
// Every time when key is released this function will be trigerred 
   document.body.onkeyup = function()
   {
       view_in_iframe();
   };
 