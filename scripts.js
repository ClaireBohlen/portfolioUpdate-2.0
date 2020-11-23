//Pushpin NOT WORKING CORRECTLY
  $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('home' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
 
//Listener for the card modals

//Card One
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, open);

     
});


//Card Two 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal2');
    var instances = M.Modal.init(elems, open);

     
});
//Card Three
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal3');
    var instances = M.Modal.init(elems, open);

     
});
//Card Four
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal4');
    var instances = M.Modal.init(elems, open);

     
});




