import React, { useEffect } from 'react';

import * as THREE from 'three';

import { GLTFLoader } from '../../utils/three/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '../../utils/three/jsm/controls/OrbitControls.js';


export function Gufetto({ className }) {

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
                character_container = document.getElementById('gufetto_div');
                container_height = character_container.clientHeight;
                container_width = character_container.clientWidth;
            }

            function initCamera() {
                camera = new THREE.PerspectiveCamera();
                camera.position.set(10, 4, 20);

                scene = new THREE.Scene();
                scene.add(camera);

                const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
                scene.add(hemiLight);


            }

            function initRenderer() {
                const loader = new GLTFLoader();
                loader.load(`/assets/three_models/gufetto/scene.gltf`,
                    (gltf) => {
                        mixer = new THREE.AnimationMixer(gltf.scene)
                        const action = mixer.clipAction(gltf.animations[0])
                        scene.add(gltf.scene)
                        action.play();

                    }, undefined, function (error) {
                        console.error(error);
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
                    controls.minDistance = 180;
                    controls.maxDistance = 250;
                    controls.target.set(-20, 0, 0);
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
            let container_height_lc = document.getElementById('gufetto_div').clientHeight;
            let container_width_lc = document.getElementById('gufetto_div').clientWidth;
            camera.aspect = container_width_lc / container_height_lc;
            camera.updateProjectionMatrix();
            renderer.setSize(container_width_lc, container_height_lc);
        }
    }, []);

    return (
        <div id="gufetto_div" className={className} />

    )
}