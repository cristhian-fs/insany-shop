"use client";

import * as Ariakit from "@ariakit/react";
import styled from "styled-components";
import { StyledButton } from "@/app/components/ui/button/button.styles";

const CartProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;

   @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
   }
`;

const CartProductDeleteButton = styled(StyledButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #DE3838;
  background: #fff;
  border-radius: 0.5rem;
  z-index: 2;
  padding: 0;
  padding-block: 0;
  outline: 1px solid transparent;

  &:hover{
    color: #DE3838;
  }

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

  &:focus{
    outline: 1px solid #DE3838;
  }

  & svg{
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const CartProductItemImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 16rem;
    aspect-ratio: 64 / 53;
    flex-shrink: 0;
  }

  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CartProductItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 2rem;
  }
`;

const CardProductItemTitle = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  color: #41414D;
  line-height: 1.5;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   font-size: 1.25rem;
  }
`;

const CardProductItemDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: #41414D;
  line-height: 1.5;
  margin-top: 0.75rem;
`;

const CardProductFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
  }
`;

const CardProductSelectTrigger = styled(Ariakit.Select)`
  background: #F3F5F6;
  border: 1px solid #A8A8B3;
  padding: 0.5rem 0.25rem 0.5rem 0.75rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;
`;

const CardProductItemPrice = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #41414D;
  line-height: 1.5;
`;

export {
  CartProductItemContainer,
  CartProductItemImageWrapper,
  CartProductItemContent,
  CardProductItemTitle,
  CardProductItemDescription,
  CardProductFooterWrapper,
  CardProductItemPrice,
  CardProductSelectTrigger,
  CartProductDeleteButton,
};
