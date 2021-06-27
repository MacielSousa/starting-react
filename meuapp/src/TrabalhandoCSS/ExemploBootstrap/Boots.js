import React from 'react';
import Card from 'react-bootstrap/Card'
const Boots = () => {
    return <Card bg="dark" className=" text-white m-5" style={{ maxWidth: '18rem' }}>
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
            <Card.Title>R$ 2500</Card.Title>
            <Card.Text>
                Esse é um notebook com 1tb, 16GB de ram e placa de vídeo de 16GB.
            </Card.Text>
        </Card.Body>
    </Card>
}

export default Boots;