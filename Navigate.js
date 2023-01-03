import React from "react";

import {Navbar,Container,Nav} from 'react-bootstrap';



const Navigate = () => {

    return (

        <>

            <Navbar>

                <Container>

                    <Navbar.Collapse>

                        <Nav>

                            <Nav.Link href="/Product">Product</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>



        </>

    )

}



export default Navigate;