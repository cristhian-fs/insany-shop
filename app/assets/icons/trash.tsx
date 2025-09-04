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
      d="M16.138 21h-8.28a2.001 2.001 0 0 1-1.995-1.853L4.966 7H19l-.867 12.142A2 2 0 0 1 16.138 21v0Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 11v6M4 7h16M17 7l-1.013-2.702A2 2 0 0 0 14.114 3H9.886a2 2 0 0 0-1.873 1.298L7 7M15.43 11 15 17M8.57 11 9 17"
    />
  </svg>
);
export { SvgComponent as TrashIcon };
