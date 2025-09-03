import { CartIcon } from "@/app/assets/icons/cart";
import { StarIcon } from "@/app/assets/icons/star";
import type { Product } from "@/app/types/api";
import { toPrice } from "@/app/utils/formatters";
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardDescription,
  ProductCardImage,
  ProductCardLink,
  ProductCardTitle,
  ProductCategory,
  ProductCategoryContainer,
  ProductImageContainer,
  ProductInfo,
  ProductInStock,
  ProductPrice,
  ProductPriceContainer,
  ProductStars,
} from "./product-card.styles";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ onAddToCart, product }: ProductCardProps) => {
  return (
    <ProductCardContainer aria-labelledby={product.name}>
      <ProductImageContainer>
        <ProductCardImage
          src={product.image}
          alt={product.name}
          loading="lazy"
          role="img"
          width={356}
          height={356}
        />
      </ProductImageContainer>
      <ProductInfo>
        <ProductCategoryContainer>
          <ProductCardLink href={`/categoria/${product.category}`}>
            <ProductCategory>{product.category}</ProductCategory>
          </ProductCardLink>
          <ProductStars>
            <StarIcon title="Icone de estrela" />
            <span>{product.rating}</span>
          </ProductStars>
        </ProductCategoryContainer>
        <div>
          <ProductCardLink href={`/produto/${product.id}`}>
            <ProductCardTitle>{product.name}</ProductCardTitle>
          </ProductCardLink>
          <ProductCardDescription>{product.description}</ProductCardDescription>
        </div>
        <ProductPriceContainer>
          <ProductPrice>{toPrice(product.price)}</ProductPrice>
          <ProductInStock>{product.stock} em estoque</ProductInStock>
        </ProductPriceContainer>
        <ProductCardButton onClick={() => onAddToCart(product)}>
          <CartIcon title="Icone de adicionar ao carrinho" />
          Adicionar
        </ProductCardButton>
      </ProductInfo>
    </ProductCardContainer>
  );
};
