import Header from "./Header"
import { Outlet, Link } from "react-router-dom"
import { Fragment } from 'react'
const Layout = () => {
    return (
        <Fragment>
            <>
            <Link to="/">
                <Header/>
            </Link>
            </>
            <Outlet />

        </Fragment>
    )
}

export default Layout