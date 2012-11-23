var splitter = require( ".." );

describe( "splitter", function() {
    
    it( "should flow basic arguments", function() {
        
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
        
        expect( f( "foo", {}, [] ) ).toBe( "first" );
        expect( f( "foo" ) ).toBe( "second" );
        expect( f() ).toBe( "other" );
        
    });
    
});
