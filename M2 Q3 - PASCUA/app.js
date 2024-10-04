const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(3, 1.5, 0.2); 
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

camera.position.z = 5;

let speedX = 0.05;
let speedY = 0.03;
let bounceCount = 0;

function changeColor() {
    material.color.set(Math.random() * 0xffffff);
}

function animate() {
    requestAnimationFrame(animate);

    box.position.x += speedX;
    box.position.y += speedY;

    box.rotation.x = 0;
    box.rotation.y = 0;
    box.rotation.z = 0;

    if (box.position.x > 7 || box.position.x < -7) {
        speedX = -speedX; 
        changeColor();    
        bounceCount++;
    }

    if (box.position.y > 3 || box.position.y < -3) {
        speedY = -speedY; 
        changeColor();
        bounceCount++;
    }

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
