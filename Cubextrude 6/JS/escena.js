const scene = new THREE.Scene();

const textura = new THREE.TextureLoader();
const matcap = textura.load('../img/1-Metal-450-334.jpg')

scene.background = new THREE.Color(0xeeeeee)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add(line);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 10 );
scene.add( directionalLight );

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.0050;
    mesh.rotation.y += 0.0050;
    mesh.rotation.z += 0.0050;
    line.rotation.x += 0.0050;
    line.rotation.y += 0.0050;
    line.rotation.z += 0.0050;
    renderer.render(scene, camera);
}
animate();