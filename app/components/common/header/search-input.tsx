"use client";
import * as Ariakit from "@ariakit/react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchLoupeIcon } from "@/app/assets/icons/search-loupe";
import { FormWrapper, Input, InputWrapper } from "./search-input.styles";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = Ariakit.useFormStore({
    defaultValues: { search: searchParams.get("search") || "" },
  });

  form.useSubmit(async (state) => {
    if (state.values.search === "") {
      router.push(`/`);
    } else {
      const search = new URLSearchParams(state.values);
      router.push(`/?${search}`);
    }
  });

  return (
    <FormWrapper store={form}>
      <InputWrapper>
        <Input
          name={form.names.search}
          type="text"
          placeholder="Procurando por algo específico?"
          aria-labelledby="pesquise-por-uma-palavra-chave"
        />
        <SearchLoupeIcon title="Icone de pesquisa" />
      </InputWrapper>
    </FormWrapper>
  );
};

export default SearchInput;
