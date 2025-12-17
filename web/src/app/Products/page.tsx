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
      name: "Green DCP productions shirt",
      category: "shirts",
      images: ["/grenny.webp"],
      priceInDollar: 0.09,
      priceInRobux: 7,
      link: "https://www.roblox.com/catalog/139779926115544/Green-DCP-productions-shirt"
    },
    {
      id: 2,
      name: "Blue DCP productions shirt",
      category: "shirts",
      images: ["/bluely.webp"],
      priceInDollar: 0.09,
      priceInRobux: 7,
      link: "https://www.roblox.com/catalog/127517652637346/Blue-DCP-productions-shirt"
    },
    {
      id: 3,
      name: "Red DCP productions Shirt",
      category: "shirts",
      images: ["/redly.webp"],
      priceInDollar: 0.09,
      priceInRobux: 7,
      link: "https://www.roblox.com/catalog/90540387362497/Red-DCP-productions-Shirt"
    },
    {
      id: 4,
      name: "Orange DCP productions shirt",
      category: "shirts",
      images: ["/orangy.webp"],
      priceInDollar: 0.09,
      priceInRobux: 7,
      link: "https://www.roblox.com/catalog/72422147890224/Orange-DCP-productions-shirt"
    },
    {
      id: 5,
      name: "Black DCP productions shirt",
      category: "shirts",
      images: ["/blacky.webp"],
      priceInDollar: 0.09,
      priceInRobux: 7,
      link: "https://www.roblox.com/catalog/96122415098963/Black-DCP-productions-shirt"
    },
    {
      id: 6,
      name: "Pink DCP productions shirt",
      category: "shirts",
      images: ["/pinky.webp"],
      priceInDollar: 0.09,
      priceInRobux: 7,
      link: "https://www.roblox.com/catalog/111372101102112/Pink-DCP-productions-shirt"
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
