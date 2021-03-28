import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Title>
                Ipad Pro
            </Title>
            <Price>
                $1500
            </Price>
            <Rating>
            ⭐⭐⭐⭐
            </Rating>
            <Image src="https://i5.walmartimages.com/asr/468df99c-ddd2-4013-a617-ab06010a0c99_1.e28658ae062f86f1c1f1ff5dc722d3e5.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"/>
            <ActionDiv>
                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>
            </ActionDiv>

        </Container>
    )
}

export default Product
const Container = styled.div`
    background-color: white;
    z-index: 100;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`
const Title = styled.span``
const Price = styled.span`
    font-weight: 500;    
    margin-top 3px;
`
const Rating = styled.div`
    padding-top: 2px;
    padding-bottom: 2px;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`
const ActionDiv = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`