import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import saska from "../assets/SaskaLogoSquare.png";

const FloatingPhone = ({ submitForm }) => {
    return (
        <div
            style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-30deg) rotateX(15deg)",
            }}
            className="rounded-[24px] bg-gradient-to-tr from-sky-600 to-pink-600 p-1"
        >
            <motion.div
                initial={{
                    transform: "translateZ(8px) translateY(-2px)",
                }}
                animate={{
                    transform: "translateZ(32px) translateY(-8px)",
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    ease: "easeInOut",
                }}
                className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
            >
                <HeaderBar />
                <Screen submitForm={submitForm} />
            </motion.div>
        </div>
    );
};

const HeaderBar = () => {
    return (
        <>
            <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-800"></div>
            <div className="absolute right-3 top-2 z-10 flex gap-2">
                <FiWifi className="text-neutral-300" />
                <FiBatteryCharging className="text-neutral-300" />
            </div>
        </>
    );
};

const Screen = ({ submitForm }) => {
    return (
        <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-neutral-950">
            {/* Example logo from logoispum */}
            <img src={saska} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44" alt="" />

            <button
                onClick={submitForm}
                className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-lg tracking-widest font-bold text-black">
                Submit
            </button>
        </div>
    );
};

export default FloatingPhone;