import React,{useState} from 'react'

const Tour = ({id,image,info,price,name,removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="single-tour">
            <div className="tour-img">
                <img src={image} alt={name}/>
            </div>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button className="readmore" onClick={()=>setReadMore(!readMore)}>
                        {readMore ? 'Show Less':'Read More'}
                    </button>
                </p>
                <button className="custom-btn btn-2" onClick={()=>{
                    removeTour(id)
                }}>Not Interested</button>
            </footer>
        </div>
    )
}

export default Tour
