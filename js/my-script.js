 $('.contanier').click(function(){
        $('.job').slideDown(1000);
 
        $(this).find('.card').addClass('flipped');
          $('.contanier2').find('.card').removeClass('flipped');  
     $('.contanier3').find('.card').removeClass('flipped');  
      $('.contanier4').find('.card').removeClass('flipped');  
       $('.job2').slideUp(800);
      $('.job3').slideUp(800);
     $('.job4').slideUp(800);
     
        return false;
    });
 $('.contanier2').click(function(){
       
     $(this).find('.card').addClass('flipped');
        $('.job2').slideDown(1000);
     $('.contanier').find('.card').removeClass('flipped');
      $('.contanier3').find('.card').removeClass('flipped');
      $('.contanier4').find('.card').removeClass('flipped');
      $('.job3').slideUp(800);
     $('.job4').slideUp(800);
      $('.job').slideUp(800); 
        return false;
    });
 $('.contanier3').click(function(){
        $('.job3').slideDown(1000);
 
        $(this).find('.card').addClass('flipped');
            $('.contanier2').find('.card').removeClass('flipped');
      $('.contanier').find('.card').removeClass('flipped');
     $('.contanier4').find('.card').removeClass('flipped');
          $('.job2').slideUp(800);  
     $('.job').slideUp(800);   
      $('.job4').slideUp(800); 
  
  
     
        return false;
    });
 $('.contanier4').click(function(){
        $('.job4').slideDown(1000);
 
        $(this).find('.card').addClass('flipped');
     $('.contanier').find('.card').removeClass('flipped');
      $('.contanier3').find('.card').removeClass('flipped');
           $('.contanier2').find('.card').removeClass('flipped');
          $('.job3').slideUp(800);    
     $('.job2').slideUp(800);    
      $('.job').slideUp(800);    
       
     
        return false;
    });