import { Pagination } from "@/app/components/common/pagination";
import { HomeContainer } from "@/app/styles/home.styles";
import type { ProductsResponse, TCategoriesResponse } from "@/app/types/api";
import { CategoryProducts } from "./_components/categories-products";

type Props = {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { categoryId } = await params;
  const page = (await searchParams).page || 1;
  const limit = (await searchParams).limit || 10;
  const categorizedProductsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?category=${categoryId}&page=${page}&limit=${limit}`,
  );

  const productsData =
    (await categorizedProductsResponse.json()) as ProductsResponse;

  // Fetch cateogories to get the current correct category
  const categoriesData = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
  ).then((res) => res.json())) as TCategoriesResponse;

  const currentCategoryData = categoriesData.categories.find(
    (category) => category.id === categoryId,
  );

  return (
    <HomeContainer>
      {currentCategoryData && (
        <CategoryProducts
          products={productsData.products}
          categoryData={currentCategoryData}
        />
      )}
      <Pagination {...productsData.pagination} />
    </HomeContainer>
  );
}
