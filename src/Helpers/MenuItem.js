function MenuItem({img,name,price})
{
    return(
        <div className="menuItem">
            <div  style={{backgroundImage:`url(${img})`}}></div>
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    );
}
export default MenuItem;