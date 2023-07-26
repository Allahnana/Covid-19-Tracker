import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
// import covid19 from '../Images/covid19.png';
// import symptom from '../Images/symptom.png';
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
          {/* <img src={covid19} alt="COVID-19" className="ml-2" width={30} height={30} /> */}
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
      </div>
    );
  }
}

export default About;
