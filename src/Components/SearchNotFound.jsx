import React from 'react';
import { Container } from 'react-bootstrap';
const SearchNotFound = () => {
    return (
        <>
            <Container fluid="md" className=" d-flex flex-column align-items-center justify-content-center">
                <h1>Something's wrong here...</h1>
                <p>The car data is empty. Try again?</p>
            </Container>
        </>
    );
};

export default SearchNotFound;
