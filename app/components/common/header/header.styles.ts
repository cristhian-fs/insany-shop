"use client";
import Link from "next/link";
import styled from "styled-components";
import { StyledButton } from "../../ui/button/button.styles";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors["header-background"]};
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  padding-block: 0.675rem;
  max-width: 1120px;
  margin: 0 auto;
`;

export const HeaderLogo = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors["header-logo-foreground"]};
  line-height: 1.5;
  font-weight: 700;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const HeaderContentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const HeaderMenuButton = styled(StyledButton)`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ShoppingBagButtonLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &::before{
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    min-height: 44px;
    min-width: 44px;
    z-index: 9999;
    border-radius: 0.5rem;
  }
  
  &:hover::before{
    background: rgba(0, 0, 0, 0.05);
  }

  &:focus::before{
    background: rgba(0, 0, 0, 0.05);
  }
  &:focus-visible::before{  
    background: rgba(0, 0, 0, 0.05);
  }

  span {
    position: absolute;
    bottom: -0.5rem;
    right: -0.5rem;
    background-color: ${(props) => props.theme.colors["bag-button-span-background"]};
    color: ${(props) => props.theme.colors["bag-button-span-foreground"]};
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    font-size: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderMobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  user-select: none;
  pointer-events: none;
   &[data-state="open"]{
    pointer-events: all;
   }
  &[data-state="open"] > div{
    transform: translateX(0);
  }

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: 0.25s opacity cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &[data-state="open"]::before{
    opacity: 1;
  }

`;
export const HeaderMobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #fff;
  transform: translateX(100%);
  transition: 0.25s transform cubic-bezier(.5,.05,.26,.94);
  box-shadow:  0 4px 12px 0 rgba(0, 0, 0, 0.10);
  padding: 1.5rem;
  position: fixed;
  top: 0;
  right: 0;
  width: clamp(20rem, 80vw, 30rem);
  height: 100vh;
  z-index: 9999;

`;

export const HeaderMobileMenuInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & form{
    flex-shrink: 1;
    flex-basis: auto;
  }
`;

export const HeaderMobileMenuCloseButton = styled(StyledButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
