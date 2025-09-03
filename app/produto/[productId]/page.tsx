import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BackArrowIcon } from "@/app/assets/icons/back-arrow";
import { CartIcon } from "@/app/assets/icons/cart";
import { Button } from "@/app/components/ui/button";
import type { TCategoriesResponse, TProductResponse } from "@/app/types/api";
import { toPrice } from "@/app/utils/formatters";
// Styles
import {
  AddToCartButton,
  ProductIdPageContainer,
  ProductIdPageContent,
  ProductIdPageImageContainer,
  ProductIdPageInfoCategory,
  ProductIdPageInfoContainer,
  ProductIdPageInfoDescription,
  ProductIdPageInfoDescriptionLabel,
  ProductIdPageInfoPrice,
  ProductIdPageInfoTitle,
  ProductIdPageInfoWrapper,
} from "./_components/product-id-page.styles";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { productId } = await params;

  // fetch data
  const { product } = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
  ).then((res) => res.json())) as TProductResponse;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product.name} | InsanyShop`,
    openGraph: {
      images: [product.image, ...previousImages],
    },
  };
}

export default async function Page({ params }: Props) {
  const { productId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
  );

  const categoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
  );

  const categories = (await categoriesRes.json()) as TCategoriesResponse;

  const productData = (await res.json()) as TProductResponse;
  const productCategory = categories.categories.find(
    (category) => category.id === productData.product.category,
  );

  return (
    <ProductIdPageContainer>
      <ProductIdPageContent>
        <Link href="/">
          <Button variant="link" size="sm">
            <BackArrowIcon title="Voltar" />
            Voltar
          </Button>
        </Link>
        <ProductIdPageInfoWrapper>
          <ProductIdPageImageContainer>
            <Image
              src={productData.product.image}
              alt={productData.product.name}
              width={640}
              height={580}
            />
          </ProductIdPageImageContainer>
          <ProductIdPageInfoContainer>
            <ProductIdPageInfoCategory>
              {productCategory?.name ?? productData.product.category}
            </ProductIdPageInfoCategory>
            <ProductIdPageInfoTitle>
              {productData.product.name}
            </ProductIdPageInfoTitle>
            <ProductIdPageInfoPrice>
              {toPrice(productData.product.price)}
            </ProductIdPageInfoPrice>
            <ProductIdPageInfoDescriptionLabel>
              Descrição
            </ProductIdPageInfoDescriptionLabel>
            <ProductIdPageInfoDescription>
              {productData.product.description}
            </ProductIdPageInfoDescription>
            <AddToCartButton>
              <CartIcon title="Icone de carrinho" />
              Adicionar ao carrinho
            </AddToCartButton>
          </ProductIdPageInfoContainer>
        </ProductIdPageInfoWrapper>
      </ProductIdPageContent>
    </ProductIdPageContainer>
  );
}
