(function() {

    console.log('Hello, browser');
    $('*').css( 'cursor', 'default' );
    
    //$('*').css( 
    //    { 'background-color': 'rgb(255,0,203)'}
   // );
    
    $('p').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        //$('*').css( 'cursor', 'default' );
    });
     $('p').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);//delay for p to return
    });
    
    $('b').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        //$('*').css( 'cursor', 'default' );
    });
     $('b').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('i').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        //$('*').css( 'cursor', 'default' );
    });
     $('i').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('li').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
    });
     $('li').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('span').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
    });
     $('span').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('a').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
    });
     $('a').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
          
})();
