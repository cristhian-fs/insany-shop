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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14 16-4-4 4-4"
    />
  </svg>
);
export { SvgComponent as ChevronLeftIcon };
