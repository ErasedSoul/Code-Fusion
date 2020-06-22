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
  
  compile();