<<<<<<< HEAD
$(document).on('itemScanned',function(event,scanResult)
{
  if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/))
    {   
		if(networkstatus == 'disconnected')
		{
			$('.content-cont').empty();
			$('.content-cont').append('Disconnected. Please try again once online.');
			//can add "click here" with scanResult variable to retrieve once online.
			//by modifying ondeviceonline code, i can make it load automatically once online.
			
			scanResultWhenOffline = scanResult;
		}
		else
		{
			  renderOnlineSinglePage(scanResult);
              //ref = window.open('http://viveg.net/index.php?id_product=78&controller=product', '_blank', 'location=no,toolbar=no');
             // eventListeners();
             // askExit();//because it was set to loading before scanner start scanning
		}

 

    }
=======
$(document).on('itemScanned',function(event,scanResult)
{
  if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/))
    {   
		if(networkstatus == 'disconnected')
		{
			$('.content-cont').empty();
			$('.content-cont').append('scan failed because you were offline. Please try again once online.');
			//can add "click here" with scanResult variable to retrieve once online.
			//by modifying ondeviceonline code, i can make it load automatically once online.
			
			scanResultWhenOffline = scanResult;
		}
		else
		{
			renderOnlineSinglePage(scanResult);
		}

 

    }
>>>>>>> origin/master
});