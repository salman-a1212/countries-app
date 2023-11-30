import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Search = ({ regionList, theme, ...props }) => {

    return (
        <div>
            <Container className='my-5 d-flex justify-content-between'>
                <Form className='w-50'>
                    <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlInput1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='position-absolute' style={{
                            left: '0px',
                            padding: '10px 12px'
                        }} />
                        <Form.Control type="text" placeholder="Search for a country" className={`${theme} px-5 input`} onChange={(e) => props.func_2(e.target.value)} />
                    </Form.Group>
                </Form>

                <Form.Select aria-label="Default select example" className={`${theme} w-25 form-select`} onClick={(e) => props.func_1(e.target.value)}>
                    <option>Filter By Region </option>
                    {regionList.map((item => <option key={item.id} >{item.value}</option>))}
                </Form.Select>
                <FontAwesomeIcon icon={faAngleDown} className='position-absolute' style={{
                    right: '120px',
                    padding: '12px 15px'
                }} />
            </Container>
        </div>
    )
}

export default Search