export default function BestSellers(){
    const products: any= [
        {
            id: 1,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-20.png",
            link: "#"
        },
        {
            id: 2,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            link: "#"
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-13.png",
            link: "#"
        },
        {
            id: 1,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-23.png",
            link: "#"
        },
        {
            id: 2,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            link: "#"
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-20.png",
            link: "#"
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-13.png",
            link: "#"
        },
        {
            id: 1,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            link: "#"
        },
        {
            id: 2,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-21.png",
            link: "#"
        },
        {
            id: 3,
            title: "A Range of perfume",
            oldPrice: "180",
            price: "100",
            imageUrl: "/product-item-20.png",
            link: "#"
        },


    ]
    return(
        <div className="pb-40 my-8 z-0 mx-auto max-lg:px-4">
            <div className="text-gray-700 uppercase font-bold text-xl py-2 mb-8 text-center relative">
                Nos Best Sellers
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-primary h-[3px] w-20"></span>
            </div>

            <div className="products grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-3">
                {products.map(product => (
                    <div key={product.id} className="border border-gray-300 rounded-md flex flex-col min-h-[350px] cursor-pointer h-full">
                        <div className="image pb-3 h-3/4 bg-secondary">
                            <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="h-1/4 flex items-center flex-col px-3 py-2">
                            <h2 className="text-primary font-bold text-center">{product.title}</h2>
                            <div className="flex justify-center">
                                <span className="old-price text-sm mr-1 text-gray-500 line-through">{product.oldPrice}dh</span>
                                <span className="current-price text-sm font-bold">{product.price}dh</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}