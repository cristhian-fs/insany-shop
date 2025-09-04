"use client";
import * as Ariakit from "@ariakit/react";
import styled, { css } from "styled-components";

export type Variant = "default" | "purchase" | "link";
export type Size = "sm" | "md";

export const variantStyles: Record<Variant, ReturnType<typeof css>> = {
  default: css`
    background: #000000;
    color: white;
    &:hover {
      background: #111827;
    }

    &:focus,
    &:focus-visible{
      outline: 2px solid ${({ theme }) => theme.colors["focus-visible-outline"]};
      outline-offset: 2px;
    }
  `,
  purchase: css`
    background: #1b9847;
    color: white;
    &:hover {
      background: #1b9847d2;
    }
  `,
  link: css`
    ${({ theme }) => css`
      background: transparent;
      color: ${theme.colors["muted-foreground"]};

      &:hover {
        color: ${theme.colors.foreground};
      }
    `}
  `,
};

export const sizeStyles: Record<Size, ReturnType<typeof css>> = {
  sm: css`
    height: auto;
    padding: 0;
    font-size: 0.875rem;
  `,
  md: css`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
  `,
};

export const StyledButton = styled(Ariakit.Button)<{
  $variant?: Variant;
  $size?: Size;
}>`
  display: flex;
  user-select: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  white-space: nowrap;
  border-radius: 0.25rem;
  border-style: none;
  font-weight: 500;
  line-height: 1.5rem;
  text-decoration-line: none;
  transition: transform 0.2s, background 0.2s, color 0.2s;
  transition-timing-function: cubic-bezier(.5,.05,.26,.94);
  &:active{
    transform: scale(0.97);
  }

  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &[data-focus-visible] {
    outline-style: solid;
    outline-width: 2px;
  }

  /* Aplica styles */
  ${({ $variant = "default" }) => variantStyles[$variant]}
  ${({ $size = "md" }) => sizeStyles[$size]}
`;
