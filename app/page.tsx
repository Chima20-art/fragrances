import Header from "@/components/Header";
import {NextUIProvider} from "@nextui-org/react";
import {NavBar} from "@/components/navBar";
import HomeCatalogue from "@/components/HomeCatalogue";
import BestSellers from "@/components/BestSellers";


export default function Home() {
  return (
      <NextUIProvider>
         <div className="bg-white overflow-hidden">
             <Header/>
             <NavBar/>
             <div className="lg:w-[54vw] mx-auto">
                 <HomeCatalogue/>
                 <BestSellers/>
             </div>
         </div>
      </NextUIProvider>
  );
}
