"use client";
import Link from "next/link";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: calc(1.25rem + 1px);
  margin-top: 2.5rem;
`;

export const PaginationNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: calc(1.25rem + 1px);
`;

export const PaginationLink = styled(Link)`
  display: flex;
  width: 2rem;
  height: 2rem;
  user-select: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: #E9E9F0;
  font-size: 1rem;
  line-height: 1.5;
  color: #737380;
  text-decoration-line: none;
  cursor: pointer;
  outline: 1px solid transparent;

  transition: transform 0.2s, background 0.2s;
  transition-timing-function: cubic-bezier(.5,.05,.26,.94);

  &:not(:active):hover {
    background: #fff;
  }
  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
   &[aria-current="true"]{
    background-color: ${({ theme }) => theme.colors.background};
    outline-color: #A212DF;
    color: #A212DF;
    font-weight: 600;
  }

  &:focus,
  &:focus-visible{
    outline: 2px solid ${({ theme }) => theme.colors["focus-visible-outline"]};
    outline-offset: 2px;
  }

  &:active{
    transform: scale(0.95);
  }
`;
