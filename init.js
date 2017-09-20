document.addEventListener("DOMContentLoaded", function(event) {

  init();

  function init() {

    var number = document.getElementById('number');
    var btn1 = document.getElementById('btn1')
    var catNumber = number.textContent;
    var title = document.getElementsByTagName('h1');
    var baner = document.getElementById('baner');
    var mainStart = new TimelineMax();

    declarationOfFunctions()

    function declarationOfFunctions() {

      btn1.addEventListener("click", myFunction1);
      btn2.addEventListener("click", myFunction2);
      btn3.addEventListener("click", replayFunction);

      btn1.addEventListener("mouseover", btn1OverAnimation);
      btn2.addEventListener("mouseover", btn2OverAnimation);
      btn3.addEventListener("mouseover", btn3OverAnimation);

      btn1.addEventListener("mouseout", btn1OutAnimation);
      btn2.addEventListener("mouseout", btn2OutAnimation);
      btn3.addEventListener("mouseout", btn3OutAnimation);
      number.innerText = 2;

      animateBaner()
    }


    function animateBaner() {

      mainStart.set(title, {
        y: -100,
        opacity: 0
      });
      mainStart.set(btn1, {
        x: -100,
        opacity: 0
      });
      mainStart.set(btn2, {
        x: +100,
        opacity: 0
      });
      mainStart.set(btn3, {
        opacity: 0
      });
      mainStart.set(baner, {
        x: +0,
        opacity: 0
      });

      mainStart.add(TweenMax.to(title, 3, {
        y: 0,
        opacity: 1,
        delay: 0.5,
        ease: Elastic.easeInOut
      }), 0);

      mainStart.add(TweenMax.to(btn1, 3, {
        x: 0,
        opacity: 1,
        delay: 0.5,
        ease: Elastic.easeInOut
      }), 0.5);

      mainStart.add(TweenMax.to(btn2, 3, {
        x: 0,
        opacity: 1,
        delay: 0.5,
        ease: Elastic.easeInOut
      }), 0.5);

      mainStart.add(TweenMax.to(btn3, 3, {
        opacity: 1,
        delay: 0.5,
        ease: Elastic.easeInOut
      }), 1);

      mainStart.add(TweenMax.to(baner, 0.5, {
        x: 0,
        opacity: 1,
        delay: 0.5,
        ease: Elastic.easeInOut
      }), 0);

    }

    function myFunction1() {
      number.innerText = parseInt(number.innerText) + 1;
    }

    function myFunction2() {
      if (parseInt(number.innerText) > 0) {
        number.innerText = parseInt(number.innerText) - 1;
      } else {
        number.innerText = 0;
      }
    }

    function btn1OverAnimation() {
      var start = new TimelineMax();
      start.add(TweenMax.to(btn1, 0.5, {
        y: 0,
        scale: 1.2,
        ease: Power4.easeInOut
      }), 0);
    }

    function btn2OverAnimation() {
      var start = new TimelineMax();
      start.add(TweenMax.to(btn2, 0.5, {
        y: 0,
        scale: 1.2,
        ease: Power4.easeInOut
      }), 0);
    }

    function btn3OverAnimation() {
      var start = new TimelineMax();
      start.add(TweenMax.to(btn3, 0.5, {
        y: 0,
        scale: 1.2,
        ease: Power4.easeInOut
      }), 0);
    }

    function btn1OutAnimation() {
      var start = new TimelineMax();
      start.add(TweenMax.to(btn1, 0.5, {
        y: 0,
        scale: 1,
        ease: Elastic.easeInOut
      }), 0);
    }

    function btn2OutAnimation() {
      var start = new TimelineMax();
      start.add(TweenMax.to(btn2, 0.5, {
        y: 0,
        scale: 1,
        ease: Elastic.easeInOut
      }), 0);
    }

    function btn3OutAnimation() {
      var start = new TimelineMax();
      start.add(TweenMax.to(btn3, 0.5, {
        y: 0,
        scale: 1,
        ease: Elastic.easeInOut
      }), 0);
    }

    function replayFunction() {
      mainStart.reverse()
    }

  }



})
