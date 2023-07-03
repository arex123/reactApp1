
import { useState } from 'react'
import {restaurantList} from '../constants.js'
import RestaurantCard from './RestrurantCard.js'
//no key (not acceptable ) <<<< index key(should be the last option to use)  <<< unique key (best practice)
const Body = () => {

    let [searchText,setSearchText] = useState()

    let [filterdDataList, setFilteredDataList] = useState(restaurantList)
    
    function filterData(name){
        console.log("name 11",name)
        console.log(restaurantList)

        let newFilterData = restaurantList.filter((item)=>item.data.name.toLowerCase().includes(name))
        console.log("filtered ",newFilterData )
        setFilteredDataList(newFilterData)
    }
    return (
        <>
        <div className='search-container'>
            <input value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>filterData(searchText)}>search</button>
        </div>
        <div className='restuatant-list'>


            {filterdDataList.map((restuarant)=>{
                return <RestaurantCard {...restuarant.data} key={restuarant.data.id} />
            })}

        </div>
        </>
    )


}

export default Body