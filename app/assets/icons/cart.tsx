import type { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
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
      strokeWidth={2}
      d="M8.5 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19.5 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2.55 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.62"
    />
  </svg>
);
export { SvgComponent as CartIcon };
