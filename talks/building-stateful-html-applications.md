Building Stateful HTML Applications
===================================

Teach people how to build a fully dynamic website with no page refreshes.

TODO
----

And some `inline` code too! Maybe some **strong** and *emphasized* text as well?

Here's the basic idea:

	$( 'a' ).click( function( )
	{
		$.get( $( this ).attr( 'href' ), function( response )
		{
			$( '#content' ).html( response );
		} );
		
		return false;
	} );