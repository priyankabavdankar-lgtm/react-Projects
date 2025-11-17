import {useNavigate} from 'react-router-dom'

export function Card({data}) {

    let navigate=useNavigate()
    function handleClick(id){
        navigate(`/detail/${id}`)
    }
    return(
        <>
        <div className="mt-5 col-md-4">
            <div className="card">
                <div className="card-body" onClick={() => handleClick(data.id)}>

                    <img src={data.image} alt="" width="100%" height="280px" className='d-block'/>
                    <h6 style={{whiteSpace:"no-wrap", overflow:"hidden", textOverflow:"ellipsis"}}>{data.title}</h6>
                    <p>{data.price}</p>
                </div>
            </div>
        </div>
        </>
    )
}