"use client";
import * as Ariakit from "@ariakit/react";
import { SearchLoupeIcon } from "@/app/assets/icons/search-loupe";
import { FormWrapper, Input, InputWrapper } from "./search-input.styles";

const SearchInput = () => {
  const form = Ariakit.useFormStore({ defaultValues: { search: "" } });

  form.useSubmit(async (state) => {
    alert(JSON.stringify(state.values));
  });

  return (
    <FormWrapper store={form} aria-labelledby="pesquise-por-uma-palavra-chave">
      <InputWrapper>
        <Input
          name={"search"}
          type="text"
          placeholder="Procurando por algo específico?"
        />
        <SearchLoupeIcon title="Icone de pesquisa" />
      </InputWrapper>
    </FormWrapper>
  );
};

export default SearchInput;
