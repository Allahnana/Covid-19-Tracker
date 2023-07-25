import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import covid19 from '../Images/covid19.png';
import symptom from '../Images/symptom.png';
import risk from '../Images/risk.png';
import doctor from '../Images/doctor.png';
import { Container, Col, Row } from 'react-bootstrap';


export class About extends Component {
  render() {
    return (
      <div style={{ marginTop: '70px', marginLeft: '50px' }}>
        <h3>About Covid19</h3>
        <p>An up-to-date rundown about the virus and it's sysmtoms</p>


        <Card
          body
          style={{
            backgroundColor: '',
            borderColor: 'red',
            marginBottom: '5px',
            marginRight: '10px',
            paddingLeft: '5px',
          }}
        >
          <CardTitle style={{ marginTop: '-10px' }}>
  
          <Col>
          <img src={covid19} alt="COVID-19" className="ml-2" width={30} height={30} />
          <strong> What is COVID-19 </strong>
            <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. 
              Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness.
               Anyone can get sick with COVID-19 and become seriously ill or die at any age.  </p>
          </Col>
          </CardTitle>

          <a className='text-center' href='https://www.who.int/health-topics/coronavirus#tab=tab_1'>
            Read more
          </a>
        </Card>
        <Card
          body
          style={{
            backgroundColor: '',
            borderColor: 'red',
            marginBottom: '5px',
            marginRight: '10px',
            paddingLeft: '5px',
          }}
        >
          <CardTitle style={{ marginTop: '-10px' }}>
  
          <Col>
          <img src={symptom} alt="COVID-19" className="ml-2" width={30} height={30} />
          <strong> What are COVID-19 Symptoms? </strong>
            <p>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. 
              Symptoms may appear 2-14 days after exposure to the virus. Anyone can have mild to severe symptoms. </p>
          </Col>
          </CardTitle>

          <a className='text-center' href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'>
            Read more
          </a>
        </Card>
        <Card
          body
          style={{
            backgroundColor: '',
            borderColor: 'red',
            marginBottom: '5px',
            marginRight: '10px',
            paddingLeft: '5px',
          }}
        >
          <CardTitle style={{ marginTop: '-10px' }}>
  
          <Col>
          <img src={risk} alt="RISK" className="ml-2" width={30} height={30} />
          <strong> Who is at high risk for COVID-19? </strong>
            <p>COVID-19 is often more severe in people who are older than 60 years or who have health conditions like lung or heart disease, 
              diabetes or conditions that affect their immune system.​
              If you’re at high risk, know what to do, and take the right actions now to protect yourself.​
              If you’re not at high risk, do your part to prevent the spread of coronavirus to those who are.  </p>
          </Col>
          </CardTitle>

          <a className='text-center' href='https://www.who.int/westernpacific/emergencies/covid-19/information/high-risk-groups'>
            Read more
          </a>
        </Card>
        <Card
          body
          style={{
            backgroundColor: '',
            borderColor: 'red',
            marginBottom: '5px',
            marginRight: '10px',
            paddingLeft: '5px',
          }}
        >
          <CardTitle style={{ marginTop: '-10px' }}>
  
          <Col>
          <img src={doctor} alt="DOCTOR" className="ml-2" width={30} height={30} />
          <strong> When should I see a Doctor? </strong>
            <p>COVID-19 is a viral infection transmitted from human-to-human via respiratory droplets or by lacking hygiene measurements — such as regular hand washing habits — after being exposed to contaminated surfaces.
             The incubation time for COVID takes around 2 to 14 days — the time from which you may not present symptoms after your first exposure to the virus.
             In this article, we will elaborate on recommendations based on the CDC guidelines for those who have been exposed to COVID-19 or suspect to be showing potential symptoms of illness. </p>
          </Col>
          </CardTitle>

          <a className='text-center' href='https://www.bassadvancedurgentcare.com/post/when-should-i-see-a-doctor-for-covid-19'>
            Read more
          </a>
        </Card>


    
        <p>Version : 1.0.0 </p>
      </div>
    );
  }
}

export default About;
