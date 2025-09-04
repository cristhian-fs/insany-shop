import * as Ariakit from "@ariakit/react";
import Image from "next/image";
import { TrashIcon } from "@/app/assets/icons/trash";
import { Select, SelectContent, SelectItem } from "@/app/components/ui/select";
import { useCart } from "@/app/hooks/use-cart";
import type { Product } from "@/app/types/api";
import { toPrice } from "@/app/utils/formatters";
import {
  CardProductFooterWrapper,
  CardProductItemDescription,
  CardProductItemPrice,
  CardProductItemTitle,
  CardProductSelectTrigger,
  CartProductDeleteButton,
  CartProductItemContainer,
  CartProductItemContent,
  CartProductItemImageWrapper,
} from "./cart-product-item.styles";

interface CartProductItemProps {
  product: Product & { amount: number };
}

export const CartProductItem = ({ product }: CartProductItemProps) => {
  const { removeProduct, updateProductAmount } = useCart();

  const handleValueChange = (value: string) => {
    if (value !== product.amount.toString()) {
      updateProductAmount(product.id, Number(value));
    }
  };

  const handleDeleteProduct = () => removeProduct(product.id);

  const select = Ariakit.useSelectStore({
    defaultValue: product.amount.toString(),
    setValue: handleValueChange,
  });

  return (
    <CartProductItemContainer>
      <CartProductDeleteButton
        onClick={handleDeleteProduct}
        $variant="link"
        $size="sm"
      >
        <TrashIcon title="Excluir produto" />
      </CartProductDeleteButton>
      <CartProductItemImageWrapper>
        <Image
          src={product.image}
          alt={product.name}
          width={256}
          height={212}
        />
      </CartProductItemImageWrapper>
      <CartProductItemContent>
        <CardProductItemTitle>{product.name}</CardProductItemTitle>
        <CardProductItemDescription>
          {product.description}
        </CardProductItemDescription>
        <CardProductFooterWrapper>
          <Select store={select} placement="bottom-start">
            <CardProductSelectTrigger store={select} value={product.amount} />
            <SelectContent store={select}>
              {Array.from({ length: product.stock }, (_, idx) => idx + 1).map(
                (number) => (
                  <SelectItem key={number} value={number.toString()}>
                    {number}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
          <CardProductItemPrice>{toPrice(product.price)}</CardProductItemPrice>
        </CardProductFooterWrapper>
      </CartProductItemContent>
    </CartProductItemContainer>
  );
};
