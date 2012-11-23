splitter
========

Exploring a readable function overloading approach.

Example
-------

    function f() {
            var value;
            
            splitter( arguments )
                .when( "string", "object", "array", function( s, o, a ) {
                    value = "first";
                })
                .when( "string", function( s ) {
                    value = "second";
                })
                .otherwise( function() {
                    value = "other";
                });
                
            return value;
        }
        
        f( "foo", {}, [] );     // first
        f( "foo" );             // second
        f();                    // other
