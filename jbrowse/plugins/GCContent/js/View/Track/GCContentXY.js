define( [
            'dojo/_base/declare',
            'dojo/_base/array',
            'dojo/_base/lang',
            'GCContent/Store/SeqFeature/GCContent',
            'GCContent/View/Dialog/WindowSizeDialog',
            'JBrowse/View/Track/Wiggle/XYPlot',
            'JBrowse/Util'
        ],
        function(
            declare,
            array,
            lang,
            GCContent,
            WindowSize,
            WiggleXY,
            Util
        ) {

return declare( WiggleXY,
{
    constructor: function() {
        this.store = new GCContent({
            store: this.store,
            browser: this.browser,
            windowSize: this.config.windowSize,
            windowDelta: this.config.windowDelta,
            gcMode: this.config.gcMode
        });
    },
    _defaultConfig: function() {
        return Util.deepUpdate(
            lang.clone( this.inherited(arguments) ),
            {
                min_score: 0,
                max_score: 1,
                maxZoom: 0.001,
                windowSize: 100,
                windowDelta: 10,
                gcMode: 'content',
                bicolor_pivot: 0.5,
                scoreType: 'avgScore',
                logScaleOption: false
            });
    },
    _trackMenuOptions: function() {
        var track = this;
        var options = this.inherited(arguments);
        options.push({
            label: 'GC Track Options',
            onClick: function(event) {
                new WindowSize({
                    setCallback: function( ws, wd, mode ) {
                        track.config.windowSize = ws;
                        track.config.windowDelta = wd;
                        track.config.gcMode = mode;
                        if(mode === 'skew'){
                            track.config.min_score = -1;
                            track.config.bicolor_pivot = 0;
                        }else{
                            track.config.min_score = 0;
                            track.config.bicolor_pivot = 0.5;
                        }
                        track.browser.publish('/jbrowse/v1/c/tracks/replace', [track.config]);
                    },
                    windowSize: track.config.windowSize,
                    windowDelta: track.config.windowDelta,
                    gcMode: track.config.gcMode
                }).show();
            }
        });
        return options;
    },


    fillBlock: function( args ) {
        var block = args.block;
        var blockIndex = args.blockIndex;
        var scale = args.scale;
        var blur = dojo.create(
            'div',
            { className: 'sequence_blur',
              innerHTML: '<span class="loading">Loading</span>'
            }, block.domNode );

        this.heightUpdate( blur.offsetHeight+2*blur.offsetTop, blockIndex );

        // if we are zoomed in far enough to draw bases, then draw them
        if ( scale >= this.config.maxZoom ) {
            this.inherited(arguments);
        }
        // otherwise, just draw a sort of line (possibly dotted) that
        // suggests there are bases there if you zoom in far enough
        else {
            blur.innerHTML = '<span class="zoom">Zoom in to see GC content</span>';
            args.finishCallback();
        }
    }
});
});
