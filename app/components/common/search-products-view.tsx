"use client";

import * as Ariakit from "@ariakit/react";
import { useMemo, useState } from "react";
import {
  HomeFiltersContainer,
  ProductsContent,
  ProductsContentGrid,
  ProductsContentTitle,
} from "@/app/styles/home.styles";
import type { Product } from "@/app/types/api";
import { type SortOption, sortProducts } from "@/app/utils/sorters";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { ProductCard } from "./product-card";

interface SearchProductsViewProps {
  products: Product[];
  searchKey: string;
}

const SORT_OPTIONS_MAPPING: Record<SortOption, string> = {
  newest: "Novidades",
  "price-high-low": "Preço: Maior - menor",
  "price-low-high": "Preço: Menor - maior",
  "best-selling": "Mais vendidos",
};

export const SearchProductsView = ({
  products,
  searchKey,
}: SearchProductsViewProps) => {
  const [sortBy, setSortBy] = useState("");

  const sortedProducts = useMemo(() => {
    return sortProducts(products, sortBy as SortOption);
  }, [products, sortBy]);

  const select = Ariakit.useSelectStore({
    value: sortBy,
    setValue: setSortBy,
  });

  const { value } = select.getState();

  return (
    <>
      <HomeFiltersContainer>
        <span>Total de resultados para a busca: {products.length}</span>
        <Select store={select} placement="bottom-end">
          <SelectTrigger
            store={select}
            value={SORT_OPTIONS_MAPPING[value as SortOption]}
            placeholder="Organizar por"
          />
          <SelectContent store={select}>
            {Object.entries(SORT_OPTIONS_MAPPING).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </HomeFiltersContainer>
      <ProductsContent>
        <ProductsContentTitle>
          Exibindo resultados para: {searchKey}
        </ProductsContentTitle>
        <ProductsContentGrid>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContentGrid>
      </ProductsContent>
    </>
  );
};
