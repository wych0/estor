import Item from '../components/Item'
import data from '../data.json'

function Items(props) {
  const filterData = data.filter((el)=>{
    const tags = el.brand.concat(" ", el.name);
    const searchTags = props.input.split(" ");
    let display = false;
    if(props.input === ''){
      return el;
    } else{
      for(let i=0; i<searchTags.length; i++){
        if(tags.toLowerCase().includes(searchTags[i])){
          display=true;
        }else{
          display=false;
          break;
        }
      }
      if(display === true){
        return el;
      }
    }
  })
    return (
      <div className="boxItems"> 
        <ul className="listItems">
          {filterData.map((item) => (
            <li key={item.id} className="listItem"><Item brand={item.brand} name={item.name} price={item.price}></Item></li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Items;