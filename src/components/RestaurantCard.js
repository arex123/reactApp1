
const RestaurantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
    return (
        <div className='card'>
            <img src='https://th.bing.com/th/id/OIP.hucFmNcpLJG4iN9hgSBc9gHaEq?pid=ImgDet&rs=1'></img>
            <h2>{name}</h2>
            <h3>{cuisines.joins(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h4>Rs. {costForTwo/100} For Two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard