import type * as Ariakit from "@ariakit/react";
import { type Size, StyledButton, type Variant } from "./button.styles";

function Button({
  className,
  variant,
  size = "sm",
  ...props
}: React.ComponentProps<typeof Ariakit.Button> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      data-slot="button"
      {...props}
    />
  );
}

export { Button };
