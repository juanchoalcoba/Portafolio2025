import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Define el tipo para la referencia del contenedor
type ContainerRef = HTMLDivElement | null;

const InteractiveSilverCube: React.FC = () => {
    const mountRef = useRef<ContainerRef>(null);
    const cubeRef = useRef<THREE.Mesh | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    // Variables para GSAP y Mouse tracking
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const tl = useRef(gsap.timeline({ paused: true })); // Timeline para rotación automática

    // --- 1. Inicialización de la Escena Three.js ---
    const initThree = useCallback(() => {
        if (!mountRef.current) return;

        // Limpiar la escena si ya existe (útil para React Dev Mode)
        if (rendererRef.current) {
            rendererRef.current.dispose();
            mountRef.current.innerHTML = ''; // Limpiar DOM
        }

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // SCENE
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // CAMERA
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 3;
        cameraRef.current = camera;

        // RENDERER
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Alpha=true para fondo transparente
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        
        // CUBE (Geometría y Material)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        
        // Material Plateado Brillante (MeshStandardMaterial)
        const material = new THREE.MeshStandardMaterial({
            color: 0x0a1a2b,
          // Color base gris/plata
            metalness: 1.0,           // Muy metálico (Brillo espejo)
            roughness: 0.1,           // Baja rugosidad (Muy pulido)
            wireframe: false,
        });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cubeRef.current = cube;
        
        // LUCES (Necesarias para ver el material MeshStandardMaterial)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz de ambiente suave
        scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0xffffff, 20); // Luz puntual brillante
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // --- GSAP: Rotación Automática ---
        // Crea una línea de tiempo para la rotación infinita
        tl.current = gsap.timeline({ repeat: -1, yoyo: false, paused: false });
        tl.current.to(cube.rotation, {
            duration: 15,
            x: Math.PI * 2,
            y: Math.PI * 2,
            ease: "none",
        }, 0);
        
    }, []);

    // --- 2. Animación (Bucle de Render) ---
    const animate = useCallback(() => {
        requestAnimationFrame(animate);

        const cube = cubeRef.current;
        const camera = cameraRef.current;
        const renderer = rendererRef.current;
        const scene = sceneRef.current;
        
        if (cube && camera && renderer && scene) {
            
            // --- GSAP: Interacción Parallax del Cubo ---
            // Mueve la posición del cubo para seguir el ratón (efecto Parallax suave)
            gsap.to(cube.rotation, {
                duration: 0.5,
                x: cube.rotation.x + (mouseY.current * 0.05), // Añade un ligero movimiento en X y Y
                y: cube.rotation.y + (mouseX.current * 0.05),
                ease: "power2.out"
            });
            
            // Renderizar la escena
            renderer.render(scene, camera);
        }
    }, []);

    // --- 3. Manejo de Eventos (Mouse, Resize) ---
    
    // Rastrea el movimiento del ratón
    const handleMouseMove = useCallback((event: MouseEvent) => {
        // Normalizar las coordenadas del ratón a un rango de -1 a 1
        mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    }, []);

    // Maneja el redimensionamiento de la ventana
    const handleResize = useCallback(() => {
        if (cameraRef.current && rendererRef.current && mountRef.current) {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            
            cameraRef.current.aspect = width / height;
            cameraRef.current.updateProjectionMatrix();
            
            rendererRef.current.setSize(width, height);
        }
    }, []);


    // --- 4. useEffect (Montaje/Desmontaje) ---
    useEffect(() => {
        initThree();
        animate();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Función de limpieza al desmontar el componente
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            
            tl.current.kill(); // Detener la línea de tiempo de GSAP
            rendererRef.current?.dispose();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            mountRef.current?.removeChild(rendererRef.current!.domElement);
        };
    }, [initThree, animate, handleMouseMove, handleResize]);


    // --- 5. Renderizado ---
    return (
        <div 
            ref={mountRef} 
            className="absolute top-0 left-0 w-full h-full z-0 pointer-events-auto"
        />
    );
};

export default InteractiveSilverCube;