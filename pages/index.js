import Plans from "../components/Plans";
import Main from "../components/Main";
import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';


import Head from 'next/head'


function PrincipalPage(props){
  const info_plan = [
      {
      "name": "SILVER",
      "slogan": "Healthcare at your fingerprints",
      "price": 50,
      "services": [
      {
        "id":1,
        "name": "Emergency services 24/7",
        "active": true
      }, 
      {  
        "id":2,
        "name": "Hospitalization services",
        "active": true
      },
      {
        "id":3,
        "name": "Basic dental services",
        "active": true
      },
      {   
        "id":4,
        "name": "Special procedures",
        "active": false
      },
      {
        "id":5,
        "name": "Email and community support",
        "active": false
      },
    ]
 }, 



        {
          "name": "GOLD",
          "slogan": "Healthcare at your fingerprints",
          "price": 50,
          "services": [
        {
          "id":1,
          "name": "Emergency services 24/7",
          "active": true
        }, 
        {  
          "id":2,
          "name": "Hospitalization services",
          "active": true
        },
        {
          "id":3,
          "name": "Basic dental services",
          "active": true
        },
        {   
          "id":4,
          "name": "Special procedures",
          "active": false
        },
        {
          "id":5,
          "name": "Email and community support",
          "active": false
        },
    ]
  }, 

        {
          "name": "DIAMOND",
          "slogan": "Healthcare at your fingerprints",
          "price": 50,
          "services": [
          {
          "id":1,
          "name": "Emergency services 24/7",
          "active": true
        }, 
        {  
          "id":2,
          "name": "Hospitalization services",
          "active": true
        },
        {
          "id":3,
          "name": "Basic dental services",
          "active": true
        },
        {   
          "id":4,
          "name": "Special procedures",
          "active": false
        },
        {
          "id":5,
          "name": "Email and community support",
          "active": false
        },
    ]
  }, 

]
  const list_plans = info_plan.map( plan => 
     <Plans key={plan.name} info_services={plan}></Plans>
   ) 
  
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"/>
      </Head>
      
      <Header></Header>
      <Main></Main>
      <Cards></Cards>
      {list_plans}
      <Footer></Footer>
      
    </div>
  )
};

export default PrincipalPage;