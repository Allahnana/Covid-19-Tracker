import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export class Prevention extends Component {
  render() {
    return (
      <div style={{ marginTop: '70px' }}>
      
        <Card
          body
          style={{
            backgroundColor: '',
            borderColor: 'red',
            marginBottom: '5px',
            paddingTop: '30px',
            marginRight:'10px',
            marginLeft:'10px'
          }}
        >
          <CardTitle style={{ marginTop: '-10px' }}>
            <strong>Hey </strong>
            <p>On January 30, 2020, the WHO declared the COVID-19 outbreak a public health emergency of international concern and, 
            in March 2020, began to characterize it as a pandemic in order to emphasize the gravity of the situation and urge all countries to take action in detecting infection and preventing spread.
            Unfortunately, there is no medication that has been approved by the FDA, gone through controlled studies and demonstrated an effect on the virus for this global pandemic.
            Although there are cures for illnesses and developments made by leaps and bounds in our day, 
            the strongest and most effective weapon that society has against this virus that is affecting not just health but also economics,
            politics, and social order, is the prevention of its spread. The main points in preventing the spread in society are hand hygiene,
            social distancing and quarantine. With increased testing capacity, 
            detecting more COVID-19 positive patients in the community will also enable the reduction of secondary cases with stricter quarantine rules.</p>
          </CardTitle>
        </Card>
       
      </div>
    );
  }
}

export default Prevention;
