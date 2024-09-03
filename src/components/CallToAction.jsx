import React from 'react';
const CallToAction = () => {
    return (
        <section className="h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden text-white">
            <div className="relative max-w-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                    Innovation Meets Excellence
                </h2>
                <p className="text-lg font-light lg:text-xl mb-4">
                    Pioneering web solutions that turn your vision into reality.
                </p>
                <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10 py-3 rounded-full font-medium text-lg transform transition-transform hover:scale-110">
                    Discover the Future with us
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
