const scene = new THREE.Scene();

scene.background = new THREE.Color(0x392cc7)

const textura = new THREE.TextureLoader();
const matcap = textura.load('../img/papel.jpg');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

const geometry = new THREE.PlaneGeometry( 10, 10);
const material = new THREE.MeshMatcapMaterial({side:THREE.DoubleSide});
material.matcap = matcap;
material.flatShading = true;
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add(line);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
/*     plane.rotation.x += 0.03; */
    plane.rotation.y += 0.03;
/*     plane.rotation.z += 0.03; */
/*     line.rotation.x += 0.03; */
    line.rotation.y += 0.03;
/*     line.rotation.z += 0.03; */
    renderer.render(scene, camera);
}
animate();