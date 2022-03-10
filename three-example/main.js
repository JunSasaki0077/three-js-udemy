import * as THREE from "three";

let scene, camera, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer = new THREE.WebGLRenderer({ alpha: true });
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// ジオメトリを作成
let ballGeometry = new THREE.SphereGeometry(100, 64, 32);

// マテリアルを作成
let ballMaterial = new THREE.MeshPhysicalMaterial();
