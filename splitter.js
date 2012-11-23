var splitter = (function() {
    
    function factory( args ) {
        var types = typesof( args ),
            broken = false;
        
        function apply( fn ) {
            fn( args );
        }
        
        return {
            when: function when() {
                if ( broken ) return this;
                
                var args = Array.prototype.slice.call( arguments ),
                    fn = args.pop();
                
                if ( match( types, args ) ) {
                    broken = true;
                    
                    apply( fn );
                }
                
                return this;
            },
            otherwise: function otherwise( fn ) {
                if ( broken ) return this;
                
                apply( fn );
                
                return this;
            }
        }
    }
    
    function type( value ) {
        if ( value instanceof Array ) {
            return "array";
        }
        
        return typeof( value );
    }
    
    function typesof( args ) {
        var types = Array( args.length ),
            i;
        
        for ( i = 0; i < args.length; i++ ) {
            types[ i ] = type( args[ i ] );
        }
        
        return types;
    }
    
    function match( types, args ) {
        return types.join( "," ) === args.join( "," );
    }
    
    return factory;
    
})();

if ( typeof module !== "undefined" ) {
    module.exports = splitter;
}
