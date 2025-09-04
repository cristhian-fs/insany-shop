"use client";
import Link from "next/link";
import styled from "styled-components";

export const CategoryCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 2rem;
  padding-inline: 2.5rem;
  border-radius: 0.75rem;
  background-color: #fff;
  border: 1px solid #E0E0E0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;

  &:hover{
    background-color: #E0E0E0;
  }

  &:focus,
  &:focus-visible{
    outline: 2px solid ${({ theme }) => theme.colors["focus-visible-outline"]};
    outline-offset: 2px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
  white-space: nowrap;
`;

export const CategoryBody = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
`;
