import Item from './Item'
import data from '../../data.js'

function matchesSearchTags(el, searchTags){
  const tags = el.brand.concat(" ", el.name);
  return searchTags.every(tag => tags.toLowerCase().includes(tag));
}

export default function Items(props) {
  const searchTags = props.input ? props.input.split(" ") : [];
  const filterData = data.products.filter((el => matchesSearchTags(el, searchTags) && !el.isSold));

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
