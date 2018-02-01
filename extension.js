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
        {ani.animate({opacity: 1}, 1500);},30000);//delay for p to return
    });
    
    $('b').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        //$('*').css( 'cursor', 'default' );
    });
     $('b').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
    $('i').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
         $('i').click(false);
        //$('*').css( 'cursor', 'default' );
    });
     $('i').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
    $('li').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
         $('li').click(false);
    });
     $('li').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
    $('span').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
         $('span').click(false);
    });
     $('span').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
    $('a').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('a').click(false);
    });
     $('a').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
    $('style-scope ytd-watch').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('style-scope ytd-watch').click(false);
    });
     $('style-scope ytd-watch').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
    $('input').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('input').click(false);
    });
     $('input').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
     $('header').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
         $('header').click(false);
    });
     $('header').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
     $('mainContainer').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
    });
     $('mainContainer').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
     $('button').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('button').click(false);  
    });
     $('button').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
    $('href').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('href').click(false);  
    });
     $('href').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},30000);
    });
    
    
    
    
          
})();
