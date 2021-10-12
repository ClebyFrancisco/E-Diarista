import type { NextPage } from 'next';

import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';


const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
      title={"Conheça Os profissionais"}
      subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}/>
     
    </div>
  )
}

export default Home
