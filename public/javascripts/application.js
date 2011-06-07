// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

/**
 * slideshow verbs
 */
( function( $ )
{
  $.verbs.separates = function( )
  {
    /*
      TODO can we break this out a little more? or is this as close as we get to simple?
    */
    var pointer = $( 'h1' );

    while( pointer.length )
    {
      group = pointer.nextUntil( 'h2' ).andSelf( );
      
      pointer = group.last( ).next( );
      
      group.wrapAll( '<div class="slide"/>' );
    }
    
    $( 'h1, h2' ).addClass( 'title' );
    
    $( 'p' ).addClass( 'point' );
  };
  
  $.verbs.hides = function( object )
  {
    $( object || this ).hide( );
  };
  
  $.verbs.shows = function( object )
  {
    $( object || this ).fadeIn( );
  };
  
  $.verbs.activates = function( object )
  {
    $( object || this ).addClass( 'active' );
  };
  
  $.verbs.advances = function( slide )
  {
    /*
      TODO this is not a very DRY verb, refactor!
    */
    $( slide, this ).removeClass( 'active' ).fadeOut( function( )
    {
      $( this ).next( ).addClass( 'active' ).fadeIn( );
    } );
  };
  
  $.verbs.rewinds = function( slide )
  {
    /*
      TODO this is not a very DRY verb, refactor!
    */
    $( slide, this ).removeClass( 'active' ).fadeOut( function( )
    {
      $( this ).prev( ).addClass( 'active' ).fadeIn( );
    } );
  };
  
} )( jQuery );

/**
 * slideshow plugin
 */
( function( $ )
{
  $.fn.slideshow = function( )
  {
    return $( this ).each( function( )
    {
      var key = {
        left  : function( event ){ return event.which === 37; },
        right : function( event ){ return event.which === 39; }
      };

      var not = {
        first : function( event ){ return false === $( '.slide.active' ).is( '.slide:first-child' ); },
        last  : function( event ){ return false === $( '.slide.active' ).is( '.slide:last-child' ); }
      };

      $( this ).on( 'ready', document ).separates( );
      $( this ).on( 'ready', document ).hides( '.slide' );
      $( this ).on( 'ready', document ).shows( '.slide:first-child' );
      $( this ).on( 'ready', document ).activates( '.slide:first-child' );
      $( this ).on( 'keydown', document ).advances( '.slide.active' ).when( key.right ).and( not.last );
      $( this ).on( 'keydown', document ).rewinds( '.slide.active' ).when( key.left ).and( not.first );
      
    } );
  };
} )( jQuery );

/**
 * application-wide scripts
 */
$( function( $ )
{
} );