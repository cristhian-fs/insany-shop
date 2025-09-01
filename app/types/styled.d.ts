import "styled-components";
import type { CustomTheme } from "@/app/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
