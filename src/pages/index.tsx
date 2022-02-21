import { Button, Container, Typography } from "@mui/material";
import {
  FormsElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";
import useIndex from "data/hooks/useIndex.page";
import type { NextPage } from "next";

import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInfomation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import TextField from "ui/components/inputs/TextField/TextField";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

const Home: NextPage = () => {
  const { cep, setCep, cepValido } = useIndex()
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça Os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormsElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />{cepValido}
          <Typography color={"error"}>CEP inválido!</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormsElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              picture={"https://github.com/ClebyFrancisco.png"}
              name={"Cleby Francisco"}
              rating={4}
              description={"Pernambuco"}
            />
            <UserInformation
              picture={"https://github.com/ClebyFrancisco.png"}
              name={"Cleby Francisco"}
              rating={4}
              description={"Pernambuco"}
            />
            <UserInformation
              picture={"https://github.com/ClebyFrancisco.png"}
              name={"Cleby Francisco"}
              rating={4}
              description={"Pernambuco"}
            />
            <UserInformation
              picture={"https://github.com/ClebyFrancisco.png"}
              name={"Cleby Francisco"}
              rating={4}
              description={"Pernambuco"}
            />
            <UserInformation
              picture={"https://github.com/ClebyFrancisco.png"}
              name={"Cleby Francisco"}
              rating={4}
              description={"Pernambuco"}
            />
            <UserInformation
              picture={"https://github.com/ClebyFrancisco.png"}
              name={"Cleby Francisco"}
              rating={4}
              description={"Pernambuco"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
};

export default Home;
