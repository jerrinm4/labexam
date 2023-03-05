$.getJSON('https://api.github.com/repos/jerrinm4/labexam/git/trees/main', data => {
    console.log(data['tree']);
    data['tree'].forEach(element => {
      if(element['path']=="programs"){
         console.log(element["url"]);
         $.getJSON(element["url"], data => {
    data['tree'].forEach(element1 => {
      console.log(element1['path'])
       $("#codeslist").append("<li><a href='./code.html#"+element1['path']+"' target='_blank'>"+element1['path']+"</a></li>");

    });
    });
      }

    });
    });



   //  $.getJSON('/programs', data => {
   //    console.log(data);
   //    data.forEach(element => {
   //       $("#codeslist").append("<li><a href='/code.html#"+element+"' target='_blank'>"+element+"</a></li>");
  
   //    });
   //    });