import CartWidget from "../CartWidget/CartWidget.js"


const NavBar = () => {
    return (
        <nav>
            <section className="hero is-primary">
                    <div className="hero-body">
                        <p className="title">Om Shanati</p>
                        <div>
                            <button>Sahumerios</button>
                            <button>Generales</button>
                            <button>Indumentaria</button>
                        </div>
                    
                </div>
            </section>
            <CartWidget/>
        </nav>

    )


}

export default NavBar