import type { TCategory } from "@/app/types/api";
import {
  CategoryBody,
  CategoryCardContainer,
  CategoryTitle,
} from "./category-card.styles";

interface CategoryCardProps {
  category: TCategory;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <CategoryCardContainer href={`/categoria/${category.id}`}>
      <CategoryTitle>{category.name}</CategoryTitle>
      <CategoryBody>{category.productCount} produtos</CategoryBody>
    </CategoryCardContainer>
  );
};
