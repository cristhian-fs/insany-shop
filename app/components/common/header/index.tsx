"use client";
import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "@/app/assets/icons/menu";
import { ShoppingBagIcon } from "@/app/assets/icons/shopping-bag";
import { XIcon } from "@/app/assets/icons/x";
import { useCart } from "@/app/hooks/use-cart";
import { VisuallyHidden } from "../visually-hidden";
import {
  HeaderContainer,
  HeaderContent,
  HeaderContentInputWrapper,
  HeaderLogo,
  HeaderMenuButton,
  HeaderMobileMenu,
  HeaderMobileMenuCloseButton,
  HeaderMobileMenuContent,
  HeaderMobileMenuInputWrapper,
  ShoppingBagButtonLink,
} from "./header.styles";
import { SearchBar } from "./search-input";

const Header = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        mobileMenuContent.current &&
        !mobileMenuContent.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>InsanyShop</HeaderLogo>
        <HeaderMenuButton
          $variant="link"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <MenuIcon title="Menu" />
          <VisuallyHidden>Abrir menu</VisuallyHidden>
        </HeaderMenuButton>
        <HeaderContentInputWrapper>
          <SearchBar />
          <ShoppingBagButtonLink href="/carrinho">
            <ShoppingBagIcon title="Carrinho" />
            <VisuallyHidden>Carrinho</VisuallyHidden>
            <span>{cart.products.length}</span>
          </ShoppingBagButtonLink>
        </HeaderContentInputWrapper>
      </HeaderContent>
      <HeaderMobileMenu
        data-state={open ? "open" : "closed"}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <HeaderMobileMenuContent ref={mobileMenuContent}>
          <HeaderMobileMenuCloseButton
            ref={closeButtonRef}
            $variant="link"
            onClick={() => setOpen(!open)}
            aria-label="Fechar menu"
            onKeyDown={(e) => e.key === "Escape" && setOpen(!open)}
          >
            <XIcon title="Fechar menu" />
            <VisuallyHidden>Fechar menu</VisuallyHidden>
          </HeaderMobileMenuCloseButton>
          <HeaderLogo>InsanyShop</HeaderLogo>
          <HeaderMobileMenuInputWrapper>
            <SearchBar />
            <ShoppingBagButtonLink href="/carrinho">
              <ShoppingBagIcon title="Carrinho" />
              <VisuallyHidden>Carrinho</VisuallyHidden>
              <span>{cart.products.length}</span>
            </ShoppingBagButtonLink>
          </HeaderMobileMenuInputWrapper>
        </HeaderMobileMenuContent>
      </HeaderMobileMenu>
    </HeaderContainer>
  );
};

export default Header;
