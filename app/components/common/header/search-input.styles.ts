"use client";
import * as Ariakit from "@ariakit/react";
import styled from "styled-components";

export const FormWrapper = styled(Ariakit.Form)`
  width: 100%;
  flex: 1 0 22rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1 1 22rem;
  background: ${(props) => props.theme.colors["header-search-background"]};
  color: ${(props) => props.theme.colors["header-search-foreground"]};
  overflow: hidden;
  border-radius: 0.5rem;
  & svg {
    position: absolute;
    top: 50%;
    left: initial;
    right: 1rem;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors["header-search-foreground"]};
  }

  outline: 1px solid transparent;
  transition: 0.1s ease-in-out outline;
  
  &:has(input:focus) {
    outline: 2px solid ${(props) => props.theme.colors["header-search-foreground"]};
  }
`;

export const Input = styled(Ariakit.FormInput)`
  border-radius: 0.5rem;
  padding-inline: 0.75rem;
  padding-block: 0.675rem;
  min-height: 2.5rem;
  width: 100%;
  color: ${(props) => props.theme.colors["header-search-foreground"]};
  background: transparent;
  border: none;
  font-size: 0.875rem;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors["header-search-foreground"]};
  }
`;
