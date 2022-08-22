import React, { useEffect } from 'react';

import * as THREE from 'three';

import { FBXLoader } from '/utils/three/jsm/loaders/FBXLoader.js'
import { OrbitControls } from '/utils/three/jsm/controls/OrbitControls.js';


export function Rick({ className }) {
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
                character_container = document.getElementById('rick_div');
                container_height = character_container.clientHeight;
                container_width = character_container.clientWidth;
            }

            function initCamera() {
                camera = new THREE.PerspectiveCamera(45, container_width / container_height, 1, 2000);
                camera.position.set(0, 100, 300);

                scene = new THREE.Scene();

                const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
                scene.add(hemiLight);

                const dirLight = new THREE.DirectionalLight(0xffffff, 1);
                dirLight.position.set(0, 1000, 1000);
                scene.add(dirLight);


                const spotLight = new THREE.SpotLight(0xffffff);
                spotLight.position.set(0, 1000, 1000);
                scene.add(spotLight);

                const pointLight = new THREE.PointLight(0xffffff, 1, 0);
                pointLight.position.set(0, 1000, 1000);
                scene.add(pointLight);

            }

            function initRenderer() {
                const loader = new FBXLoader();
                loader.load(`/assets/three_models/Twerking_Rick.fbx`, function (object) {
                    mixer = new THREE.AnimationMixer(object);
                    const action = mixer.clipAction(object.animations[1]);
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
                    controls.target.set(0, 100, -30);
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
            let container_height_lc = document.getElementById('rick_div').clientHeight;
            let container_width_lc = document.getElementById('rick_div').clientWidth;
            camera.aspect = container_width_lc / container_height_lc;
            camera.updateProjectionMatrix();
            renderer.setSize(container_width_lc, container_height_lc);
        }
    }, []);

    return (
        <div id="rick_div" className={className} />

    )
}