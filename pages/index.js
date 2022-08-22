import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

import { Layout } from '../components/layouts/layout'
import { FBXLoader } from '/utils/three/jsm/loaders/FBXLoader.js'
import { OrbitControls } from '/utils/three/jsm/controls/OrbitControls.js';


export default function Home() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    let camera, scene, renderer, character_container, controls, container_height, container_width;
    const clock = new THREE.Clock();
    let mixer;

    init();
    animate();

    function init() {

      initContainer();
      initCamera();
      initRenderer();

      function initContainer() {
        character_container = document.getElementById('morty_div');
        container_height = character_container.clientHeight;
        container_width = character_container.clientWidth;
      }

      function initCamera() {
        camera = new THREE.PerspectiveCamera(45, container_width / container_height, 1, 2000);
        camera.position.set(-1400, 0, 400);

        scene = new THREE.Scene();

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
        hemiLight.position.set(0, 1, 1);
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(0, 1, 1);
        scene.add(dirLight);


        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(0, 1, 1);
        scene.add(spotLight);

        const pointLight = new THREE.PointLight(0xffffff, 1, 0);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

      }

      function initRenderer() {
        const loader = new FBXLoader();
        loader.load('/assets/three_models/Falling_Morty.fbx', function (object) {
          mixer = new THREE.AnimationMixer(object);
          const action = mixer.clipAction(object.animations[0]);
          mixer.addEventListener('finished', function (e) {
            document.getElementById('morty_div').style.visibility = 'hidden'
          });
          action.setLoop(THREE.LoopOnce);
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

        // Not sure why this runs twice...
        if (character_container.childElementCount === 0) {
          character_container.appendChild(renderer.domElement);
          controls = new OrbitControls(camera, renderer.domElement);
          controls.screenSpacePanning = true;
          controls.minDistance = 200;
          controls.maxDistance = 400;
          controls.target.set(0, 220, 20);
          controls.update();
        }
        window.addEventListener('resize', onWindowResize);
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    }

    function onWindowResize() {
      let container_height_lc = document.getElementById('morty_div').clientHeight;
      let container_width_lc = document.getElementById('morty_div').clientWidth;
      camera.aspect = container_width_lc / container_height_lc;
      camera.updateProjectionMatrix();
      renderer.setSize(container_width_lc, container_height_lc);
    }
  }, []);

  return (
    <Layout>
      <main className="relative h-screen w-screen bg-slate-900">
        <div id="morty_div" className="absolute w-1/5 h-1/2 bottom-14 left-0 rounded-full" />
        <div id="rick_div" className="absolute w-1/3 h-1/2 bottom-14 right-0 rounded-full" />
        <div
          id="personal_info"
          className="absolute h-10 aspect-square content-center rounded-xl left-4 top-4"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <div className="absolute w-64 bg-slate-800 text-left rounded-xl left-10 top-10 py-4 px-4">
              Roboticist. <br />
              Rick and Morty fan. <br />
              Data scientist wannabe. <br />
              Web developer wannabe. <br />
            </div>
          )}
          <Image src="/icons/info.svg" layout="fill" />
        </div>
      </main>
    </Layout>
  )
}




