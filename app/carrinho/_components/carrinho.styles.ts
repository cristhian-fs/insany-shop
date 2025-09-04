"use client";
import styled from "styled-components";

const CartPageContainer = styled.main`
  display: grid;
 grid-template-columns: 1fr;
  width: 100%;
  max-width: calc(70rem + 2rem);
  margin: 0 auto;
  padding-block: 2rem;
  padding-inline: 1rem;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-top: 1.5rem;
    padding-inline: 2rem;
    padding-bottom: 10.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 8 / span 8;
  }
`;

const CartInvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 4 / span 4;
  }
`;

const CartItemsTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 500;
  color: #41414D;
  margin-top: 1.5rem;
`;

const CartItemsTotal = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 300;
  color: #41414D;
  margin-top: 0.625rem;
`;

const CartItemsTotalPrice = styled.span`
  font-weight: 600;
`;

const CartProductItemsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export {
  CartPageContainer,
  CartItemsContainer,
  CartInvoiceContainer,
  CartItemsTitle,
  CartItemsTotal,
  CartItemsTotalPrice,
  CartProductItemsListContainer,
};
