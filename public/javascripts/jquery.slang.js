/**
 * jQuery slang - write what you mean, jquery style.
 */
( function( $ )
{
  
  $.lang = {
    
    VERSION : '0.0.1',
    
    reset : function( defaults )
    {
      // reset the verbs object
      $.verbs = { };
      
      // add some default verbs by default
      if( defaults !== false )
      {
        // calls the given block
        $.verbs.calls = function( block )
        {
          block.call( this );
        };

        // clicks the given selector
        $.verbs.clicks = function( object )
        {
          $( object ).click( );
        };
        
        // focuses the given selector
        $.verbs.focuses = function( object )
        {
          $( object || this ).focus( );
        };

        // blurs the given selector
        $.verbs.blurs = function( object )
        {
          $( object || this ).blur( );
        };
      }
    }
    
  };
  
  // an empty state for a condition - should always return true
  var State = function( )
  {
    this.evaluate = function( )
    {
      return true;
    };
  };
  
  // conditions are wrapped in this class to provide the #evaluate method
  var Condition = function( block )
  {
    this.evaluate = function( )
    {
      return block.apply( this, arguments );
    };
  };
  
  // logical conjunction - both arguments must evaluate to true
  var Conjunction = function( a, b )
  {
    this.evaluate = function( )
    {
      return a.evaluate.apply( this, arguments ) && b.evaluate.apply( this, arguments );
    };
  };
  
  // logical disjunction - one or both arguments must evaluate to true
  var Disjunction = function( a, b )
  {
    this.evaluate = function( )
    {
      return a.evaluate.apply( this, arguments ) || b.evaluate.apply( this, arguments );
    };
  };
  
  // logical negation - evaluates to the logical negative of the argument
  var Negation = function( a )
  {
    this.evaluate = function( )
    {
      return !a.evaluate.apply( this, arguments );
    };
  };
  
  // AND - returns a logical conjunction
  var AND = function( condition, state )
  {
    return new Conjunction( condition, state );
  };
  
  // OR - returns a logical disjunction
  var OR = function( condition, state )
  {
    return new Disjunction( condition, state );
  };
  
  // NAND - returns the negation of a logical conjunction
  var NAND = function( condition, state )
  {
    return new Negation( new Conjunction( condition, state ) );
  };
  
  // NOR - returns the negation of a logical disjunction
  var NOR = function( condition, state )
  {
    return new Negation( new Disjunction( condition, state ) );
  };
  
  /**
   * $.lang.Condition - the conditional builder
   */
  $.lang.Condition = function( )
  {
    // evaluate to true by default
    var state = new State( );
    
    // Defines a new set of conditions on this builder. Currently we only support
    // conditions up to two levels deep. Conditions start off by making an assertion,
    // either positive or negative, about the conditions given. This is done by using
    // the `when` and `unless` methods. After that, you are able to form a logical
    // conjunction or disjunction with the previous condition using `and` or `or`.
    this.define = function( )
    {
      return {
        when : function( condition )
        {
          state = new Condition( condition );
          
          return {
            and : function( condition )
            {
              state = new AND( new Condition( condition ), state );
            },
            or : function( condition )
            {
              state = new OR( new Condition( condition ), state );
            }
          };
        },
        unless : function( condition )
        {
          state = new Negation( new Condition( condition ) );
          
          return {
            and : function( condition )
            {
              state = new NAND( new Condition( condition ), new Negation( state ) );
            },
            or : function( condition )
            {
              state = new NOR( new Condition( condition ), new Negation( state ) );
            }
          };
        }
      };
    };
    
    // evaluates this condition
    this.evaluate = function( )
    {
      return state.evaluate.apply( this, arguments );
    };
  };
  
  /**
   * $.fn.on - the api for attaching events to verbs
   */
  $.fn.on = function( event, indirect )
  {
    var bind = function( subject, block )
    {
      return function( )
      {
        var conditions = new $.lang.Condition( );
        
        var args = $.makeArray( arguments );
        
        $( indirect || subject ).bind( event, function( )
        {
          if( conditions.evaluate.apply( $( subject ), arguments ) )
          {
            block.apply( $( subject ), args );
          }
        } );
        
        return conditions.define( );
      };
    };
    
    var action = { };
    
    for( var verb in $.verbs )
    {
      if( typeof $.verbs[ verb ] === 'function' )
      {
        action[ verb ] = bind( this, $.verbs[ verb ] );
      }
    }
    
    return action;
  };
  
  // reset by default
  $.lang.reset( );
  
} )( jQuery );