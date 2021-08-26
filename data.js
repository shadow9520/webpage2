console.log('hello')
      
    
  
      // FETCHING DATA FROM JSON FILE
      $.getJSON("https://ambitioussociableprotools.elliotmassey.repl.co/database.json",function (result){
          var comment = '';
          var test = '<h3> this is a test </h3>'
          console.log(result) 
          // ITERATING THROUGH OBJECTS
          $.each(result, function (i, value) {
              console.log(result)
              console.log(value)            
              //CONSTRUCTION OF ROWS HAVING
              // DATA FROM JSON OBJECT
              comment += '<br/>';
              comment += '<div class="comment">';
              comment += '<h1 class="author">' + 
                  value.Usrname + ":" + '</h1>';

              comment += '<p>' + 
                  value.Comment + '</p class="text">';

              comment += '</div>';
          });
            
          //INSERTING ROWS INTO TABLE 
          document.getElementById("comments").innerText += comment;
          $('#comments').append(comment);
          $('#comments').append(test);
          document.getElementById("comments").innerText += test;
      });
