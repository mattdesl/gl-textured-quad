# gl-textured-quad

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Quickly draw a textured quad to the screen. Inherits from [gl-quad](https://www.npmjs.org/package/gl-quad).

```js
var baboon = require('baboon-image')

var gl = require('webgl-context')({
    width: baboon.shape[0],
    height: baboon.shape[1]
})

require('domready')(function() {
	//get a gl texture
    var tex = require('gl-texture2d')(gl, baboon)

    //create a textured gl quad
    var quad = require('gl-textured-quad')(gl)
    
    //draw with color
    var rgba = [ 1, 0, 0, 1 ]
    quad.draw(tex, rgba)

    //place canvas on DOM
    document.body.appendChild(gl.canvas)
})
```

## Usage

[![NPM](https://nodei.co/npm/gl-textured-quad.png)](https://nodei.co/npm/gl-textured-quad/)

## methods

### ```var quad = createTexQuad(gl [, options])```

Creates a new textured quad with optional settings:

- `shader`: specify a shader to use when rendering. If not specified, a default shader will be constructed that multiplies the texture color by a uniform color.

### ```quad.draw(texture [, colors])```

Draws the quad with the given texture and optional color multiplier. 
If no color is specified, it defaults to white (i.e. no tint). Otherwise it is assumed to be a 4-component float array that can be passed to the shader's `color` uniform.

If texture is not specified, none will be bound before drawing the quad. (Assumed to be already bound)


### ```quad.dispose()```

Disposes the textured quad and the `defaultShader`, if it exists.

**NOTE:** If no shader was specified during creation, then the default shader will be destroyed along with this quad. If you *did* specify a shader at creation time, you will need to dispose it yourself.

## members

### ```quad.shader```

The current shader for this textured quad. If no shader was provided in the constructor, a default shader will be used here. 

If you specified a shader in the constructor or change this property, you are responsible for disposing of it manually.

### ```quad.defaultShader```

The default shader, or undefined. This is undefined if you specified your own shader in the constructor. 

### ```gl-quad```

This class also receives the members from [gl-quad](https://www.npmjs.org/package/gl-quad).

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/gl-textured-quad/blob/master/LICENSE.md) for details.
