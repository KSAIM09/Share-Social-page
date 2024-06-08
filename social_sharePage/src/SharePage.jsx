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
                        <div className="r-con">
                            <div className="right-btn-top">
                                <button id='btn1'>ADD TO CART</button>
                                <button id='btn2'>ADD TO WISHLIST</button>
                            </div>
                            <div className='box'>
                                <p className='left-side'>Epic Rewards</p>
                                <p className='right-side'>Earn 5% Back</p>
                            </div>

                            <div className='box'>
                                <p className='left-side'>Refund Type</p>
                                <p className='right-side'>Refundable</p>
                            </div>

                            <div className='box'>
                                <p className='left-side'>Developer</p>
                                <p className='right-side'>Criterion Games</p>
                            </div>

                            <div className='box'>
                                <p className='left-side'>Publisher</p>
                                <p className='right-side'>Electronic Arts</p>
                            </div>

                            <div className='box'>
                                <p className='left-side'>Release Date</p>
                                <p className='right-side'>11/29/22</p>
                            </div>

                            <div className='box'>
                                <p className='left-side'>Initial Release</p>
                                <p className='right-side'>12/02/22</p>
                            </div>

                            <a href="#">See All Editions and Add-Ons</a>

                            <div className="bottom-btn">
                                <button id='sharebtn'>SHARE</button>
                                <button>REPORT</button>
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className="share-box">
                    <div className="share-con">
                        <span><i class="ri-close-large-line"></i></span>
                        <div className='middle'>
                            <h1>Share Game</h1>
                            <p>Select a Social Network to Share to.</p>
                            <div className='icons'>
                                <span><i class="ri-facebook-circle-fill"></i></span>
                                <span><i class="ri-twitter-fill"></i></span>
                                <span><i class="ri-discord-fill"></i></span>
                            </div>

                        </div>

                        <div className="share-link">
                            <p>https://store.epicgames.com/en-US/p/need-f...</p>
                            <span id='copy'><i class="ri-file-copy-line"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SharePage;