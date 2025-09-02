import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./category-breadcrumb.styles";

interface CategoryBreadcrumbProps {
  currentCategoryName: string;
}

export const CategoryBreadcrumb = ({
  currentCategoryName,
}: CategoryBreadcrumbProps) => {
  return (
    <nav>
      <BreadcrumbList>
        <BreadcrumbLink href="/">Produtos</BreadcrumbLink>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>{currentCategoryName}</BreadcrumbItem>
      </BreadcrumbList>
    </nav>
  );
};
