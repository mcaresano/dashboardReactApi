function Venta (props){
    return(
        <div className="row container-fluid">
           <div className="col-sm-1 border-bottom">{props.f}</div>
           <div className="col-sm-2 border-bottom">{props.n}</div>
           <div className="col-sm-3 border-bottom">{props.cl}</div>
           <div className="col-sm-2 border-bottom">{props.ctd}</div>
           <div className="col-sm-2 border-bottom">{props.i}</div>
           <div className="col-sm-1 border-bottom">+</div>
        </div>
    )
}
export default Venta;