import type { SVGProps } from "react";

interface SVGRProps {
  title: string;
  titleId?: string;
}
const SvgComponent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-menu-icon lucide-menu"
    aria-labelledby={titleId}
    {...props}
  >
    <title id={titleId}>{title}</title>
    <path d="M4 5h16M4 12h16M4 19h16" />
  </svg>
);
export { SvgComponent as MenuIcon };
