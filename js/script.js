window.addEventListener('load', (event) => {

  
  /******  top nav scroll function ********/
  var element = document.getElementById("top_nav");
  var top_search = document.getElementById("top_search");
  window.onscroll = function (e)
  {    
      
      if(0 < document.documentElement.scrollTop){
        element.classList.add("top_nav");
        top_search.classList.add("top_search");
      }else{
        element.classList.remove("top_nav");
        top_search.classList.remove("top_search");
      }
  }



  /******  screen resize function ********/
  var width = $(window).width();
  $(window).on('resize', function() {
    if ($(this).width() !== width){

      if($(this).width() < 992){
        
      }else{
        
      }


    }
  });



  /******   agenda pagination function ********/

  var pagination_pos = 0;
  var pagination_mar = 0;
  var pagination_start =0;
  var i = 1;
  var test = 1;
  var pos1 = -1;
  var pos2 = 1;
 
  document.querySelectorAll(".pagination_agenda").forEach(function(item){

    //item.classList.remove("pagination_agenda_act");

    item.addEventListener("click", function(event){
      event.preventDefault();

        var new_pos = this.getAttribute('data-agenda');     

          if(pagination_pos != new_pos){

            pagination_start = 522*pagination_pos;
            
            pagination_mar= 522*new_pos;

            if( new_pos > pagination_pos){
              test = pos1;    
            }else{
              test = pos2; 
            }

            
              var myVar = setInterval(myTimer, 1);  
                       
              function myTimer() {

                  if(test == -1){                      
                      i++;
                      document.getElementById("agenda_block").style.marginLeft = test*(pagination_start+i) +"px";
                      if(i==pagination_mar){
                        myStopFunction();
                      }
                      
                  }else{
                      
                      i++;
                      document.getElementById("agenda_block").style.marginLeft = -pagination_start+i +"px";                      
                      if(i==pagination_start-pagination_mar){
                        myStopFunction();
                      }
                  }
              
              }
          }


          function myStopFunction() {
            clearInterval(myVar);
            if(test == -1){
              pagination_start = -pagination_mar;
            }else{
              pagination_start = pagination_mar;
            }
            
            pagination_pos = new_pos;
            i=1;
          }      
    });
  });


  /******   button search function ********/

  document.querySelector("#search_block").style.display = "none";

  document.querySelector("#top_search_btn").addEventListener("click", function(event){
      event.preventDefault();
      document.body.classList.add("body_scroll");
      document.querySelector("#search_block").style.display = "flex";
  });

  document.querySelector("#sp_close").addEventListener("click", function(event){
      event.preventDefault();
      document.body.classList.remove("body_scroll");
      document.querySelector("#search_block").style.display = "none";
  });



  /******   button nav bars function  ********/
  
  document.querySelector("#nav_block").style.display = "none";
  document.querySelector("#block_nav2").style.display = "none";
  document.querySelector("#block_nav3").style.display = "none";


  document.querySelector("#nav_bars").addEventListener("click", function(event){
      event.preventDefault();

      document.body.classList.add("body_scroll");
      document.querySelector("#nav_block").style.display = "flex";
  });

  document.querySelectorAll(".new_block1").forEach(function(item){
    
    item.addEventListener("click", function(event){
      document.querySelector("#block_nav2").style.display = "flex";
    });
  });


  document.querySelectorAll(".new_block2").forEach(function(item){
    
    item.addEventListener("click", function(event){
      document.querySelector("#block_nav").style.display = "flex";
    });
  });


});





