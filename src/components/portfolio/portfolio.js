import React from 'react'
import img from '../../assets/portfolio/pcTable.png'
import scroll from '../../assets/portfolio/скролл.svg'

const Portfolio = () => {
  return (
    <section className='portfolio'>
        <div className='container'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__blocks'>
                <div className='portfolio__first-block'>
                    <img className='portfolio__img' src={img}/>
                    <button className='portfolio__btn' type='button'>Перейти на сайт</button>
                </div>
                <div className='portfolio__scroll'><img src={scroll}/></div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio