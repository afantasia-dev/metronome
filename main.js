import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 10, 10, 10 );


const textureCube = new THREE.CubeTextureLoader()
	.setPath( 'textures/' )
	.load( [
				'mt.png',
				'mt.png',
				'mt.png',
				'mt.png',
				'mt.png',
				'mt.png'
			] );

var material = new THREE.MeshBasicMaterial( { color: 0x000000, envMap: textureCube } );
var material2 = new THREE.MeshBasicMaterial( { color: 0x8f8f8f, envMap: textureCube } );
var material3 = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );


var cube = new THREE.Mesh( geometry, material );


scene.add( cube );

camera.position.z = 8.5;




var x=0;
function cubeIluminator(){
	if (x%2==true) { 
	cube.material=material3
	} 
	else{
	cube.material=material2
	}
	x++
	console.log(x);
	return x

}


var BPM = parseInt(document.getElementById('BPM').value)

setInterval(cubeIluminator,60000/(BPM))



var counterx=0
var countery=0

function animate() {

	BPM = parseInt(document.getElementById('BPM').value)
	counterx += 0.01;
	countery += 0.01;
	cube.rotation.y = countery;
	cube.rotation.x = counterx;

	
	renderer.render( scene, camera );

}