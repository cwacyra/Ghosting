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
         $('i').click(false);
        //$('*').css( 'cursor', 'default' );
    });
     $('i').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('li').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
         $('li').click(false);
    });
     $('li').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('span').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
         $('span').click(false);
    });
     $('span').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('a').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('a').click(false);
    });
     $('a').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('style-scope ytd-watch').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('style-scope ytd-watch').click(false);
    });
     $('style-scope ytd-watch').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('input').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('input').click(false);
    });
     $('input').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
     $('header').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
         $('header').click(false);
    });
     $('header').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
     $('mainContainer').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
    });
     $('mainContainer').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
     $('sc-button-like sc-button sc-button-small sc-button-icon sc-button-lightfg sc-button-nostyle sc-button-selected').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('sc-button-like sc-button sc-button-small sc-button-icon sc-button-lightfg sc-button-nostyle sc-button-selected').click(false);  
    });
     $('sc-button-like sc-button sc-button-small sc-button-icon sc-button-lightfg sc-button-nostyle sc-button-selected').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    $('href').mouseenter(function(){
        $(this).animate({opacity: 0}, 1500);
        $('*').css( 'cursor', 'default' );
        $('href').click(false);  
    });
     $('href').mouseleave(function(){
        var ani = $(this); 
        setTimeout(function()
        {ani.animate({opacity: 1}, 1500);},10000);
    });
    
    
    
    
          
})();
