import type { Metadata } from "next";
import { CategoryCard } from "./components/common/category-card";
import { HomeProducts } from "./components/common/home-products";
import { Pagination } from "./components/common/pagination";

import {
  CategoriersContentTitle,
  CategoriesContent,
  CategoriesGrid,
  HomeContainer,
} from "./styles/home.styles";
import type { ProductsResponse, TCategoriesResponse } from "./types/api";

export const metadata: Metadata = {
  title: "Catálogo da loja",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const page = (await searchParams).page || 1;
  const limit = (await searchParams).limit || 10;
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?page=${page}&limit=${limit}`,
  );
  const productsData = (await productsResponse.json()) as ProductsResponse;

  const categoriesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
  );
  const categoriesData =
    (await categoriesResponse.json()) as TCategoriesResponse;

  return (
    <HomeContainer>
      <HomeProducts
        categories={categoriesData.categories}
        products={productsData.products}
      />
      <Pagination {...productsData.pagination} />
      <CategoriesContent>
        <CategoriersContentTitle>Principais categorias</CategoriersContentTitle>
        <CategoriesGrid>
          {categoriesData.categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </CategoriesGrid>
      </CategoriesContent>
    </HomeContainer>
  );
}
