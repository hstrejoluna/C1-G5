import Plans from "../components/Plans";
import Main from "../components/Main";
import Head from 'next/head'


function PrincipalPage(props){
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"/>
      </Head>
      
      <Main></Main>
      <Plans></Plans>
      
    </div>
  )
};

export default PrincipalPage;