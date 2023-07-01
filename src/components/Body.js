
//no key (not acceptable ) <<<< index key(should be the last option to use)  <<< unique key (best practice)
const Body = () => {
    // return <div>
    //     <RestaurantCard/>
    // </div>

    return (
        <div className='restuatant-list'>
            {restuarantList.map((restuarant)=>{
                return <RestaurantCard {...restuarant.data} key={restuarant.data.id} />
            })}

        </div>
    )


}

export default Body