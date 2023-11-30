import React from "react"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const Main = ({ theme, countries, regionPick, searchTerm, ...props }) => {

    return (
        <Container>
             
            {regionPick && regionPick.length > 0 ?
                <Link to="/key"><div style={{ display: "grid", grid: "auto/auto auto auto auto", gap: "75px" }} >
                    {countries.filter(country => country.region === regionPick).map((country) => <Card style={{ width: '18rem', textAlign: 'left', }} key={country.name.common} className={theme} onClick={e => props.func(e, country.name.common)}>
                        <Card.Img variant="top" src={country.flags.svg} style={{
                            width: '100 %',
                            height: '12vw',
                            objectFit: 'cover'
                        }} />
                        <Card.Body>
                            <Card.Title className="fw-bold mb-3">{country.name.common}</Card.Title>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Population:</span> {country.population.toLocaleString()}
                            </Card.Text>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Region:</span> {country.region}
                            </Card.Text>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Capital:</span> {country.capital}
                            </Card.Text>
                        </Card.Body>
                    </Card>)}
                </div></Link> : <Link to="/key"><div style={{ display: "grid", grid: "auto/auto auto auto auto", gap: "75px" }}>
                    {countries.map((country) => <Card style={{ width: '18rem', textAlign: 'left', }} key={country.name.common} className={theme} onClick={e => props.func(e, country.name.common)}>
                        <Card.Img variant="top" src={country.flags.svg} style={{
                            width: '100 %',
                            height: '12vw',
                            objectFit: 'cover'
                        }} />
                        <Card.Body>
                            <Card.Title className="fw-bold mb-3">{country.name.common}</Card.Title>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Population:</span> {country.population.toLocaleString()}
                            </Card.Text>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Region:</span> {country.region}
                            </Card.Text>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Capital:</span> {country.capital}
                            </Card.Text>
                        </Card.Body>
                    </Card>)}
                </div></Link>
            }

            {searchTerm && searchTerm.length > 0 ?
               <Link to="/key"><div style={{ display: "grid", grid: "auto/auto auto auto auto", gap: "75px" }}>
                    {countries.filter(country => country.name.common.toLowerCase() === searchTerm.toLowerCase()).map((country) => <Card style={{ width: '18rem', textAlign: 'left', }} key={country.name.common} className={theme} onClick={e => props.func(e, country.name.common)}>
                        <Card.Img variant="top" src={country.flags.svg} style={{
                            width: '100 %',
                            height: '12vw',
                            objectFit: 'cover'
                        }} />
                        <Card.Body>
                            <Card.Title className="fw-bold mb-3">{country.name.common}</Card.Title>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Population:</span> {country.population.toLocaleString()}
                            </Card.Text>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Region:</span> {country.region}
                            </Card.Text>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Capital:</span> {country.capital}
                            </Card.Text>
                        </Card.Body>
                    </Card>)}
                </div></Link>
                :
                <Link to="/key"><div style={{ display: "grid", grid: "auto/auto auto auto auto", gap: "75px" }}>
                    {countries.map((country) => <Card style={{ width: '18rem', textAlign: 'left', }} key={country.name.common} className={theme} onClick={e => props.func(e, country.name.common)}>
                        <Card.Img variant="top" src={country.flags.svg} style={{
                            width: '100 %',
                            height: '12vw',
                            objectFit: 'cover'
                        }} />
                        <Card.Body>
                            <Card.Title className="fw-bold mb-3">{country.name.common}</Card.Title>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Population:</span> {country.population.toLocaleString()}
                            </Card.Text>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Region:</span> {country.region}
                            </Card.Text>
                            <Card.Text className="my-1">
                                <span className="fw-bold">Capital:</span> {country.capital}
                            </Card.Text>
                        </Card.Body>
                    </Card>)}
                </div></Link>
            }

        </Container>
    )
}

export default Main