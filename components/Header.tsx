"use client"
import {Button} from "@nextui-org/react";
import {SearchIcon} from "@nextui-org/shared-icons";
import { RiShoppingCart2Line } from "react-icons/ri";
import {IoMdMenu} from "react-icons/io";
import {useState} from "react";
import MenuModal from "@/components/MenuModal";
import Link from "next/link";


export default function Header() {
    const [showModal, setShowModal] = useState(false);

   const handlesetShowModal = ()=>{
        setShowModal(true)
    }

    return (<div className=" w-full bg-white border-b">
            <div className="bg-[#a67c52] text-white text-sm py-2 px-4 flex justify-center">
                <span>Welcome to our online store!</span>
            </div>
            <div className="lg:w-[1200px] w-full m-auto bg-white lg:py-8 py-4 lg:px-0 px-2 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-4 cursor:pointer">
                    <span className="lg:text-2xl text-lg font-bold">Superbfragrance</span>
                </Link>
                <div className="hidden lg:flex items-center">
                    <input type="text" placeholder="Search here"
                           className="border rounded-l-full px-4 py-2 w-72 outline-none"/>
                    <Button className="bg-[#a67c52] text-white  rounded-r-full">
                        <SearchIcon className="h-5 w-5"/>
                    </Button>
                </div>
                <div className="flex items-center space-x-2">
                    <Button isIconOnly className="text-gray-600 rounded-full bg-gray-200">
                        <RiShoppingCart2Line className="lg:h-5 lg:w-5"/>
                    </Button>
                    <Button isIconOnly onClick={handlesetShowModal} className="lg:hidden flex text-gray-600 px-0  bg-gray-200">
                        <IoMdMenu className="w-6 h-8" />
                    </Button>
                </div>
            </div>
            <MenuModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}