       var x = 50,
                y = 50,
          frames = 900,
                 
                currentFrame = +0,
                 
               //// canvas = document.getElementById("myCanvas");
                
                image = new Image()
                image.src = 'avatar.png';
         
        var draw = function(){
             ///   ctx.clearRect(0, 0, x, y);
             ////  ctx.drawImage(image,y*currentFrame,0, x, y, 0, 0, x, y);
         
         /////ctx.drawImage(image,y*currentFrame,movey,50,50,xpos,ypos,50,50);
         
                if (currentFrame == frames) {
                  currentFrame = 0;
                } else {
                  currentFrame+=150;

                }
        }

 setInterval(draw, 100);


       var x1 = 50,
                y1 = 50,
          frames1 = 600,
                 
                currentFrame1 = +0,
                 
               
                
                image = new Image()
                image.src = 'avatar.png';
         
        var draw1 = function(){
            
         
                if (currentFrame == frames1) {
                  currentFrame1 = 0;
                } else {
                  currentFrame1+=100;

                }
        }

 setInterval(draw1, 100);











