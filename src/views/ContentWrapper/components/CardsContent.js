
function CardsContent (props){

    return(
        <div className="col-md-3 mb-3">
           <div className={props.border}>
              <div className="card-body">
                 <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                       <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {props.title}</div>
                       <div className="h5 mb-0 font-weight-bold text-gray-800">{props.valor}</div>
                    </div>
                    <div className="col-auto">
                       <i className={props.i}></i>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    );
}

export default CardsContent ;