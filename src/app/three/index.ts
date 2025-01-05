import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { getBasePath } from "../utils/getBasePath";

export function createBg() {
  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0f2b);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(5, 1, 5);

  // Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // Geometry
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 1800;
  const positionArray = new Float32Array(count * 3);
  const colorArray = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 15;
    colorArray[i] = Math.random();
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positionArray, 3)
  );

  // Material
  const particlesTexture = new THREE.TextureLoader().load(
    `${getBasePath()}/assets/images/star.png`
  );
  const pointMaterial = new THREE.PointsMaterial({
    size: 0.02,
    sizeAttenuation: true,
    transparent: true,
    alphaMap: particlesTexture,
    depthWrite: false,
  });

  // Mesh
  const particles = new THREE.Points(particlesGeometry, pointMaterial);
  scene.add(particles);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", function () {
    renderer.render(scene, camera);
  });
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.enablePan = false;

  // Animation
  const animate = () => {
    controls.update();

    particlesGeometry.rotateX(0.001);
    particlesGeometry.rotateY(0.001);
    particlesGeometry.rotateZ(0.001);
    particlesGeometry.attributes.position.needsUpdate = true;

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
