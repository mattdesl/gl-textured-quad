var glslify = require('glslify')
var Quad = require('gl-quad')

var defaultShader = glslify({
    vertex: './vert.glsl',
    fragment: './frag.glsl'
})

var DEFAULT_COLOR = [1, 1, 1, 1]

function QuadTex(gl, options) {
    if (!(this instanceof QuadTex))
        return new QuadTex(gl, options)
    Quad.call(this, gl)

    options = options||{}

    var shader = options.shader
    
    if (!shader) 
        this.defaultShader = defaultShader(gl)
    this.shader = shader || this.defaultShader
}

QuadTex.prototype = Object.create(Quad.prototype)

QuadTex.prototype.draw = function(tex, color) {
    this.shader.bind()

    var uTypes = this.shader.types.uniforms
    if (uTypes.color)
        this.shader.uniforms.color = color || DEFAULT_COLOR
    if (uTypes.texture)
        this.shader.uniforms.texture = 0

    if (tex)
        tex.bind()

    Quad.prototype.draw.call(this, this.shader)
}

QuadTex.prototype.dispose = function() {
    if (this.defaultShader) {
        this.defaultShader.dispose()
        this.defaultShader = undefined
    }
    Quad.prototype.dispose.call(this)
}

module.exports = QuadTex