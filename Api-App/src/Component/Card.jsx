function Card ({data}) {

    return(
        <>
        <div className="col-md-3 mt-5">
            <div className="card">
                <div className="card-header">
                    <img src={data.image} alt="" className="w-100" height="200px"/>
                </div>
                <div className="card-body">
                    <h6 style={{whiteSpace: "nowrap", overflow:"hidden", textOverflow: "ellipsis"}}>{data.title}</h6>
                    <p>{data.price}</p>
                    <p>{data.rating.rate}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card