"use client";
import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: calc(70rem + 2rem);
  margin: 0 auto;
  padding-block: 2rem;
  padding-inline: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 2rem;
    padding-bottom: 10.5rem;
    padding-inline: 2rem;
  }
`;

export const HomeFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const ProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: calc(3rem - 1px);
  }
`;

export const ProductsContentTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-top: 3rem;
  }
`;

export const ProductsContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(1.5rem + 2px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const CategoriesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: calc(3rem - 1px);
  }
`;

export const CategoriersContentTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-top: 3rem;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(1.25rem);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
