import {ButtonGroup, Button} from "@nextui-org/react";
import {GrHome} from "react-icons/gr";
import Link from "next/link";


export function NavBar({collections}){
    return(
        <div className="bg-secondary w-full lg:flex hidden">
            <div className="md:w-[1200px] m-auto flex gap-x-4 flex-row text-[10px] uppercase font-bold">
                <Link href="/" className="px-4 py-4 cursor-pointer text-white flex bg-primary justify-center items-center gap-x-2">
                    <GrHome size={15}/>
                    <div>Accueil</div>
                </Link>
                <div className="px-4 py-4 cursor-pointer">Collections</div>
                <div className="px-4 py-4 cursor-pointer">Contactez-nous</div>
            </div>
        </div>
    )
}