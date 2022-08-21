import React, { useEffect } from 'react';

import * as THREE from 'three';
import { FBXLoader } from '/utils/three/jsm/loaders/FBXLoader.js'


export default function Character() {
    useEffect(() => {
        let camera, scene, renderer;
        const clock = new THREE.Clock();
        let mixer;

        init();
        animate();

        // --------------------
        function init() {
            const character_container = document.getElementById('character_div');
            let container_height = character_container.clientHeight;
            let container_width = character_container.clientWidth;

            camera = new THREE.PerspectiveCamera(45, container_width / container_height, 1, 2000);
            camera.position.set(100, 200, 300);

            scene = new THREE.Scene();
            scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

            const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
            hemiLight.position.set(0, 200, 0);
            scene.add(hemiLight);

            const dirLight = new THREE.DirectionalLight(0xffffff);
            dirLight.position.set(0, 200, 100);
            scene.add(dirLight);

            const loader = new FBXLoader();
            loader.load('/assets/three_models/Samba Dancing.fbx', function (object) {
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
            renderer.setSize(container_height, container_width);
            renderer.setClearColor(0x000000, 0);
            character_container.appendChild(renderer.domElement);
        }

        function animate() {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);
            renderer.render(scene, camera);
        }
    });
    return (
        <div className="w-screen h-full">
            <div id="character_div" className="bg-slate-900">
            </div>
        </div>
    )
}