require({cache:{
'JBrowse/Plugin':function(){
define([
           'dojo/_base/declare',
           'JBrowse/Component'
       ],
       function( declare, Component ) {
return declare( Component,
{
    constructor: function( args ) {
        this.name = args.name;
        this.cssLoaded = args.cssLoaded;
        this._finalizeConfig( args.config );
    },

    _defaultConfig: function() {
        return {
            baseUrl: '/plugins/'+this.name
        };
    }
});
});
}}});
define("GWASViewer/main", [
    'dojo/_base/declare',
    'JBrowse/Plugin'
],
function(
   declare,
   JBrowsePlugin
) {
    return declare(JBrowsePlugin, {
        constructor: function(args) {
            var browser = args.browser;
            console.log('GWAS plugin starting');
            browser.registerTrackType({
                label: 'GWASViewer',
                type: 'GWASViewer/View/Track/VariantPlotter'
            });
        }
    });
});
