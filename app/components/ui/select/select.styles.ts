"use client";
import * as Ariakit from "@ariakit/react";
import styled from "styled-components";

// Styled Components
const StyledSelectTrigger = styled(Ariakit.Select)`
  display: flex;
  height: 2.5rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors["muted-foreground"]};
  cursor: pointer;

  
  &[aria-disabled="true"] {
    opacity: 0.5;
  }

  &:hover{
    color: ${({ theme }) => theme.colors.foreground};
  }
  
  &::placeholder {
    color: #9ca3af;
  }

  &[data-focus-visible] {
    outline-style: solid;
  }

  &:active,
  &[data-active]{
    outline-width: 2px;
    outline-offset: 2px;
    outline-color: hsl(204 100% 40%);
  }
`;

const StyledSelectContent = styled(Ariakit.SelectPopover)`
  position: relative;
  z-index: 50;
  display: flex;
  max-height: min(var(--popover-available-height, 300px), 300px);
  flex-direction: column;
  overflow: auto;
  overscroll-behavior: contain;
  border-radius: 0.25rem;
  background-color: #ffffff;
  color: #1f2937;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.10);
  padding: 0.75rem 1rem;
  transform-origin: top;
  opacity: 0;  
  scale: 0.95;
  translate: 0 -0.5rem;

  @media (prefers-reduced-motion: no-preference) {
    transition-property: opacity, scale, translate;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  &[data-enter] {
    opacity: 1;
    scale: 1;
    translate: 0;
  }
`;

const StyledSelectItem = styled(Ariakit.SelectItem)`
  position: relative;
  display: flex;
  width: 100%;
  cursor: pointer;
  user-select: none;
  align-items: center;
  border-radius: 0.125rem;
  padding: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.375rem;
  outline: none;
  
  &:focus,
  &[data-active-item] {
    background-color: #f1f5f9;
    color: #0f172a;
  }
  
  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledSelectLabel = styled(Ariakit.SelectLabel)`
  padding: 0.375rem 2rem 0.375rem 2rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors["muted-foreground"]};
`;

const StyledSelectSeparator = styled(Ariakit.Separator)`
  margin: 0.25rem -0.25rem;
  height: 1px;
  background-color: #e5e7eb;
`;

const StyledSelectGroup = styled(Ariakit.SelectGroup)`
  padding: 0.5rem 0.375rem;
`;

const StyledSelectValue = styled(Ariakit.SelectValue)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors["muted-foreground"]};
`;

const CheckIcon = styled.span`
  position: absolute;
  left: 0.5rem;
  display: flex;
  height: 0.875rem;
  width: 0.875rem;
  align-items: center;
  justify-content: center;
`;

const DropdownIcon = styled.svg`
  height: 1rem;
  width: 1rem;
  opacity: 0.5;
  margin-left: 0.5rem;
`;

export {
  StyledSelectTrigger,
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectLabel,
  StyledSelectSeparator,
  StyledSelectGroup,
  StyledSelectValue,
  CheckIcon,
  DropdownIcon,
};
