const scene = new THREE.Scene();

const textura = new THREE.TextureLoader();
const matcap = textura.load('../images/luna.jpg')

var loader = new THREE.TextureLoader();
loader.load('images/BlackS.jpg', function(texture){
	scene.background = texture;
});

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

const geometry = new THREE.SphereGeometry(15,10,10);
const material = new THREE.MeshMatcapMaterial()
material.matcap = matcap;
material.flatShading = true;
const sphere  = new THREE.Mesh(geometry, material);
scene.add (sphere);

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xf59042 } ) );
scene.add(line);

camera.position.x = -1;
camera.position.y = -16;
camera.position.z = 100;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.0050;
    sphere.rotation.y += 0.0050;
    sphere.rotation.z += 0.0050;
    line.rotation.x += 0.0050;
    line.rotation.y += 0.0050;
    line.rotation.z += 0.0050;
    renderer.render(scene, camera);
}
animate();