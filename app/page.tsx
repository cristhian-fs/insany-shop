import type { Metadata } from "next";
import { CategoryCard } from "./components/common/category-card";
import { HomeProducts } from "./components/common/home-products";
import { Pagination } from "./components/common/pagination";
import { SearchProductsView } from "./components/common/search-products-view";
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

function normalizeParam(
  param: string | string[] | undefined,
): string | undefined {
  if (!param) return undefined;
  return Array.isArray(param) ? param[0] : param;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const page = normalizeParam(params.page) || "1";
  const limit = normalizeParam(params.limit) || "10";
  const searchTerm = normalizeParam(params.q) || normalizeParam(params.search);
  const category = normalizeParam(params.category);

  const query = new URLSearchParams();

  query.set("page", page);
  query.set("limit", limit);

  if (searchTerm) query.set("search", searchTerm);
  if (category) query.set("category", category);

  const fetchUrl = `${process.env.NEXT_PUBLIC_API_URL}/products?${query.toString()}`;

  const productsResponse = await fetch(fetchUrl);
  const productsData = (await productsResponse.json()) as ProductsResponse;

  const categoriesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
  );
  const categoriesData =
    (await categoriesResponse.json()) as TCategoriesResponse;

  return (
    <HomeContainer>
      {!searchTerm ? (
        <HomeProducts
          categories={categoriesData.categories}
          products={productsData.products}
        />
      ) : (
        <SearchProductsView
          products={productsData.products}
          searchKey={searchTerm}
        />
      )}
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
