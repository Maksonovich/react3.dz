import React from 'react'
import icon1 from '../../assets/advantage/icon1.svg'
import icon2 from '../../assets/advantage/icon2.svg'
import icon3 from '../../assets/advantage/icon3.svg'
import icon4 from '../../assets/advantage/icon4.svg'

const Advantage = () => {
  return (
    <section className='Advantage'>
        <div className='container'>
            <div className='Advantage__blocks'>
                <h2 className='Advantage__title'>Наши преимущества</h2>
                <div className='Advantage__blocks-seconds'>
                    <div className='Advantage__first-block'>
                        <div className='Advantage__section'>
                            <img src={icon1}/>
                            <p className='Advantage__p'>Сделаем адаптивный дизайн, под любой вид<br/> устройств</p>
                        </div>
                        <div className='Advantage__section'>
                            <img src={icon2}/>
                            <p className='Advantage__p'>Настроим все возможные способы обратной связи. Заявки на почту, подключим онлайн консультанта, настроим телефонный звон с сайта,<br/> подключим Whatsapp к сайту</p>
                        </div>
                        
                    </div>
                    <div className='Advantage__second-block'>
                        <div className='Advantage__section'>
                            <img src={icon3}/>
                            <p className='Advantage__p'>Установим на сайт счетчики аналитики и настроим возможность отслеживать результаты прямо с вашего мобильного телефона</p>
                        </div>
                        <div className='Advantage__section'>
                            <img src={icon4}/>
                            <p className='Advantage__p'>Проведем анализ вашей сферы и конкурентов, предложим лучшие инструменты для продвижения в интернете</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advantage