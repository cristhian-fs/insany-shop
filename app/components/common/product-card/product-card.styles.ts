"use client";
import * as Ariakit from "@ariakit/react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { StyledButton } from "../../ui/button/button.styles";

export const ProductCardContainer = styled.article`
  background-color: #fff;
  border-radius: calc(1.125rem + 1px);
  border: 1px solid #dddddd;
  box-shadow: -6px 8px 20.4px 0 rgba(0, 0, 0, 0.04);
`;

export const ProductImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: 16.875rem;
  border-radius: calc(1.125rem + 1px) calc(1.125rem + 1px) 0 0;
`;

export const ProductCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProductInfo = styled.div`
  padding: 0.75rem calc(1.5rem - 3px) 1.75rem calc(1.5rem - 3px);
  display: flex;
  flex-direction: column;
  gap: calc(1rem - 1px);
`;

export const ProductCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ProductCategory = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-transform: capitalize;
`;

export const ProductStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  svg{
    color: #FFE100;
  }
  span {
    color: ${({ theme }) => theme.colors.foreground};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const ProductCardLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductCardTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const ProductCardDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ProductPrice = styled.p`
  color: #1B9847;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
`;

export const ProductInStock = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const ProductCardButton = styled(StyledButton)`
  margin-top: 1rem;
  gap: 1rem;
  width: 100%;
`;
