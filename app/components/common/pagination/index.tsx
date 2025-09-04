"use client";

import { useSearchParams } from "next/navigation";
import { ChevronLeftIcon } from "@/app/assets/icons/chevron-left";
import { ChevronRightIcon } from "@/app/assets/icons/chevron-right";
import type { TPagination } from "@/app/types/api";
import { VisuallyHidden } from "../visually-hidden";
import {
  PaginationContainer,
  PaginationLink,
  PaginationNav,
} from "./pagination.styles";

type PaginationProps = TPagination;

export const Pagination = ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  totalPages,
}: PaginationProps) => {
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `?${params.toString()}`;
  };

  return (
    <PaginationContainer>
      <PaginationLink
        href={createPageUrl(currentPage - 1)}
        aria-disabled={!hasPreviousPage}
        aria-label="Pagina anterior"
      >
        <ChevronLeftIcon title="Pagina anterior" />
        <VisuallyHidden>Pagina anterior</VisuallyHidden>
      </PaginationLink>
      <PaginationNav aria-label="Navegação de paginas">
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationLink
            // biome-ignore lint/suspicious/noArrayIndexKey: Cannot find a better approach
            key={index + 1}
            aria-current={index + 1 === currentPage}
            href={createPageUrl(index + 1)}
            aria-disabled={index + 1 === currentPage}
            aria-label={`Pagina ${index + 1}`}
          >
            {index + 1}
            <VisuallyHidden>Página {index + 1}</VisuallyHidden>
          </PaginationLink>
        ))}
      </PaginationNav>
      <PaginationLink
        href={createPageUrl(currentPage + 1)}
        aria-disabled={!hasNextPage}
        aria-label="Proxima pagina"
      >
        <ChevronRightIcon title="Proxima pagina" />
        <VisuallyHidden>Pagina anterior</VisuallyHidden>
      </PaginationLink>
    </PaginationContainer>
  );
};
