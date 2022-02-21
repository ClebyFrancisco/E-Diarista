import { useMemo, useState } from "react";
import { UseShortInterface } from "data/@types/UseInterface";
import { ValidationService } from "data/services/ValidationService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
  cepValido = useMemo(() => {
      return ValidationService.cep(cep);
  }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diarista, setDiarista] = useState([] as UseShortInterface[]),
    [ diaristaRestante, setDiaristaRestante ] = useState(0);


  return {
    cep,
    setCep,
    cepValido,
  };
}
