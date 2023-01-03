import { ProductList } from './ProductList';
import {Navbar,Container,Nav} from 'react-bootstrap';
// import Navbarfrom
const Product=()=>{
   const handleClick=(p)=>{
  alert(`Name:${p.name}``Price:${p.price}``Description:${p.des}`);

            console.log(p);
  }
    return(
        <>
        <Container>
<Navbar.Collapse>
    <Nav>
        <Nav.Link href="/">Header</Nav.Link>
        <h2 className="product">Product</h2>
        <div>
        {ProductList.map(p => {
            return(

    <div className='card' key={p.name}>
        <div>
            <h4>{p.id}</h4>

            <h4>{p.name}</h4>

            <h4>${p.price}</h4>

            <p>{p.description}</p>

            <button onClick={()=>handleClick(p)}>Submit</button>

        </div>
     </div>
            )
        }
        )
    }
        </div>

    </Nav>
</Navbar.Collapse>
        </Container>
       
        </>
    )
}
export default Product;