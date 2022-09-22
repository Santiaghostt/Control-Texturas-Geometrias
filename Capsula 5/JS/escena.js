const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfc9003);

const textura = new THREE.TextureLoader();
const matcap = textura.load('../img/idk.jpg');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x9c6109 } ) );
scene.add(line);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    capsule.rotation.x += 0.0050;
    capsule.rotation.y += 0.0050;
    capsule.rotation.z += 0.0050;
    line.rotation.x += 0.0050;
    line.rotation.y += 0.0050;
    line.rotation.z += 0.0050;
    renderer.render(scene, camera);
}
animate();