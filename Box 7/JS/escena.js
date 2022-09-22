const scene = new THREE.Scene();

const textura = new THREE.TextureLoader();
const matcap = textura.load('../img/Textura.jpg');

var loader = new THREE.TextureLoader();
loader.load('../img/Kamehouse.jpg', function(texture){
    scene.background = texture;
})

scene.background = new THREE.Color(0x392cc7)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add(line);

const geometry2 = new THREE.SphereGeometry( 1, 16, 16 );
const material2 = new THREE.MeshNormalMaterial( { color: 0xffff00 } );
material2.flatShading = true;
const sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );

const edges2 = new THREE.EdgesGeometry( geometry2 );
const line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add(line2);

const geometry3 = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material3 = new THREE.MeshStandardMaterial( {color: 0x00ff00} );
material3.metalness = 0.5;
material3.roughness = 1;
const capsule = new THREE.Mesh( geometry3, material3 );
scene.add( capsule );

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

const edges3 = new THREE.EdgesGeometry( geometry3 );
const line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add(line3);

const geometry4 = new THREE.TorusGeometry( 0.7, 0.3, 16, 100 );
const material4 = new THREE.MeshBasicMaterial( { color: 0x990000 } );
const torus = new THREE.Mesh( geometry4, material4 );
scene.add( torus );

const edges4 = new THREE.EdgesGeometry( geometry4 );
const line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add(line4);

 const dControls = new THREE.DragControls([cube, sphere, capsule, torus], camera, renderer.domElement);
dControls.deactivate();
dControls.activate();

dControls.addEventListener("hoveron", function(event){
event.object.material.wireframe = true;
event.object.scale.y *=4;
});
dControls.addEventListener("hoveroff", function(event){
    event.object.material.wireframe = false;
    event.object.scale.y /=4;
});

const flycontrols = new THREE.FlyControls( camera, renderer.domElement);
flycontrols.movementSpeed = 50;
flycontrols.rollSpeed = 0.01;
flycontrols.autoForward = false;
flycontrols.dragToLock = false;

/* var control = new THREE.OrbitControls (camera, renderer.domElement);
control.minDistance = 3;
control.maxDistance = 10; */

/* const PLControl = new THREE.PointerLockControls( camera, renderer.domElement);
document.getElementById('btnplay').onclick = () => {
    PLControl.lock()
};
 */
let objects = [cube, line, sphere, line2, capsule, line3, torus, line4];

const controls = new THREE.DragControls( objects, camera, renderer.domElement );

cube.position.x = 3;
cube.position.y = 3;
line.position.x = 3;
line.position.y = 3;

sphere.position.x = 3;
sphere.position.y = -3;
line2.position.x = 3;
line2.position.y = -3;

capsule.position.x = -3;
capsule.position.y = -3;
line3.position.x = -3;
line3.position.y = -3;

torus.position.x = -3;
torus.position.y =  3;
line4.position.x = -3;
line4.position.y = 3;

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 8;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.0050;
    cube.rotation.y += 0.0050;
    cube.rotation.z += 0.0050;
    sphere.rotation.x += 0.0050;
    sphere.rotation.y += 0.0050;
    sphere.rotation.z += 0.0050;
    capsule.rotation.x += 0.0050;
    capsule.rotation.y += 0.0050;
    capsule.rotation.z += 0.0050;
    torus.rotation.x += 0.0050;
    torus.rotation.y += 0.0050;
    torus.rotation.z += 0.0050;
    line.rotation.x += 0.0050;
    line.rotation.y += 0.0050;
    line.rotation.z += 0.0050;
    line2.rotation.x += 0.0050;
    line2.rotation.y += 0.0050;
    line2.rotation.z += 0.0050;
    line3.rotation.x += 0.0050;
    line3.rotation.y += 0.0050;
    line3.rotation.z += 0.0050;
    line4.rotation.x += 0.0050;
    line4.rotation.y += 0.0050;
    line4.rotation.z += 0.0050;
    flycontrols.update(0.5);
    renderer.render(scene, camera);
}   
animate();
