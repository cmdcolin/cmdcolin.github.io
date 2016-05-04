define( [   
            'dojo/_base/declare',
            'dojo/_base/array',
            'dojo/_base/lang',
            'WebApollo/View/Track/WebApolloCanvasFeatures',
            'JBrowse/Util'
        ],
        function(
            declare,
            array,
            lang,
            CanvasFeatures,
            Util
        ) {

return declare( CanvasFeatures,
{
    _defaultConfig: function() {
        return Util.deepUpdate(
            lang.clone( this.inherited(arguments) ),
            {
                glyph: "MyVariantViewer/View/FeatureGlyph/Diamond",
                createNewAnnotations: false
            });
    }
});
});
