import { ShoppingBagIcon } from "@/app/assets/icons/shopping-bag";
import {
  HeaderContainer,
  HeaderContent,
  HeaderContentInputWrapper,
  HeaderLogo,
  ShoppingBagButton,
} from "./header.styles";
import SearchInput from "./search-input";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>InsanyShop</HeaderLogo>
        <HeaderContentInputWrapper>
          <SearchInput />
          <ShoppingBagButton>
            <ShoppingBagIcon title="Carrinho" />
            <span>0</span>
          </ShoppingBagButton>
        </HeaderContentInputWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
