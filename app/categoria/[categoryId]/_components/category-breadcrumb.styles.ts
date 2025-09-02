"use client";
import Link from "next/link";
import styled from "styled-components";

export const BreadcrumbList = styled.ol`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${({ theme }) => theme.colors["muted-foreground"]};
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 400;
`;

export const BreadcrumbItem = styled.li`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const BreadcrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors["muted-foreground"]};
  text-decoration: none;

  transition: 0.2s ease-in-out color;

  &:hover{
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export const BreadcrumbSeparator = styled.span`
  color: ${({ theme }) => theme.colors["muted-foreground"]};
`;
