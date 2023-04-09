import Item from '../components/Item'
import products from '../products.json'

function matchesSearchTags(el, searchTags){
  const tags = el.brand.concat(" ", el.name);
  return searchTags.every(tag => tags.toLowerCase().includes(tag));
}

function Items(props) {
  const searchTags = props.input ? props.input.split(" ") : [];
  const filterData = products.filter(el => matchesSearchTags(el, searchTags));
  
    return (
      <div className="boxItems"> 
        <ul className="listItems flex wrap centerX">
          {filterData.map((item) => (
            <li key={item.id} className="listItem"><Item itemId={item.id} brand={item.brand} name={item.name} price={item.price}></Item></li>
          ))}
        </ul> 
      </div>
    );
  }
  
  export default Items;