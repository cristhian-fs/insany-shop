"use client";

import * as Ariakit from "@ariakit/react";
import type * as React from "react";
import { ChevronDownIcon } from "@/app/assets/icons/chevron-down";
import {
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectItem,
  StyledSelectLabel,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectValue,
} from "./select.styles";

function Select({
  ...props
}: React.ComponentProps<typeof Ariakit.SelectProvider>) {
  return <Ariakit.SelectProvider data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof Ariakit.SelectGroup>) {
  return <StyledSelectGroup data-slot="select-group" {...props} />;
}
function SelectValue({
  ...props
}: React.ComponentProps<typeof Ariakit.SelectValue>) {
  return <StyledSelectValue data-slot="select-value" {...props} />;
}
function SelectTrigger({
  className,
  children,
  placeholder,
  ...props
}: React.ComponentProps<typeof Ariakit.Select> & {
  placeholder?: string;
}) {
  return (
    <StyledSelectTrigger data-slot="select-trigger" {...props}>
      {props.value || placeholder}
      <ChevronDownIcon title="Toggle" />
    </StyledSelectTrigger>
  );
}

export interface SelectProps extends Ariakit.SelectProps {
  value?: string;
  setValue?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  onBlur?: React.FocusEventHandler<HTMLElement>;
}

function SelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Ariakit.SelectPopover>) {
  return (
    <StyledSelectContent
      data-slot="select-content"
      portal
      unmountOnHide
      gutter={4}
      {...props}
    >
      {children}
    </StyledSelectContent>
  );
}
function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof Ariakit.SelectLabel>) {
  return <StyledSelectLabel data-slot="select-label" {...props} />;
}
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Ariakit.SelectItem>) {
  return (
    <StyledSelectItem data-slot="select-item" {...props}>
      {children}
      {/* <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <Ariakit.SelectItemCheck />
      </span> */}
    </StyledSelectItem>
  );
}
function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Ariakit.Separator>) {
  return <StyledSelectSeparator data-slot="select-separator" {...props} />;
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
