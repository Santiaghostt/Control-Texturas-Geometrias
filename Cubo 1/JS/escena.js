//escena
const scene = new THREE.Scene();
/* scene.background = new THREE.Color(0xE51A4C) */
const textura = new THREE.TextureLoader();
const matcap = textura.load('../Images/agua.jpg');

var loader = new THREE.TextureLoader();
loader.load('Images/FT36.jpg', function(texture){
	scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//75 es el fov
//el window.innerWidth window.innerHeigt manejan el tamaño maximo de la pantalla
// 0.1 es la lejania de la camara y 1000 la cercancia de la camara (con la que ve)

//renderizado: es exportar, optimizar, etc el archivo para que pueda ser visto en cualquier dispositivo
const renderer = new THREE.WebGLRenderer(); //webgl permite visualizar las modificaciones en la web
renderer.setSize ( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ) 

//BoxGeometry, Geometria de caja
const geometry = new THREE.BoxGeometry( 4, 4, 4 );
const material = new THREE.MeshMatcapMaterial(/* {color: 0x008080}  */);
material.matcap = matcap;
material.flatShading = true;
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );	

//Edge, bordes
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xFF8300 } ) );
scene.add(line);

camera.position.x = -2;
camera.position.y = -2;
camera.position.z = 27;

//animacion
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;
	line.rotation.x += 0.01;
	line.rotation.y += 0.01;
	line.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();


