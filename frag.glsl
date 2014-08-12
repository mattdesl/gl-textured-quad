#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
uniform vec4 color;
uniform sampler2D texture;

void main() {
	gl_FragColor = texture2D(texture, vUv) * color;
}