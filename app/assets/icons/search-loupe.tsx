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
    aria-labelledby={titleId}
    {...props}
  >
    <title id={titleId}>{title}</title>
    <circle
      cx={11.059}
      cy={11.059}
      r={7.062}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.003 20.003-3.951-3.951"
    />
  </svg>
);
export { SvgComponent as SearchLoupeIcon };
