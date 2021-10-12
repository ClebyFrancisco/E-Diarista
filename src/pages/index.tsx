import type { NextPage } from "next";

import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInfomation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça Os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        picture={"https://github.com/ClebyFrancisco.png"}
        name={"Cleby Francisco"}
        rating={4}
        description={"Pernambuco"}
      />
    </div>
  );
};

export default Home;
