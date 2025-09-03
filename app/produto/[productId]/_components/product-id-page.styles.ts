"use client";
import styled from "styled-components";
import { StyledButton } from "@/app/components/ui/button/button.styles";

const ProductIdPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(70rem + 2rem);
  margin: 0 auto;
  padding-block: 2rem;
  padding-inline: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 1.5rem;
    padding-inline: 2rem;
    padding-bottom: 10.5rem;
  }
`;

const ProductIdPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductIdPageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;
  }
`;

const ProductIdPageImageContainer = styled.div`
  aspect-ratio: 32 / 29;
  width: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: span 7 / span 7;
  }

  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductIdPageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: span 5 / span 5;
  }
`;

const ProductIdPageInfoCategory = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors["muted-foreground"]};
  line-height: 1.5;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const ProductIdPageInfoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.5;
  margin-top: 0.75rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const ProductIdPageInfoPrice = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #46AB6A;
  line-height: 1.5;
  margin-top: 0.25rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const ProductIdPageInfoDescriptionLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors["muted-foreground"]};
  line-height: 1.5;
  margin-top: 1rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-top: 6.25rem;
  }
`;

const ProductIdPageInfoDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors["muted-foreground"]};
  line-height: 1.5;
  margin-top: 1rem;
`;

const AddToCartButton = styled(StyledButton)`
  margin-top: 2rem;
  gap: 1rem;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: auto;
  }
`;

export {
  ProductIdPageContainer,
  ProductIdPageContent,
  ProductIdPageInfoWrapper,
  ProductIdPageImageContainer,
  ProductIdPageInfoContainer,
  ProductIdPageInfoCategory,
  ProductIdPageInfoTitle,
  ProductIdPageInfoPrice,
  ProductIdPageInfoDescriptionLabel,
  ProductIdPageInfoDescription,
  AddToCartButton,
};
