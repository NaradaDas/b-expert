window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#menu').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('nav-is-active')
  })
  document.querySelector('#menu').addEventListener('click', function () {
    document.querySelector('#menu__icon').classList.toggle('menu__icon-is-active')
    document.querySelector('.menu__icon__rect1').classList.toggle('menu__icon__rect1-is-active')
    document.querySelector('.menu__icon__rect2').classList.toggle('menu__icon__rect2-is-active')
    document.querySelector('.menu__icon__rect3').classList.toggle('menu__icon__rect3-is-active')

  })


  document.querySelectorAll('.nav__item').forEach(function (tabsBtn) {

    tabsBtn.addEventListener('click', function (item) {

      const start = item.currentTarget.dataset.start

      document.querySelectorAll('.nav__item').forEach(function (tabContent) {
        tabContent.classList.remove('nav__item-is-active')
      })


      document.querySelector(`[data-end="${start}"]`).classList.add('nav__item-is-active')
    })
  })

})








