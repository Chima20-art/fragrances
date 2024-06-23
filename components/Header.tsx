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
import { useContext, useState } from "react";
import MenuModal from "@/components/MenuModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { CardItemsContext } from "./CardItemsContext";

export default function Header({ websiteSettings }: { websiteSettings: any }) {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { cartItems, setCartItems } = useContext<any>(CardItemsContext);

  const router = useRouter();

  console.log("websiteSettings ", websiteSettings);

  const handlesetShowModal = () => {
    setShowModal(true);
  };

  const onSearch = () => {
    if (search.trim() === "") return;
    router.push(`/search?search=${search.trim()}`);
  };

  return (
    <>
      <Modal
        className="z-50 w-[90vw]  h-fit max-h-[90vh] "
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent className="flex items-center justify-end">
          {(onClose) => (
            <>
              <ModalBody className="w-full">
                <p className="w-full text-left text-2xl">votre panier</p>
                <Divider className="w-full" />
                <ScrollShadow className="w-full h-[400px]">
                  {cartItems.map((item: any) => {
                    return (
                      <div className="flex justify-between items-center p-2">
                        <div className="flex space-x-2 items-center">
                          <img
                            src={item.image}
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                        <div>
                          <Button
                            onClick={() => {
                              let newCartItems = cartItems.filter(
                                (cartItem: any) => cartItem.id !== item.id
                              );
                              setCartItems(newCartItems);
                            }}
                            className="text-red-500"
                          >
                            supprimer
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </ScrollShadow>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className=" w-full z-40 bg-white border-b">
        {websiteSettings && websiteSettings.websiteHeaderBanner && (
          <div className="bg-[#a67c52] text-white text-sm py-2 px-4 flex justify-center">
            <span>{websiteSettings.websiteHeaderBanner}</span>
          </div>
        )}

        <div className="lg:w-[1200px] w-full m-auto bg-white lg:py-8 py-4 lg:px-0 px-2 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-4">
            <span className="lg:text-2xl text-lg font-bold">
              {websiteSettings?.title ?? "title"}{" "}
            </span>
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
                className="text-gray-600 rounded-full bg-gray-200"
                onClick={() => onOpenChange()}
              >
                <RiShoppingCart2Line className="lg:h-5 lg:w-5" />
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
      </div>
    </>
  );
}
