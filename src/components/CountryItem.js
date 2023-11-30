import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CountryItem = ({ countries, theme, selectedCountry }) => {

  return (
    <Container>
      <Link to='/'>
        <Button variant="light" className={`${theme}`}><FontAwesomeIcon icon={faArrowLeft} className={`${theme} px-2`} />Back</Button>
      </Link>
      <div className='my-5'>
        {countries.filter(country => country.name.common === selectedCountry).map((country) => <Row>
          <Col>
            <Image src={country.flags.svg} style={{
              width: '100 %',
              height: '20vw',
              objectFit: 'cover'
            }} />
          </Col>
          <Col>
            <h2 className='fw-bold'>{country.name.common}</h2>
            <Row>
              <Col>
                <p>Native Name: {country?.name?.nativeName?.eng?.official}</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
                <p>Border: {country.borders + ","}</p>
              </Col>
              <Col>
                <p>Top Level Domain: </p>
                <p>Currencies: {country?.currencies?.name}</p>
                <p>Languages: {country?.languages?.name}</p>
              </Col>
            </Row>
          </Col>
        </Row>)}
      </div>
    </Container>
  )
}

export default CountryItem