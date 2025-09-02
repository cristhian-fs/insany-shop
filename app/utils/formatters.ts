export const toPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
