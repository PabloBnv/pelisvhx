import './header.css'

function Header() {

    return (
        <><header className="headerclass">
            <div className='logodiv'>
                <img src="vhxlogo.gif" className='logo'></img>
                <h1>| Pelis Vhx |</h1>
            </div>
            
            <div className='divdrop'>
                <div className="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>

        </header>


        </>

    )

}

export default Header