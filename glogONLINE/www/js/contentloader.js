 $(document).ready(function()
{ 
      
    
       var defaultContent = 'splash.html';     
         $(".content-cont").load(defaultContent,  null, function(event,filename)
         {
			 $('.site-content').removeClass('container');
             $('body').css('background-image', 'url(' + '"img/splashbg.jpg"' + ')');
			 $('.content-cont').css( 'marginTop','0px' );
    		 $('.content-cont').css('marginBottom', '0px' );
			 $('body').bind('touchmove', function(e){e.preventDefault()});
			 $('.bxslider').bxSlider();

			 
			 
				 $(".slideToUnlock").on('click',function()
				 {      clearInterval(timerId);

						$('.site-content').addClass('container');
						$('body').css('background-image', 'none');
						$('.content-cont').css('marginTop','60px');
						$('.content-cont').css('marginBottom','60px');
						jQuery('body').unbind('touchmove');
					 	$('.bxslider').hide();
					 	
					
                      askExit();
					 $('nav , footer').show();
					 $('.splashscreencont').remove();


                    
                  
                  
            
                    openHomePage();



                    //scanner.startScanning(MWBSInitSpace.init,MWBSInitSpace.callback);
                  

				 });
         });

    $('body').on("click",'.yesExit', function()
     {
          navigator.app.exitApp();
     });

    $('body').on("click",'.noContinue', function()
    {  
        openHomePage();
    });


     
 });
