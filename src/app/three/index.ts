import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

export function createBg() {
  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(1, 1, 2);

  // Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // Geometry
  const boxGeometry = new THREE.BoxGeometry();
  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16);
  const dodecahedronGeometry = new THREE.DodecahedronGeometry();

  // Material
  const material = new THREE.MeshNormalMaterial({
    // wireframe: true,
  });

  // Mesh
  const box = new THREE.Mesh(boxGeometry, material);
  const sphere = new THREE.Mesh(sphereGeometry, material);
  const dodecahedron = new THREE.Mesh(dodecahedronGeometry, material);
  box.position.x = 3;
  dodecahedron.position.x = -3;
  scene.add(box, sphere, dodecahedron);

  // Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Animation
  const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  // Resize
  window.addEventListener("resize", onWindowResize);
  function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  animate();
}
