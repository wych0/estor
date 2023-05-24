import Item from './Item'
import { getProducts } from '../../apiCalls/product'
import { useState, useEffect } from 'react'

function matchesSearchTags(el, searchTags){
  const tags = el.brand.concat(" ", el.name)
  return searchTags.every(tag => tags.toLowerCase().includes(tag))
}

export default function Items(props) {
  const searchTags = props.input ? props.input.split(" ") : []
  const [products, setProducts] = useState([])
  useEffect(()=>{
    getProducts().then((products)=> setProducts(products))
  }, [])
  const filterData = products.filter((el => matchesSearchTags(el, searchTags) && !el.isSold))

    return (
      <div className="boxItems"> 
        <ul className="listItems flex wrap centerX">
          {filterData.map((item) => (
            <li key={item._id} className="listItem"><Item itemId={item._id} brand={item.brand} name={item.name} price={item.price}></Item></li>
          ))}
        </ul> 
      </div>
    );
  }
