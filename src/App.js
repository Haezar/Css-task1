import React from 'react';
import logo from './img/logo.png';
import main from './img/main.png';
import css from './img/css.png';
import less from './img/less.jpeg';
import stylus from './img/stylus.png';
import ruby from './img/ruby.jpeg';
import typeScript from './img/typescript.jpeg';
import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <div className="header">  
        <div className="header_logo">
          <img src={logo} width='92' ></img>
        </div>
        <div className="header_search-form">
            <div className="search-line">
              <input className="user-input"></input>
              
            </div>
            <div className='search-icon'>
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" height='24px' viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5
                  6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 
                  19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5
                    14z">
                </path>
              </svg>
            </div>
        </div>
        <div className="header_applications">
            <div className="header_dropdown-list">
              <div className="header_dropdown">
                <div className="header_dropdown-content">
                <div className="header_dropdown-items"></div>
                </div>
              </div>
            </div>
            <div className="header_user-mail">
              
            </div>
        </div>
      </div>
      <div className="result-selection">        
        <div className="result-selection_item result-selection_item--active">все</div>
        <div className="result-selection_item">картинки</div>
        <div className="result-selection_item">видео</div>
        <div className="result-selection_item">карты</div>
        <div className="result-selection_item">новости</div>
        <div className="result-selection_item dropdown">
          <span>Ещё</span>
          {/* <div className="dropdown-content">
            <a href="#">Книги</a>
            <a href="#">Авиабилеты</a>
            <a href="#">Финансы</a>
          </div> */}
        </div>
        <div className="result-selection_item dropdown">
          <span>Настройки</span>
          {/* <div className="dropdown-content">
            <a href="#">Настройка поиска</a>
            <a href="#">Языки (Languages)</a>
            <a href="#">Включить Безопасный поиск</a>
            <a href="#">Скрыть персональные результаты</a>
            <a href="#">Расширенный поиск </a>
            <a href="#">Действия в Поиске</a>
            <a href="#">Ваши данные в Поиске</a>
            <a href="#">Поиск в справке</a>
          </div> */}
        </div>
        <div className="result-selection_item dropdown">
          <span>Инструменты</span>
          <div>
            
          </div>
        </div>
      </div>

      <div className="topabar">        
        <span> Результатов: примерно 73 300 000 (0,41 сек.)  </span>
      </div>
      <div className="columns">
          <div className='left-column'>
            <div className='content_main-information'>
              <div className='content_main-information-body'>
                <div className='content_info'>
                  <div className='main-text'>
                  Sass (Syntactically Awesome Stylesheets) — модуль, включенный в Haml. 
                  Sass — это метаязык на основе CSS, 
                  предназначенный для увеличения уровня абстракции CSS
                   кода и упрощения файлов каскадных таблиц стилей.</div>
                  <img  className='main-img' src={main}></img>
                </div>
                <div className='content_link'>
                  <div className='link-name'> <a href="#">Sass — Википедия</a></div>
                  <div className='link-href' ><a>https://ru.wikipedia.org/wiki/Sass</a></div>

                </div>
              </div>
              <div className='content_main-information-footer'>
                <div className='footer-element'>
                  <a>?</a>Оставить отзыв
                </div>
                <div className='footer-element'>
                  <a>?</a>Подробнее
                </div>
              </div>
            </div>
            <div className='content_result'>
              <div className='result-item'>
                <div className='result-item-title' > <a href='#'>Sass: Syntactically Awesome Style Sheets</a> </div>
                <div className='result-item-link' > <a href='#'>https://sass-lang.com/</a> </div>
                <div className='result-item-text' >
                  Sass is completely compatible with 
                  all versions of CSS. We take this
                  compatibility seriously, so that
                  you can seamlessly use any available
                  CSS libraries. 
                </div>
                <div className='result-item-extra' >
                  <a href='#'>‎Sass Basics</a> 
                  <a href='#'>Install Sass</a>
                  <a href='#'>Dart Sass</a>
                  <a href='#'>Ruby Sass</a>
                </div>
              </div>
              <div className='result-item'>
                <div className='result-item-title' > <a href='#'>Sass: Документация на русском языке</a> </div>
                <div className='result-item-link' > <a href='#'>https://sass-scss.ru/</a> </div>
                <div className='result-item-text' >
                  Sass - документация на русском языке. Что такое sass или scss?
                </div>
                <div className='result-item-extra' >
                  <a href='#'>‎Основы Sass</a> 
                  <a href='#'>Установка Sass</a>
                  <a href='#'>‎Dart Sass</a>
                  <a href='#'>teamSass</a>
                </div>
              </div>
              <div className='result-item'>
                <div className='result-item-title' > <a href='#'>Sass: Syntactically Awesome Style Sheets</a> </div>
                <div className='result-item-link' > <a href='#'>https://sass-lang.com/</a> </div>
                <div className='result-item-text' >
                  Sass is completely compatible with 
                  all versions of CSS. We take this
                  compatibility seriously, so that
                  you can seamlessly use any available
                  CSS libraries. 
                </div>
                <div className='result-item-extra' >
                  <a href='#'>‎Sass Basics</a> 
                  <a href='#'>Install Sass</a>
                  <a href='#'>Dart Sass</a>
                  <a href='#'>Ruby Sass</a>
                </div>
              </div>
              <div className='result-item'>
                <div className='result-item-title' > <a href='#'>Sass: Syntactically Awesome Style Sheets</a> </div>
                <div className='result-item-link' > <a href='#'>https://sass-lang.com/</a> </div>
                <div className='result-item-text' >
                  Sass is completely compatible with 
                  all versions of CSS. We take this
                  compatibility seriously, so that
                  you can seamlessly use any available
                  CSS libraries. 
                </div>
                <div className='result-item-extra' >
                  <a href='#'>‎Sass Basics</a> 
                  <a href='#'>Install Sass</a>
                  <a href='#'>Dart Sass</a>
                  <a href='#'>Ruby Sass</a>
                </div>
              </div>
            </div>
            <span className='video-title'>Видео</span>
            <div className='content_videos'>
              <div className='video-item'>
                <div className='video'></div>
                <div className='video-title'>
                Препроцессор SASS / Урок #1 - Что такое SASS, SCSS. Установка</div>
                <div className='video-description'>
                  <span className='video-author'>Гоша Дударь</span>
                  <div className='video-publisher'>Youtube <span className='video-date'>1 апр. 2019 г.</span></div>
                </div>
              </div>
              <div className='video-item'>
                <div className='video'></div>
                <div className='video-title'>
                Препроцессор SASS / Урок #1 - Что такое SASS, SCSS. Установка</div>
                <div className='video-description'>
                  <span className='video-author'>Гоша Дударь</span>
                  <div className='video-publisher'>Youtube <span className='video-date'>1 апр. 2019 г.</span></div>
                </div>
              </div>
              <div className='video-item'>
                <div className='video'></div>
                <div className='video-title'>
                Препроцессор SASS / Урок #1 - Что такое SASS, SCSS. Установка</div>
                <div className='video-description'>
                  <span className='video-author'>Гоша Дударь</span>
                  <div className='video-publisher'>Youtube <span className='video-date'>1 апр. 2019 г.</span></div>
                </div>
              </div>
              
              
            </div>
            <div className='content_result'>
              <div className='result-item'>
                <div className='result-item-title' > <a href='#'>Sass: Syntactically Awesome Style Sheets</a> </div>
                <div className='result-item-link' > <a href='#'>https://sass-lang.com/</a> </div>
                <div className='result-item-text' >
                  Sass is completely compatible with 
                  all versions of CSS. We take this
                  compatibility seriously, so that
                  you can seamlessly use any available
                  CSS libraries. 
                </div>
                <div className='result-item-extra' >
                  <a href='#'>‎Sass Basics</a> 
                  <a href='#'>Install Sass</a>
                  <a href='#'>Dart Sass</a>
                  <a href='#'>Ruby Sass</a>
                </div>
              </div>
              <div className='result-item'>
                <div className='result-item-title' > <a href='#'>Sass: Syntactically Awesome Style Sheets</a> </div>
                <div className='result-item-link' > <a href='#'>https://sass-lang.com/</a> </div>
                <div className='result-item-text' >
                  Sass is completely compatible with 
                  all versions of CSS. We take this
                  compatibility seriously, so that
                  you can seamlessly use any available
                  CSS libraries. 
                </div>
                <div className='result-item-extra' >
                  <a href='#'>‎Sass Basics</a> 
                  <a href='#'>Install Sass</a>
                  <a href='#'>Dart Sass</a>
                  <a href='#'>Ruby Sass</a>
                </div>
              </div>
              <div className='result-item'>
                <div className='result-item-title' > <a href='#'>Sass: Syntactically Awesome Style Sheets</a> </div>
                <div className='result-item-link' > <a href='#'>https://sass-lang.com/</a> </div>
                <div className='result-item-text' >
                  Sass is completely compatible with 
                  all versions of CSS. We take this
                  compatibility seriously, so that
                  you can seamlessly use any available
                  CSS libraries. 
                </div>
                <div className='result-item-extra' >
                  <a href='#'>‎Sass Basics</a> 
                  <a href='#'>Install Sass</a>
                  <a href='#'>Dart Sass</a>
                  <a href='#'>Ruby Sass</a>
                </div>
              </div>
              <div className='result-item'>
                <div className='result-item-title' > <a href='#'>Sass: Syntactically Awesome Style Sheets</a> </div>
                <div className='result-item-link' > <a href='#'>https://sass-lang.com/</a> </div>
                <div className='result-item-text' >
                  Sass is completely compatible with 
                  all versions of CSS. We take this
                  compatibility seriously, so that
                  you can seamlessly use any available
                  CSS libraries. 
                </div>
                <div className='result-item-extra' >
                  <a href='#'>‎Sass Basics</a> 
                  <a href='#'>Install Sass</a>
                  <a href='#'>Dart Sass</a>
                  <a href='#'>Ruby Sass</a>
                </div>
              </div>
            </div>
            <div className='content_extra'>
              <span className='extra-title'>Вместе с sass часто ищут</span>
              <div className='extra-row'>
                <div className='extra-col'>
                  <a href='#' className='extra-item'>sass tutorial</a>
                  <a href='#' className='extra-item'>sass как подключить</a>
                  <a href='#' className='extra-item'>saas синтаксис</a>
                  <a href='#' className='extra-item'>sass документация</a>
                </div>
                <div className='extra-col'>
                  <a href='#' className='extra-item'>sass шпаргалка</a>
                  <a href='#' className='extra-item'>sass less</a>
                  <a href='#' className='extra-item'>sass npm</a>
                  <a href='#' className='extra-item'>sass примеси</a></div>
              </div>
            </div>
            <div className='content_pages'>

            </div>
          </div>
          <div className='right-column'>
              <div className='side-main' >
                <div className='side-title'>
                  <div className='side-title--b'>Sass</div>
                  <div className='side-title--s'>Язык программирования</div>
                </div>
                <div className='side-logo'>
                  <img src={main} width='130px'></img>
                </div>
              </div>
              <div className='side-info' >
                Sass — модуль, включенный в Haml. Sass — это метаязык
                на основе CSS, предназначенный для увеличения уровня 
                абстракции CSS кода и упрощения файлов каскадных таблиц
                стилей. Язык Sass имеет два синтаксиса: sass — отличается
                отсутствием фигурных скобок, в нём вложенные элементы реализованы
                с помощью отступов; <a href="#">Википедия</a>
              </div>
              <div className="item-string"><a className='item-string_property'>Последняя версия:</a>3.5.5</div>
              <div className="item-string"><a className='item-string_property'>Разработчик:</a><a href="#">Хамптон Катлин</a></div>
              <div className="item-string"><a className='item-string_property'>Тип:</a> Компилирующий обработчик шаблонов</div>
              <div className="item-string"><a className='item-string_property'>Первый выпуск:</a><a href="#">28 ноября 2006</a></div>
              <div className="item-string"><a className='item-string_property'>Влияние:</a><a href="#">LESS</a><a href="#">Stylus</a><a href="#">Tritium</a></div>

              <div className='side-similar'>
                
                <div className='similar-head'>
                  <span className='similar-title'><a>Похожие запросы</a></span>
                  <span className='similar-more'>Ещё 15+</span>
                </div>
                <div className='similar-items'>
                  <div className='similar-item'>
                    <img src={css}></img>
                    <a>CSS</a>
                  </div>
                  <div className='similar-item'>
                    <img src={less}></img>
                    <a>LESS</a>
                  </div>
                  <div className='similar-item'>
                    <img src={stylus}></img>
                    <a>Stylus</a>
                  </div>
                  <div className='similar-item'>
                    <img src={typeScript} width='72px'></img>
                    <a>TypeScript</a>
                  </div>
                  <div className='similar-item'>
                    <img src={ruby}></img>
                    <a>Ruby</a>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className='footer'>
        <div className='user-address'>
          <span className='country'>Беларусь</span>
          <span className='address'>Ленинский район, Минск - На основе ваших предыдущих действий - Учитывать мое местоположение - Подробнее</span>
        </div>
        <div className='tools'>
          <span className='tool'>Справка</span>
          <span className='tool'>Отправить отзыв</span>
          <span className='tool'>Конфиденциальность</span>
          <span className='tool'>Условия</span>
        </div>
      </div>
    </div>
  );
}

export default App;
