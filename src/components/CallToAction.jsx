import React from 'react';
import { Canvas, events } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const CallToAction = () => {
    return (
        <section className="relative h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden text-white">
            {/* 3D Canvas with Dynamic Sphere */}
            <Canvas className="h-full">
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 10, 5]} intensity={1} />
                <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
                    <MeshDistortMaterial
                        color="#00A8E8"
                        attach="material"
                        distort={0.3} // distortion level
                        speed={2} // distortion speed
                    />
                </Sphere>
                <OrbitControls enableZoom={false} />
            </Canvas>

            {/* Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
                    Innovation Meets Excellence
                </h2>
                <p className="text-lg lg:text-xl mb-10">
                    Pioneering web solutions that turn your vision into reality.
                </p>
                <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10 py-3 rounded-full font-medium text-lg transform transition-transform hover:scale-110">
                    Discover the Future with us
                </button>
            </div>

            {/* Parallax Floating Elements */}
            <div className="absolute bottom-10 left-10">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full filter blur-xl opacity-50"></div>
            </div>
            <div className="absolute top-20 right-10">
                <div className="w-28 h-28 bg-gradient-to-r from-pink-500 to-red-500 rounded-full filter blur-xl opacity-50"></div>
            </div>
        </section>
    );
};

export default CallToAction;
