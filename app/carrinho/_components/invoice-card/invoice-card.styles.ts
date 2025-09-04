"use client";

import Link from "next/link";
import styled from "styled-components";
import { StyledButton } from "@/app/components/ui/button/button.styles";

const InvoiceCardContainer = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-top: 1rem;
  width: 100%;
  background: #ffffff;
`;

const InvoiceCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #41414D;
  line-height: 1.5;
  text-transform: uppercase;
`;

const InvoiceCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.75rem;
  
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #41414D;
  }

  li:last-child{
    font-weight: 600;
    padding-top: 0.5rem;
    border-top: 1px solid #DCE2E5;
    margin-top: 1.5rem;
  }
`;

const InvoiceCardButton = styled(StyledButton)`
  margin-top: 1.5rem;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 2.5rem;    
  }
`;

const InvoiceCardFooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 3rem;

   @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 17.5rem;    
    }
`;

const InvoiceCardFooterLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #41414D;
  text-decoration: underline;
  text-transform: uppercase;
  transition: 0.2s color ease-in-out;
  :hover{
    color: #000000;
  }
`;

export {
  InvoiceCardContainer,
  InvoiceCardTitle,
  InvoiceCardList,
  InvoiceCardButton,
  InvoiceCardFooterNav,
  InvoiceCardFooterLink,
};
