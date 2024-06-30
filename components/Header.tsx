"use client";
import {
  Badge,
  Button,
  Divider,
  Input,
  ScrollShadow,
  useDisclosure,
} from "@nextui-org/react";
import { SearchIcon } from "@nextui-org/shared-icons";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import {useContext, useState, Suspense} from "react";
import MenuModal from "@/components/MenuModal";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { CardItemsContext } from "./CardItemsContext";
import CartModal from "./CartModal";
import {urlForImage} from "@/app/sanity/client";


export default function Header({ websiteSettings }:{websiteSettings: any }) {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderWrapper websiteSettings={websiteSettings} />
      </Suspense>
  );
}

function HeaderWrapper({ websiteSettings }: { websiteSettings: any }) {
  const searchParams = useSearchParams();

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { cartItems, handleRemoveFromCart } = useContext<any>(CardItemsContext);
  const [showCartModal, setShowCartModal] = useState(false);

  const handlesetShowModal = () => {
    setShowModal(true);
  };
  const handlesetShowCartModal = () => {
    setShowCartModal(true);
  };
  const router = useRouter();

  const onSearch = () => {
    if (search.trim() === "") return;
    router.push(`/search?search=${search.trim()}`);
  };

  return (
    <div className=" w-full bg-white border-b">
      {websiteSettings && websiteSettings.websiteHeaderBanner && (
        <div className="bg-[#a67c52] text-white text-sm py-2 px-4 flex justify-center">
          <span>{websiteSettings.websiteHeaderBanner}</span>
        </div>
      )}

      <div className="lg:w-[1200px] w-full m-auto bg-white lg:py-8 py-4 lg:px-0 px-2 flex justify-between items-end">
        <Link href="/" className="flex items-center space-x-4 cursor:pointer">
          <img src={urlForImage(websiteSettings?.image)} alt="logo" className={"h-16"}></img>
        </Link>
        <div className="hidden lg:flex items-center rounded-xl overflow-hidden">
          <Input
            type="text"
            placeholder="Search here"
            radius="none"
            className="w-[250px] rounded-l-xl bg-red-300"
            isClearable
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch("")}
            onKeyDown={(e: any) => {
              if (e.key == "Enter") {
                onSearch();
              }
            }}
          />
          <Button
            onClick={() => onSearch()}
            className="bg-[#a67c52] text-white  rounded-none"
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Badge
            color="danger"
            content={cartItems.length}
            isInvisible={cartItems.length == 0}
            shape="circle"
          >
            <Button
              isIconOnly
              onClick={handlesetShowCartModal}
              className="text-gray-600 rounded-full bg-gray-200"
            >
              <RiShoppingCart2Line className="w-6 h-6" />
            </Button>
          </Badge>
          <Button
            isIconOnly
            onClick={handlesetShowModal}
            className="lg:hidden flex text-gray-600 px-0  bg-gray-200"
          >
            <IoMdMenu className="w-6 h-8" />
          </Button>
        </div>
      </div>
      <MenuModal showModal={showModal} setShowModal={setShowModal} />
      <CartModal
        showCartModal={showCartModal}
        setShowCartModal={setShowCartModal}
      />
    </div>
  );
}
