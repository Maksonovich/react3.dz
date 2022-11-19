import React from 'react'
import imgIcon from '../../assets/footer/BackFoot.svg'
import iconFoot from '../../assets/footer/icon1.svg'
import iconFoot1 from '../../assets/footer/icon2.svg'
import iconFoot2 from '../../assets/footer/icon3.svg'
import iconFoot3 from '../../assets/footer/icon4.svg'
import iconFoot4 from '../../assets/footer/icon5.svg'
import imgIcon1 from '../../assets/footer/fi_phone-call.svg'
import imgIcon2 from '../../assets/footer/fi_map-pin.svg'
import imgIcon3 from '../../assets/footer/fi_mail.svg'

const Footer = () => {
  return (
   <footer className='footer'>
      <div className='container'>
          <div className='footer__lead'>
            <ul className='footer__first-blocks'>
              <li>
                <h2 className='footer__title'>Пункт</h2>
                <p className='footer__p-first'>В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности.</p>
                <p className='footer__p-second'>Пункт</p>
                <p className='footer__p-second'>Пункт</p>
              </li>
              <li>
                <h2 className='footer__title'>Пункт</h2>
                <p className='footer__p-first'>В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности.</p>
                <p className='footer__p-second'>Пункт</p>
                <p className='footer__p-second'>Пункт</p>
              </li>
              <li>
                <h2 className='footer__title'>Пункт</h2>
                <p className='footer__p-first'>В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности.</p>
                <p className='footer__p-second'>Пункт</p>
                <p className='footer__p-second'>Пункт</p>
              </li>
              <li>
                <h2 className='footer__title'>Контакты</h2>
                <ul className='footer__contacts'>
                  <img src={imgIcon1}/>
                  <p className='footer__contacts-item'>+7 777 7777 77 77</p>
                </ul>
                <ul className='footer__contacts'>
                  <img src={imgIcon2}/>
                  <p className='footer__contacts-item'>email@email.ru</p>
                </ul>
                <ul className='footer__contacts'>
                  <img src={imgIcon3}/>
                  <p className='footer__contacts-item'>г. Москва</p>
                </ul>
                
                
              </li>
            </ul>
            <ul className='footer__foot'>
              <li><a><img src={imgIcon}/></a></li>
              <ul className='img__icon'>
                <li><a><img className='a__footer' src={iconFoot}/></a></li>
                <li><a><img className='a__footer'src={iconFoot1}/></a></li>
                <li><a><img className='a__footer' src={iconFoot2}/></a></li>
                <li><a><img className='a__footer' src={iconFoot3}/></a></li>
                <li><a><img className='a__footer' src={iconFoot4}/></a></li>
              </ul>
            </ul>
          </div>
      </div>
   </footer>
  )
}

export default Footer