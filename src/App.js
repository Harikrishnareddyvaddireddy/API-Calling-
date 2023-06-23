import './App.css';
import './loder.css';
import './API.css';
import API from './API.js'
import { useState ,useEffect} from 'react';
function App() {
  const [products,setProducts] = useState([])

useEffect(
  ()=> {
    gettingdata()
  },[]
)
async function gettingdata(){
   let data =  await fetch('https://fakestoreapi.com/products');
   let productlist = await data.json();
   setProducts(productlist)
    console.log(productlist)
}






  if(products.length===0){
    return(
<div className="loader">
  <div className="loader-inner">
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
    <div className="loader-line-wrap">
      <div className="loader-line" />
    </div>
  </div>
</div>  
 )
  }
  return (
    <div className="product-list">
    {

  products.map((p) => (
    <API
      image={p.image}
      title={p.title}
      price={p.price}
      rating={p.rating}
      key={p.id}
    />
  )) 
    }

</div>  );
}

export default App;
