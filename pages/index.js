import Plans from "../components/Plans";
import Main from "../components/Main";
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';


import Head from 'next/head'


function PrincipalPage(props){

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"/>
      </Head>
      
      <Header></Header>
      <Main></Main>
      <Cards></Cards>
      <Plans></Plans>
      <Footer></Footer>
      
    </div>
  )
};

export default PrincipalPage;