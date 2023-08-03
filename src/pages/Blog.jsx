import React from 'react';


const Blog = () => {
  return (
    <>
        {/* Breadcrumb Section Begin */}
        <section
            className="breadcrumb-section set-bg"
            data-setbg="img/breadcrumb.jpg"
            style={{ backgroundImage: 'url("img/breadcrumb.jpg")' }}
        >
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                    <h2>Blog</h2>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Blog Section Begin */}
        <section className="blog spad">
        <div className="container">
            <div className="row">
            <div className="col-lg-4 col-md-5">
                <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                    <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><span className="icon_search" /></button>
                    </form>
                </div>
                <div className="blog__sidebar__item">
                    <h4>Categories</h4>
                    <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Phone</a></li>
                    <li><a href="#">Leptop</a></li>
                    <li><a href="#">Camera</a></li>
                    <li><a href="#">spiker</a></li>
                    </ul>
                </div>
                <div className="blog__sidebar__item">
                    <h4>Recent News</h4>
                    <div className="blog__sidebar__recent">
                    <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic"> 
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                        <h6>Samsung  <br /></h6>
                        <span>MAR 05, 2019</span>
                        </div>
                    </a>
                    <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                        <h6>Sony<br /></h6>
                        <span>MAR 05, 2019</span>
                        </div>
                    </a>
                    <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                        <h6>Asus <br /></h6>
                        <span>MAR 05, 2019</span>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="blog__sidebar__item">
                    <h4>Search By</h4>
                    <div className="blog__sidebar__item__tags">
                    <a href="#">Apple</a>
                    <a href="#">Sumsung</a>
                    <a href="#">Boat</a>
                    <a href="#">Sony</a>
                    <a href="#">Asus</a>
                    <a href="#">Fasttrack</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-7">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                    <div className="blog__item__pic">
                        <img src="img/blog/blog-2.jpg" alt />
                    </div>
                    <div className="blog__item__text">
                        <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">Iphone 14 puls</a></h5>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                    <div className="blog__item__pic">
                        <img src="img/blog/blog-3.jpg" alt />
                    </div>
                    <div className="blog__item__text">
                        <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">Watch</a></h5>
                      
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                    <div className="blog__item__pic">
                        <img src="img/blog/blog-7.jpg" alt />
                    </div>
                    <div className="blog__item__text">
                        <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">BoAt Airdopes</a></h5>   
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                    <div className="blog__item__pic">
                        <img src="img/blog/blog-4.jpg" alt />
                    </div>
                    <div className="blog__item__text">
                        <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">Leptop</a></h5>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                    <div className="blog__item__pic">
                        <img src="img/blog/blog-5.jpg" alt />
                    </div>
                    <div className="blog__item__text">
                        <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">camera</a></h5>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                    <div className="blog__item__pic">
                        <img src="img/blog/blog-6.jpg" alt />
                    </div>
                    <div className="blog__item__text">
                        <ul>
                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                        <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">Tribit StormBox</a></h5>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="product__pagination blog__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#"><i className="fa fa-long-arrow-right" /></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* Blog Section End */}

    </>
  )
}

export default Blog
