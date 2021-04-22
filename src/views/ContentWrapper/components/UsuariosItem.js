
function UsuariosItem (props){
  
    return(
     <div className="row container-fluid">
        <div className="col-sm-2 border-bottom">{props.lastName}</div>
        <div className="col-sm-2 border-bottom">{props.name}</div>
        <div className="col-sm-4 border-bottom">{props.email}</div>
        <div className="col-sm-1 border-bottom">{props.administrador}</div>
      
    </div>
    );
}

export default UsuariosItem;