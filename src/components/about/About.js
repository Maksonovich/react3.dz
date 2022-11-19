import React from 'react'
import img from '../../assets/about/backkAbout.png'
import scroll from '../../assets/about/скролл.svg'

const About = () => {
  return (
    <section className='about'>
            <div className='about__blocks'>
                <section className='about__img'></section>
                    
                        <section className='about__about-blocks'>
                            <div className='about__information'>
                                <h2 className='about__title'>О компании</h2>
                                <p className='about__first'>Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.</p>
                                <p className='about__second'>Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.</p>
                                <p className='about__third'>Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.</p>
                            </div>
                            <div><img className='about__img-second' src={scroll}/></div>
                        </section>
            </div>
    </section>
  )
}

export default About