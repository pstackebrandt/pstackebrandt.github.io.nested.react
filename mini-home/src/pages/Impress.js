import React from 'react';
import Container from 'react-bootstrap/Container';

function Impress() {

    return (
        <Container className="d-flex justify-content-center">
            <h1>Impress</h1>
            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>Peter Stackebrandt<br />
                Wei&szlig;ensee<br />
                27<br />
                90537 Feucht</p>

            <h2>Kontakt</h2>
            <p>E-Mail: info.stackebrandt@gmail.com</p>

            <h2>Redaktionell verantwortlich</h2>
            <p>Peter Stackebrandt</p>

            <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
        </Container>
    );
}


export default Impress;
