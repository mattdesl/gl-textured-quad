var baboon = require('baboon-image')
var gl = require('webgl-context')({
    width: baboon.shape[0],
    height: baboon.shape[1]
})

require('domready')(function() {
    var tex = require('gl-texture2d')(gl, baboon)
    var quad = require('../')(gl)
    
    var rgba = [ 1, 0, 0, 1 ]
    quad.draw(tex, rgba)

    document.body.appendChild(gl.canvas)
})
