import { toPrice } from "@/app/utils/formatters";
import {
  InvoiceCardButton,
  InvoiceCardContainer,
  InvoiceCardFooterLink,
  InvoiceCardFooterNav,
  InvoiceCardList,
  InvoiceCardTitle,
} from "./invoice-card.styles";

interface InvoiceCardProps {
  subtTotal: number;
  total: number;
  delivery: number;
}

export const InvoiceCard = ({
  delivery,
  subtTotal,
  total,
}: InvoiceCardProps) => {
  return (
    <InvoiceCardContainer>
      <InvoiceCardTitle>Resumo do pedido</InvoiceCardTitle>
      <InvoiceCardList>
        <li>
          <span>Subtotal de produtos</span>
          <span>{toPrice(subtTotal)}</span>
        </li>
        <li>
          <span>Entrega</span>
          <span>{toPrice(delivery)}</span>
        </li>
        <li>
          <span>Total</span>
          <span>{toPrice(total)}</span>
        </li>
      </InvoiceCardList>
      <InvoiceCardButton $variant="purchase">
        Finalizar a compra
      </InvoiceCardButton>
      <InvoiceCardFooterNav>
        <InvoiceCardFooterLink href="/">Ajuda</InvoiceCardFooterLink>
        <InvoiceCardFooterLink href="/">Reembolosos</InvoiceCardFooterLink>
        <InvoiceCardFooterLink href="/">Entregas e frete</InvoiceCardFooterLink>
        <InvoiceCardFooterLink href="/">
          Trocas e devoluções
        </InvoiceCardFooterLink>
      </InvoiceCardFooterNav>
    </InvoiceCardContainer>
  );
};
