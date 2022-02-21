import { useMemo, useState } from "react";
import { UseShortInterface } from "data/@types/UseInterface";
import { ValidationService } from "data/services/ValidationService";
import { apiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
  cepValido = useMemo(() => {
      return ValidationService.cep(cep);
  }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UseShortInterface[]),
    [ diaristasRestantes, setDiaristasRestantes ] = useState(0);

    async function buscarProfissionais(cep: string){
        setBuscaFeita(false);
        setCarregando(true);
        setErro("");

        try {
            const { data } = await apiService.get<{
              diaristas: UseShortInterface[];
              quantidade_diaristas: number;
            }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
            setDiaristas(data.diaristas);
            setDiaristasRestantes(data.quantidade_diaristas);
            setBuscaFeita(true);
            setCarregando(false);
        } catch (error) {
            setErro("CEP não encontrado");
            setBuscaFeita(false);
            setCarregando(false);
        }
        
        

        
    }


  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes
  };
}
