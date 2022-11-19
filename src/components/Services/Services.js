import React from 'react'
import { servicesData } from '../../data/servicesData'

const Services = () => {
  return (
    <section className='services'>
        <div className='container'>
            <h2 className='services__title'>Что мы предлагаем</h2>
           <div className='services__row'>
           {
                servicesData.map((item) => (
                    <div className='services__card'>
                        <img src={item.icon} alt=''/>
                        <h3 className='services__card-title'>{item.text}</h3>
                    </div>
                ))
            }
            <div className='services__card'></div>
            <div className='services__card'></div>
            <div className='services__card'>
                <button className='services__btn' type="button">Подробнее</button>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Services