export default function TahuList(props) {
    return(
        <div className="container form-control" style={{fontFamily:`sans-serif`}}>
        <div class="card-body">
        <div class="row row-cols-4">
       
            <div className="col-3 bg-light">
                <small>Tanggal</small>
                <h5>{props.Tanggal}</h5>
            </div>
            <div className="col-3 bg-info">
                <small>Stok Awal</small>
                <h5>{props.StokAwal}</h5>
            </div>
            <div className="col-3 bg-success">
                <small>Terjual</small>
                <h5>{props.Terjual}</h5>
            </div>
            <div className="col-3 bg-danger">
                <small>Rusak</small>
                <h5>{props.Rusak}</h5>
            </div>
            <div className="col-2 bg-secondary">
                 <small>Keuntungan</small>
                 <h5>{props.Keuntungan}</h5>
            </div>
            <h5>Persentase:
                <div className="persentase">
                <div className="progress-bar" role="progressbar" style={{widht: `${props.persentase}%`}}
                 aria-valuenow={props.persentase} 
                 aria-valuemin="0" 
                 aria-valuemax="70"> 
                        {`${props.persentase}%`}</div>
                </div>
                </h5>
        </div>
      </div>
    </div>
    )
}