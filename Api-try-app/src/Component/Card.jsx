export function Card ({data}) {

    return(
        <>
        <div className="col-md-3 mt-5">
            <div className="card">
                <h6 style={{whiteSpace:"nowrap", overflow:"hidden" , textOverflow:"ellipsis"}}>{data.title}</h6>
                <p>{data.userId}</p>
            </div>
        </div>
        </>
    )
}