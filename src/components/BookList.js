export default function BookList(props){
    return(
        <div className="row m-2 p-4" style={{border: '2px solid grey'}}>
            <div className="col-lg-3">
                <img 
                src={props.cover}
                width={'200px'}
                height={'150px'}
                alt={'Cover'} />
            </div>

            <div className="col-lg-9">
                <h3>ISBN: {props.isbn} </h3>
                <h5>Title: {props.title} </h5>
                <h5>Creator: {props.creator}  </h5>
                <h5>Publisher: {props.publisher} </h5>
                <h5>
                Rating: 
                <h5>
                
                <i className="fa fa-star"></i>
                    </h5>
                </h5>
                
                <h5>Progress:
                <div className="progress">
                <div className="progress-bar" role="progressbar" style={{widht: '${props.progress}%'}}
                 aria-valuenow={props.progress} 
                 aria-valuemin="0" 
                 aria-valuemax="100"> 
                        {'${props.progress}%'}</div>
                </div>
                </h5>
            </div>
        </div>
    )
}