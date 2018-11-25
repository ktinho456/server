imagedp = new Image()
imagedp.src = 'distripont.png';

imageinv = new Image()
imageinv.src = 'inventario.png';

imagepod = new Image()
imagepod.src = 'poderes.png';


function mouseClick(e)
{
//			image = new Image()
//			image.src = 'avatar.png';
var xpos = (newplayerX+newplayerY)*this.tileH/2 + mapX;
var ypos = (newplayerX+newplayerY)*this.tileH/2+ mapY;

var playerx1 = playerX;
var playery1 = playerY;
var playerxx = playerX+1;
var playeryy = playerY+1;
var playerr = playerX-1;
var playerrr = playerY-1;

player[playerx1][playery1] = 1;

if(playerx1 !== playerxx && playery1 !== playeryy){
delete player[playerxx][playeryy];
delete player[playerr][playerrr];
delete player[playerx1][playeryy];
delete player[playerx1][playerrr];

delete player[playerxx][playery1];
delete player[playerr][playery1];
delete player[playerxx][playerrr];
delete player[playerr][playeryy];


}












	newX = playerX; // local copies
	newY = playerY;
		
	if(xmouse > newX) newX++ //////&& mapX++;
	if(ymouse > newY) newY++ ///////&& mapY++;
	if(xmouse < newX) newX-- /////////&& mapX--;
	if(ymouse < newY) newY-- ////////&& mapY--;
	
	
	
	
	 			 if(mtx > newX)mtx --;
				 if(mty > newY)mty --;
				 if(mtx < newX)mtx ++; 
				 if(mty < newY)mty ++;
				 
				 
				 	
	 			 if(mtx1 > newX)mtx1 --;
				 if(mty1 > newY)mty1 --;
				 if(mtx1 < newX)mtx1 ++; 
				 if(mty1 < newY)mty1 ++;
				 
				 
				 	
	 			 if(mtx2 > newX)mtx2 --;
				 if(mty2 > newY)mty2 --;
				 if(mtx2 < newX)mtx2 ++; 
				 if(mty2 < newY)mty2 ++;
				 
				 	
	 			 if(mtx3 > newX)mtx3 --;
				 if(mty3 > newY)mty3 --;
				 if(mtx3 < newX)mtx3 ++; 
				 if(mty3 < newY)mty3 ++;

                                 if(mtx == newX)mtx = 10;//mata monstro
      				 if(mty == newY)mty = 10;//mata monstro
                                 
                                 if(mtx == newX || mty == newY)monstro = morto;
		


		if(mtx > playerY && mty < playerX) movey1 = 290;
		if(mty > playerY && mtx  < playerX) movey1 = 420;
		if(mty > playerY && mtx  > playerX) movey1 = 560;
		if(mty < playerY && mtx  < playerX) movey1 = 845;

		
		if(mtx  == playerX && mty > playerY) movey1 = 135;
		if(mtx  == playerX && mty < playerY) movey1 = 703;
		if(mtx  < playerX && mty == playerY) movey1 = 420;
		if(mtx  > playerX && mty == playerY) movey1 = 5;
	



              
		


	
	




	
	
	
	 	if(xmouse > newX && ymouse < newY) movey = 724;
		if(ymouse > newY && xmouse < newX) movey = 475;
		if(ymouse > newY && xmouse > newX) movey = 10;
		if(ymouse < newY && xmouse < newX) movey = 240;

		
		if(xmouse == newX && ymouse > newY) movey = 1430;
		if(xmouse == newX && ymouse < newY) movey = 1196;
		if(xmouse < newX && ymouse == newY) movey = 966;
		if(xmouse > newX && ymouse == newY) movey = 1687;
		
		if(xmouse == newX && ymouse == newY) movey = 1933;
	////clickSound.play();
	
	////if(xmouse > 25)map = mapa; 	
	
	
		
	document.getElementById("vy").innerHTML = xmouse;
        document.getElementById("vx").innerHTML = ymouse;


if(monstro == morto)pontos +=5;
  
        document.getElementById("lvl").innerHTML = level;
        document.getElementById("pts").innerHTML = pontos;

	if(map[newX] && map[newX][newY] !== 2 && map[newX] && map[newX][newY] !== undefined)
	
	
	 		
	 
    
    	
	{
		playerX = newX;
		playerY = newY;
		

		

	}
	if(newY !== ymouse  || newX !== xmouse){
socket.emit('position', {playerX: playerX, playerY: playerY});


///objectMap[xpos ][ypos] = 1;

}

 /// objectMap [playerX][playerY] = 1;
  
/////	delete objectMap [newX][newY] ;

	// objectMap [xmouse][ymouse] = 2;
	 
	// objectMap [xmouse][ymouse] = 3;
	 
	// objectMap [xmouse][ymouse] = 4;
	
	
	 ///if(ymouse < playerY) mapX -= 30;	
	 ///if(xmouse < playerX) mapX += 30;	
	 ///if(ymouse > playerY) mapX += 30;	
	 ///if(xmouse > playerX) mapX -= 30;	
	
	
		
	

////alert(valor);

	

	
	 /////objectMap [ playerX ][ playerY ] = t ; 
	
 /////if(playerX == 0 && playerY == 9 ) 
 
 ////if(playerX == 0 && playerY == 8 ) drawMap = true;
///	map[xmouse][ymouse] = 2;
	 		

//// objectMap [xmouse][ymouse] = t;


};









function playAudioOnKeyDown(e) {
  if (e.keyCode == 65) {
    clickSound.play();
    ctx.drawImage( imagedp,0,0);
  }

if (e.keyCode == 83) {
    clickSound.play();
    ctx.drawImage( imageinv,0,0);
  }


if (e.keyCode == 68) {
    clickSound.play();
    ctx.drawImage( imagepod,0,0);
  }


};











