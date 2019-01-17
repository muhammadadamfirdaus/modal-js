function modal(button, uniqueClass){
  // first, declare modal container
  const modal = document.querySelector('.modal' + uniqueClass);
  // check if modal exists
  if(modal){
    // console.log('modal');
    // button modal on click
    window.addEventListener('click', function(e){
      // don't forget to remind user using '.button-modal'
      if(e.target.closest('.button-modal' + button)){
        // check if user click button modal
        // console.log('di dalam');
        if(modal.classList.contains('active')){
          modal.classList.remove('active');
        } else {
          modal.classList.add('active');
        }
      } else if(e.target.closest('.modal')){
        // and also check to closest modal media
        // console.log('di dalam');
        if(e.target.closest('.button.close')){
          // close when user hit button close modal
          modal.classList.remove('active');
        } else {
          // but do nothing if click inside
          return;
        }
      } else {
        // destroy everything when user out of the box...
        // console.log('di luar');
        modal.classList.remove('active');
      }
    });
  }
}