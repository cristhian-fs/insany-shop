"use client";
import Link from "next/link";
import { ShoppingBagIcon } from "@/app/assets/icons/shopping-bag";
import { useCart } from "@/app/hooks/use-cart";
import {
  HeaderContainer,
  HeaderContent,
  HeaderContentInputWrapper,
  HeaderLogo,
  ShoppingBagButton,
} from "./header.styles";
import SearchInput from "./search-input";

const Header = () => {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>InsanyShop</HeaderLogo>
        <HeaderContentInputWrapper>
          <SearchInput />
          <Link href="/carrinho">
            <ShoppingBagButton>
              <ShoppingBagIcon title="Carrinho" />
              <span>{cart.products.length}</span>
            </ShoppingBagButton>
          </Link>
        </HeaderContentInputWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
