import * as THREE from "three";
import { Light } from "three";

let scene, camera, renderer, pointLight;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, +500);

renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

// ジオメトリ(骨格)を作成
let ballGeometry = new THREE.SphereGeometry(100, 64, 32);
// マテリアル（色）を作成
let ballMaterial = new THREE.MeshPhysicalMaterial();

// メッシュ化（ジオメトリ＋マテリアル）
let ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ballMesh);

// 平行光源を追加
let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// ポイント光源を追加
pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(-200, -200, -200);
scene.add(pointLight);

// ポイント光源がどこにあるか特定する
let pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
scene.add(pointLightHelper);

// ポイント光源を球の周りに巡回

function animate() {
  pointLight.position.set(
    200 * Math.sin(Date.now() / 500),
    200 * Math.sin(Date.now() / 1000),
    200 * Math.cos(Date.now() / 500)
  );
  // レンダリング
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
