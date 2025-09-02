"use client";

import * as Ariakit from "@ariakit/react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/app/components/common/product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/app/components/ui/select";
import {
  HomeFiltersContainer,
  ProductsContent,
  ProductsContentGrid,
} from "@/app/styles/home.styles";
import type { Products, TCategory } from "@/app/types/api";
import { type SortOption, sortProducts } from "@/app/utils/sorters";
import { CategoryBreadcrumb } from "./category-breadcrumb";
import {
  CategoryContentDescription,
  CategoryContentTitle,
  CategoryContentTitleWrapper,
} from "./category-page.styles";

interface CategoryProductsProps {
  products: Products;
  categoryData: TCategory;
}

const SORT_OPTIONS_MAPPING: Record<SortOption, string> = {
  newest: "Novidades",
  "price-high-low": "Preço: Maior - menor",
  "price-low-high": "Preço: Menor - maior",
  "best-selling": "Mais vendidos",
};

export const CategoryProducts = ({
  products,
  categoryData,
}: CategoryProductsProps) => {
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
        <CategoryBreadcrumb currentCategoryName={categoryData.name} />
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
        <CategoryContentTitleWrapper>
          <CategoryContentTitle>{categoryData.name}</CategoryContentTitle>
          <CategoryContentDescription>
            {categoryData.description}
          </CategoryContentDescription>
        </CategoryContentTitleWrapper>
        <ProductsContentGrid>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => {}}
            />
          ))}
        </ProductsContentGrid>
      </ProductsContent>
    </>
  );
};
