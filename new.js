$.getJSON('./programs', data => {
    console.log(data);
    data.forEach(element => {
       $("#codeslist").append("<li><a href='/code.html#"+element+"' target='_blank'>"+element+"</a></li>");

    });
    });