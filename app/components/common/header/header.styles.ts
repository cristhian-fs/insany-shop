"use client";
import * as Ariakit from "@ariakit/react";
import styled from "styled-components";
export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors["header-background"]};
  width: 100%;
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
`;

export const ShoppingBagButton = styled(Ariakit.Button)`
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
