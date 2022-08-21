
import React, { useEffect } from 'react';
import * as THREE from 'three';

import { Layout } from '../components/layouts/layout'
import { FBXLoader } from '/utils/three/jsm/loaders/FBXLoader.js'
import { OrbitControls } from '/utils/three/jsm/controls/OrbitControls.js';


export default function Home() {
  useEffect(() => {
    let camera, scene, renderer, character_container, controls;
    const clock = new THREE.Clock();
    let mixer;
    init();
    animate();
    // --------------------
    function init() {
      character_container = document.getElementById('character_div');
      let container_height = character_container.clientHeight;
      let container_width = character_container.clientWidth;

      camera = new THREE.PerspectiveCamera(45, container_width / container_height, 1, 2000);
      camera.position.set(0, 100, 300);

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
      hemiLight.position.set(100, 200, 0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff);
      dirLight.position.set(100, 200, 100);
      scene.add(dirLight);

      const loader = new FBXLoader();
      loader.load('/assets/three_models/Twerking_Rick.fbx', function (object) {
        mixer = new THREE.AnimationMixer(object);
        const action = mixer.clipAction(object.animations[0]);
        action.play();
        object.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        scene.add(object);
      });

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container_width, container_height);
      renderer.setClearColor(0x000000, 0);
      // Somehow this runs twice on the first render.
      if (character_container.childElementCount === 0) {
        character_container.appendChild(renderer.domElement);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.screenSpacePanning = true;
        controls.minDistance = 200;
        controls.maxDistance = 400;
        controls.target.set(0, 100, 0);
        controls.update();
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    }
  }, []);

  return (
    <Layout>
      <main className="relative h-screen w-screen bg-slate-900">
        <div id="character_div" className="absolute h-1/2 aspect-square bottom-12 right-0 bg-slate-300 rounded-full" />
      </main>
    </Layout>
  )
}




