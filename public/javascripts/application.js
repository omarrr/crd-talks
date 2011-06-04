// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

( function( $ )
{ 
  $.fn.slug = function( )
  {
    return $( 'h1, h2', this ).text( ).toLowerCase( ).replace( /[^\w]+/g, '-' ).replace( /^-|-$/g, '' );
  };
  
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
    
    $( 'p' ).addClass( 'point' );
    
    console.log( $( this ).html( ) );
    
    $( '.slide' ).each( function( )
    {
      $( '.point', this ).hide( );
      
      $( this ).hide( );
    } );
    
    var routes = [ ];
    
    $( '.slide' ).each( function( )
    {
      var slide = this;
      
      var slug = $( this ).slug( );
      
      routes.push( 
        {
          slug  : slug,
          slide : slide,
          point : null
        } );
      
      $( this ).attr( 'id', slug );
      
      $( '.point', this ).each( function( index )
      {
        routes.push(
          {
            slug  : slug + '/' + index,
            slide : slide,
            point : this
          } );
      } );
      
    } );
    
    /*
      TODO refactor this slideshow script. it's a little buggy but
      it works for now
    */
    var index = 0;
    var route;
    
    $( window ).keydown( function( event )
    {
      if( event.which === 39 )
      {
        if( index < routes.length )
        {
          route = routes[ index++ ];
          
          if( route.point )
          {
            $( route.point ).fadeIn( );
          }
          else
          {
            if( $( '.slide:visible' ).length )
            {
              $( '.slide:visible' ).fadeOut( function( )
              {
                $( route.slide ).fadeIn( );
              } );
            }
            else
            {
              $( route.slide ).fadeIn( );
            }
          }
        }
      }
      
      if( event.which === 37 )
      {
        if( index > 0 )
        {
          if( route.point )
          {
            $( route.point ).fadeOut( );
            
            route = routes[ --index ];
          }
          else
          {
            $( route.slide ).fadeOut( function( )
            {
              route = routes[ --index ];
              
              $( route.slide ).fadeIn( );
              
            } );
          }
          
          
        }
      }
    } );
    
    
    
  };
  
} )( jQuery );

$( function( $ )
{
  $( '.talk' ).slides( );
} );