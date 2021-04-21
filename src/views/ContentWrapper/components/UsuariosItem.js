function UsuariosItem (props){
    return(
     <div className="row container-fluid">
        <div className="col-sm-1 border-bottom">{props.id}</div>
        <div className="col-sm-2 border-bottom">{props.ap}</div>
        <div className="col-sm-2 border-bottom">{props.no}</div>
        <div className="col-sm-4 border-bottom">{props.e}</div>
        <div className="col-sm-1 border-bottom">
           <select>
              <option id="0">Administrador</option>
              <option id="1">Cliente</option>
           </select>
        </div>
        <div className="col-sm-1 border-bottom"><button>Actualizar</button> </div>
    </div>
    );
}

export default UsuariosItem;