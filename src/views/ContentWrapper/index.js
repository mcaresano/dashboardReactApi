
import HeaderUser from "../Header";
import UsuariosItem from "./components/UsuariosItem";
import Footer from "../Footer";
import ProductsList from "./components/ProductsList";
import LoadProducts from "./components/LoadProducts";



function ContentWrapper() {

  
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <div className="banner"></div> 
                <HeaderUser />
               
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Informacion</h1>
                    </div> 
                    <LoadProducts />                             
                    <div className="row">
                        <div className="col mb-4">						
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Productos</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row container-fluid m-0 p-0 ">
                                       <h6 className="col-sm-3 border-bottom card-title">Nombre</h6>
                                       <h6 className="col-sm-3 border-bottom card-title">Cepa</h6>
                                       <h6 className="col-sm-5 border-bottom card-title">Descripcion</h6>
                                       <h6 className="col-sm-1 border-bottom card-title">Precio</h6>
                                    </div>
                                    <ProductsList /> 

                                    </div>
                                   
                            </div>
                        </div>
                    </div>

                   
                    <div className="row">
                        <div className="col mb-4">						
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Usuarios</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row container-fluid">
                                       <div className="col-sm-1 border-bottom">Id</div>
                                       <div className="col-sm-2 border-bottom">Apellido</div>
                                       <div className="col-sm-2 border-bottom">Nombre</div>
                                       <div className="col-sm-4 border-bottom">Email</div>
                                       <div className="col-sm-2 border-bottom">Tipo de Usuario</div>
                                    </div>
                                    <UsuariosItem id="2" ap="Caresano" no="Marcelo" e="marcelo@gmail.com" t="1" />
                                    <UsuariosItem id="3" ap="Caresano" no="Sofia" e="Email" t="0" />
                                    <UsuariosItem id="4" ap="Gurvich" no="Carolina" e="Email" t="0" />
                                    <UsuariosItem id="5" ap="Valenci" no="Tito" e="Email" t="0" />
                                 </div>
                            </div>
                        </div>
                    </div>


                   
                   

                </div>
            </div>
        
            <Footer />
        
        
    </div>
    );
    }
    
    export default ContentWrapper;