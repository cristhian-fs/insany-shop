"use client";
import styled from "styled-components";

export const CategoryContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 3rem;
  }
`;

export const CategoryContentTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const CategoryContentDescription = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;
