import { motion } from 'framer-motion';
import {Button} from "@nextui-org/react";

export default  function MenuModal ({showModal,setShowModal}){
    const modalVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: '100vw', opacity: 0 },
    };

    return (
        <motion.div
            initial="closed"
            animate={showModal ? "open" : "closed"}
            variants={modalVariants}
            className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-start items-center"
        >
            <motion.div className="absolute p-4 rounded-lg shadow-md overflow-y-auto bg-white w-[60vw] h-full">
                <div className="border-b border-gray-400 py-4 text-center">MENU</div>
                <div className="py-4 flex flex-col gap-y-4">
                    <Button className="bg-transparent">Acceuil1</Button>
                    <Button className="bg-transparent">Acceuil2</Button>
                </div>

                <button type="button" onClick={() => setShowModal(false)} className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </motion.div>
        </motion.div>
    );


}