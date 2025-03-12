import React, { FC } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface ProductProps {
  id: number;
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Image
          src={product.thumbnail}
          width={250}
          height={250}
          alt={product.title}
        />
      </CardContent>
      <CardFooter>
        <Card>
          <CardContent>
            <p>{product.title}</p>
            <p>{product.rating}</p>
            <p>${product.price}</p>
          </CardContent>
        </Card>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
