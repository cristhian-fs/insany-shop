"use client";
import Link from "next/link";
import { BackArrowIcon } from "../assets/icons/back-arrow";
import { Button } from "../components/ui/button";
import { useCart } from "../hooks/use-cart";
import { toPrice } from "../utils/formatters";
import {
  CartInvoiceContainer,
  CartItemsContainer,
  CartItemsTitle,
  CartItemsTotal,
  CartItemsTotalPrice,
  CartPageContainer,
  CartProductItemsListContainer,
} from "./_components/carrinho.styles";
import { CartProductItem } from "./_components/cart-product-item";
import { InvoiceCard } from "./_components/invoice-card";

export default function Page() {
  const { cart } = useCart();

  return (
    <CartPageContainer>
      <CartItemsContainer>
        <Link href="/">
          <Button variant="link">
            <BackArrowIcon title="Voltar" />
            Voltar
          </Button>
        </Link>
        <CartItemsTitle>SEU CARRINHO</CartItemsTitle>
        <CartItemsTotal>
          Total ({cart.products.length} produtos){" "}
          <CartItemsTotalPrice>{toPrice(cart.subtotal)}</CartItemsTotalPrice>
        </CartItemsTotal>
        <CartProductItemsListContainer>
          {cart.products.length > 0 ? (
            cart.products.map((product) => (
              <CartProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>Seu carrinho está vazio</p>
          )}
        </CartProductItemsListContainer>
      </CartItemsContainer>
      <CartInvoiceContainer>
        <InvoiceCard
          delivery={cart.delivery}
          subtTotal={cart.subtotal}
          total={cart.total}
        />
      </CartInvoiceContainer>
    </CartPageContainer>
  );
}
