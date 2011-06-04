// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

( function( $ )
{ 
  $.fn.slides = function( )
  {
    var slide = '<div class="slide"></div>';
    var title = '<div class="title"></div>';
    var point = '<div class="point"></div>';
    
    
    var pointer = $( 'h1' );

    while( pointer.length )
    {
      group = pointer.nextUntil( 'h2' ).andSelf( );
      
      pointer = group.last( ).next( );
      
      group.wrapAll( slide );
    }
    
    $( 'h1, h2' ).addClass( 'title' );
    
    $( 'p, li' ).addClass( 'point' );
    
    console.log( $( this ).html( ) );
    
  };
  
} )( jQuery );

$( function( $ )
{
  $( '.talk' ).slides( );
} );