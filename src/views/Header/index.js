import HeaderIcon from "./HeaderIcon"

function HeaderUser (props) {
return (
<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
    <i className="fa fa-bars"></i>
</button>

<ul className="navbar-nav ml-auto">

    <HeaderIcon icono="fas fa-bell fa-fw" color="badge badge-success badge-counter" cantidad="3+"/>
    <HeaderIcon icono="fas fa-shopping-cart fa-fw" color="badge badge-danger badge-counter" cantidad="4"/>
    <HeaderIcon icono="fas fa-envelope fa-fw" color="badge badge-info badge-counter" cantidad="2"/>

    <div className="topbar-divider d-none d-sm-block"></div>

    <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Usuario Administrador</span>
        </a>
    </li>

</ul>

</nav>
);
}

export default HeaderUser;