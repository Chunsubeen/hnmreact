import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Dropdown, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState(null)

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/Chunsubeen/hnmreact/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className='product-img'>
                    <img src={product?.img} />
                </Col>
                <Col xs={12} md={6}>
                    <div>{product?.title}</div>
                    <div>\{product?.price}</div>
                    <div className="choice">
                        {product?.choice ? "Conscious choice" : ""}
                    </div>

                    <Dropdown className="drop-down">
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {product?.size.length > 0 &&
                                product.size.map((item) => (
                                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                                ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button  className="add-button">
                        추가
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail
