window.onload = function()
{
  var slideShow = document.getElementById("slideShow");
  
  var imagesSrc = ["foto0.jpg", "foto1.jpg", "foto2.jpg"];
  
  for (var i=0; i < imagesSrc.length; i++)
  {
      var image = new Image();
      
      image.src = "img/"+imagesSrc[i];
      
      slideShow.appendChild(image);
  }
  
  slideShow.childNodes[0].setAttribute("class","current");
  var i = 0;
  
  setInterval(function()
  {
    slideShow.childNodes[i % imagesSrc.length].setAttribute("class","");
    
    slideShow.childNodes[(i+1) % imagesSrc.length].setAttribute("class","current");
    i++;
  }, 5000);
};
