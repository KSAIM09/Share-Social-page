import './SharePage.css';
function SharePage () {
    return(
        <>
            <div className="main">
                <nav>
                    <div className="search">
                        <input type="text" placeholder="Search store" />
                        <span></span>
                    </div>
                    <div className="navbtn">
                        <a href="">Discover</a>
                        <a href="">Browse</a>
                        <a href="">News</a>
                    </div>
                </nav>

                <div className="someHead">
                        <h2>Overview</h2>
                        <h2>Achievements</h2>
                </div>
                <div className="content">
                    
                    <div className="left">
                        <div className="l-con">
                            <img alt='#' />
                            <button>SHOW MORE</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="r-con"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SharePage;