
// Just puts the default value in the text areas
function default_text()
{
    document.getElementById("Html").defaultValue = "<!DOCTYPE html>\n<h1>Hello World !</h1>";
    document.getElementById("Css").defaultValue = "body{ background: orange; }";
    var viewer = document.getElementById("Viewer").contentWindow.document;
    viewer.open();
      viewer.writeln(
        document.getElementById("Html").value +
          "<style>" + document.getElementById("Css").value + "</style>"
      );
      viewer.close();
}

// Every time when key is released this function will be trigerred 
function compile() {
    
    var html = document.getElementById("Html");

    var css = document.getElementById("Css");

    var js = document.getElementById("Js");

    var viewer = document.getElementById("Viewer").contentWindow.document;
  
    document.body.onkeyup = function() {
      viewer.open();
      viewer.writeln(
        html.value +
          "<style>" + css.value + "</style>" + "<script>" +js.value +"</script>"
      );
      viewer.close();
    };
  }
  default_text(); 
  compile();