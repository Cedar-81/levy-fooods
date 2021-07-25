import React from 'react';

//img import
//bannerImg
import bannerImg from '../../Assets/bannerImg.png'
//menuImg
import burger from '../../Assets/burger.png'
import pizza from '../../Assets/pizza.png'
import chicken from '../../Assets/chicken.png'
import fries from '../../Assets/fries.png'
import drink from '../../Assets/Drink.png'
import salad from '../../Assets/Salad.png'
import leftBtn from '../../Assets/leftBtn.png'
import rightBtn from '../../Assets/rightBtn.png'
//topDishes Img
import fImg1 from '../../Assets/fImg1.png'
import fImg2 from '../../Assets/fImg2.png'
import fImg3 from '../../Assets/fImg3.png'
import fImg4 from '../../Assets/fImg4.png'
//wwab Img
import fdIcon from '../../Assets/fdIcon.png'
import ffIcon from '../../Assets/fficon.png'
import qpIcon from '../../Assets/qpIcon.png'
import cook from '../../Assets/cook.png'


//css import
import './home.css'

//Nav import
import Nav from '../Nav/nav'

//dish component import
import Dish from './dishCard/dish';

//testimonial component import
import Testimonial from './testimonialCard/testimonial'

//menu component import
import Menu from './menuCard/menu';

//footer component import
import Footer from '../Footer/footer';

function Home() {
    return (
        <div className='Home'>
            <Nav />
            <div className='homeItms'>
                <section className='banner'>
                    <div className='cta'>
                        <div className='ctaTxt' >Spend Less. <br /> Eat More. <br /> Be Happy.</div>
                        <div className='ctaBtns'>
                            <div className='ctaBtn vm'><p>View Menu</p></div>
                            <div className='ctaBtn bat'><p>Book A Table</p></div>
                        </div> 
                    </div>
                    <img className='bannerImg' src={bannerImg} alt='food' />
                </section>

                <section className='menu'>
                    <div className='menuHeader' >
                        <div className='mht'><h2>Our Menu</h2></div>
                        <h3><i>designed with you in our minds.</i></h3>
                    </div>

                    <div className='menuItms'>
                        
                        <img className='leftBtn arr' src={leftBtn} alt='leftBtn'/>
                        <Menu icon={burger} name={'burger'} />
                        <Menu icon={fries} name={'fries'} />
                        <Menu icon={pizza} name={'pizza'} />
                        <Menu icon={chicken} name={'chicken'} />
                        <Menu icon={drink} name={'drink'} />
                        <Menu icon={salad} name={'salad'} />
                        <img src={rightBtn} className='rightBtn arr' alt='rightBtn' />
                    </div>
                    
                </section>


                <section className='topDishes'>
                    <div className='tdHeader'>
                        <h2>Our Top Dishes</h2>
                        <div className='tdHeaderRight'>
                            <div className='dishType breakfast'><h3>Breakfast</h3></div>
                            <div className='dishType lunch'><h3>Lunch</h3></div>
                            <div className='dishType dinner'><h3>Dinner</h3></div>
                        </div>
                    </div>

                    <div className='dishes'>    
                        <img src={leftBtn} className='leftBtn arr' alt='leftBtn' />

                        <Dish img={fImg3} />
                        <Dish img={fImg2} />
                        <Dish img={fImg3} />
                        <Dish img={fImg4} />

                        <img src={rightBtn} className='rightBtn arr' alt='rightBtn' />
                    </div>


                </section>

                <section className='wwab'>

                    <div className='wwabContent'>
                        <div className='contents'>
                            <div className='header'>
                                <h2>Why we are the best?</h2>
                                <h3><i>We try to bring to you the delicacies that are rich in taste and quality, <br />making sure that they are heathy to consume.</i></h3>
                            </div>
                            <div className='content'>
                                <img src={ffIcon} className='icon' alt='ffIcon' />
                                <div className='contentTxt'>
                                    <h4>Fresh Food</h4>
                                    <p>We make sure that our food is fresh at all time to enuser your enjoyment.</p>
                                </div>
                            </div>
                            <div className='content'>
                                <img src={fdIcon} className='icon' alt='fdIcon' />
                                <div className='contentTxt'>
                                    <h4>Fast Delivery</h4>
                                    <p>With you stomach in our minds we make sure that your meals get to you in time.</p>
                                </div>
                            </div>
                            <div className='content'>
                                <img src={qpIcon} className='icon' alt='qpIcon' />
                                <div className='contentTxt'>
                                    <h4>Quality Products</h4>
                                    <p>To avoid all kind of health issues we make sure you eat healthy and quality foods.</p>
                                </div>
                            </div>
                        </div>

                        <img className='cook' src={cook} alt='cook' />
                    </div>


                </section>

                <section className='testimonial'>
    

                        <div className='allCards'>
                            <Testimonial />
                        </div>                        

                </section>

                <section className='footer'>
                    <Footer />
                </section>

            </div>
        </div>
    )
}

export default Home
