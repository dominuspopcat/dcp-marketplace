"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  category?: string;
}

export default function Products({ category }: ProductsProps) {
  const allProducts = [
    {
      id: 1,
      name: "Cool Jacket",
      category: "ugc",
      images: ["/aproofie.png"],
      priceInDollar: 15.99,
      priceInRobux: 1299,
      link: "https://www.roblox.com/catalog/123456789"
    },
    {
      id: 2,
      name: "rizzing ugc",
      category: "ugc",
      images: ["/101im.png"],
      priceInDollar: 0.93,
      priceInRobux: 75,
      link: "https://www.roblox.com/catalog/70684627582419/chatgptsquarepants"
    },
    {
      id: 3,
      name: "Premium Shirt",
      category: "shirts",
      images: ["/product3.png"],
      priceInDollar: 12.99,
      priceInRobux: 999,
      link: "https://www.roblox.com/catalog/456789123"
    },
    {
      id: 4,
      name: "Gaming Pants",
      category: "pants",
      images: ["/product4.png"],
      priceInDollar: 10.00,
      priceInRobux: 799,
      link: "https://www.roblox.com/catalog/321654987"
    },
    {
      id: 5,
      name: "Epic Hoodie",
      category: "shirts",
      images: ["/product5.png"],
      priceInDollar: 18.99,
      priceInRobux: 1599,
      link: "https://www.roblox.com/catalog/741852963"
    },
    {
      id: 6,
      name: "Classic Pants",
      category: "pants",
      images: ["/product6.png"],
      priceInDollar: 14.50,
      priceInRobux: 1199,
      link: "https://www.roblox.com/catalog/159357486"
    }
  ];

  // Filter products based on category prop
  const products = category 
    ? allProducts.filter(product => product.category === category)
    : allProducts;

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image 
              src={product.images[0]} 
              alt={product.name}
              width={250}
              height={250}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-prices">
              <p className="price-dollar">${product.priceInDollar}</p>
              <p className="price-robux">{product.priceInRobux} R$</p>
            </div>
            <Link 
              href={product.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="product-link"
            >
              View on Roblox
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
