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
          <img src={logo}></img>
        </div>
        <div className="header_search-form">
            <div className="search-line">
              <input className="user-input" value="sass"></input>
              <span><i className="fas fa-keyboard"></i>2</span>
              <span><i className="fas fa-keyboard"></i>3</span>
            </div>
            <input type='submit'></input>
        </div>
        <div className="header_applications">
            <div className="header_dropdown-list">
              <div className="header_dropdown">
                <div className="header_dropdown-content">4
                <div className="header_dropdown-items"></div>
                </div>
              </div>
            </div>
            <div className="header_user-mail">
              5
            </div>
        </div>
      </div>
      <div className="result-selection">        
        <div className="result-selection_item">все</div>
        <div className="result-selection_item">картинки</div>
        <div className="result-selection_item">видео</div>
        <div className="result-selection_item">карты</div>
        <div className="result-selection_item">новости</div>
        <div className="result-selection_item dropdown">
          <span>Ещё</span>
          <div className="dropdown-content">
            <a href="#">Книги</a>
            <a href="#">Авиабилеты</a>
            <a href="#">Финансы</a>
          </div>
        </div>
        <div className="result-selection_item dropdown">
          <span>Настройки</span>
          <div className="dropdown-content">
            <a href="#">Настройка поиска</a>
            <a href="#">Языки (Languages)</a>
            <a href="#">Включить Безопасный поиск</a>
            <a href="#">Скрыть персональные результаты</a>
            <a href="#">Расширенный поиск </a>
            <a href="#">Действия в Поиске</a>
            <a href="#">Ваши данные в Поиске</a>
            <a href="#">Поиск в справке</a>
          </div>
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
      <div className="colomns">
          <div className='left-colomn'>
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
                <div className='result-item-link' >
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
                <div className='result-item-link' >
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
                <div className='result-item-link' >
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
                <div className='result-item-link' >
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
            <div className='content_videos'></div>
            <div className='content_result'></div>
            <div className='content_extra'></div>
            <div className='content_foot'></div>
          </div>
          <div className='right-colomn'>
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
              <div className="item-string"><a>Последняя версия:</a>3.5.5</div>
              <div className="item-string"><a>Разработчик:</a><a href="#">Хамптон Катлин</a></div>
              <div className="item-string"><a>Тип:</a> Компилирующий обработчик шаблонов</div>
              <div className="item-string"><a>Первый выпуск:</a><a href="#">28 ноября 2006</a></div>
              <div className="item-string"><a>Влияние:</a><a href="#">LESS</a><a href="#">Stylus</a><a href="#">Tritium</a></div>

              <div className='side-similar'>
                
                <div className='similar-head'>
                  <span className='similar-title'>Похожие запросы</span>
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
    </div>
  );
}

export default App;
