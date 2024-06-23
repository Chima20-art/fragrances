"use client";

import Link from "next/link";
import ProductDetail from "@/components/[id]";
import { urlForImage } from "@/app/sanity/client";

export default function BestSellers({ products }: { products: any }) {
  return (
    <div className="pb-40 my-8 z-0 mx-auto max-lg:px-4">
      <div className="text-gray-700 uppercase font-bold text-xl py-2 mb-8 text-center relative">
        Nos Best Sellers
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-primary h-[3px] w-20"></span>
      </div>

      <div className="products grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-3">
        {products.map((product: any) => (
          <Link key={product._id} href={`/produits/${product._id}`}>
            <div className="border border-gray-300 rounded-md flex flex-col min-h-[350px] cursor-pointer h-full">
              <div className="image pb-3 h-3/4 bg-secondary">
                <img
                  src={urlForImage(product.image)}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-1/4 flex items-center flex-col px-3 py-2">
                <h2 className="text-primary font-bold text-center">
                  {product.title}
                </h2>
                <div className="flex justify-center">
                  {product.oldprice && (
                    <span className="old-price text-sm line-through text-gray-400 mr-2">
                      {product.oldprice}dh
                    </span>
                  )}
                  <span className="current-price text-sm font-bold">
                    {product.price}dh
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
