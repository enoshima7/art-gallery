import React, { useRef } from "react";
import "./demo.module.css";
import img1 from "./assets/images/index/九宫格_01.png";
import img2 from "./assets/images/index/九宫格_02.png";
import img3 from "./assets/images/index/九宫格_03.png";
import img4 from "./assets/images/index/九宫格_04.png";
// import img5 from "./assets/images/index/九宫格_05.png";
// import img6 from "./assets/images/index/九宫格_06.png";
import img7 from "./assets/images/index/九宫格_05.png";
import img8 from "./assets/images/index/九宫格_08.png";
import img9 from "./assets/images/index/九宫格_09.png";
import img10 from "./assets/images/index/九宫格_10.png";

const Demo = () => {
  // Global
  var win = window,
    doc = document;

  // Global Functions

  function hasClass(el: any, cls: any) {
    return el.className?.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
  }

  function addClass(el: any, cls: any) {
    if (!hasClass(el, cls)) {
      el.className += " " + cls;
    }
  }

  function removeClass(el: any, cls: any) {
    if (hasClass(el, cls)) {
      var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
  }

  // Elements

  var site = doc.getElementsByClassName("site-wrap")[0];
  var wrap = useRef<HTMLDivElement>(null);

  var panel = doc.getElementsByClassName("panel");

  var zoom = doc.getElementsByClassName("js-zoom");

  var nav_up = doc.getElementsByClassName("js-up"),
    nav_left = doc.getElementsByClassName("js-left"),
    nav_right = doc.getElementsByClassName("js-right"),
    nav_down = doc.getElementsByClassName("js-down");

  var animation = doc.getElementsByClassName("js-animation");

  // Tracking
  var pos_x = 0,
    pos_y = 0;

  function setPos() {
    if (wrap.current !== null) {
      wrap.current.style.transform =
        "translateX(" + pos_x + "00%) translateY(" + pos_y + "00%)";
      setTimeout(function () {
        removeClass(wrap, "animate");
      }, 600);
    }
  }

  setPos();

  function moveUp() {
    addClass(wrap, "animate");
    pos_y++;
    setPos();
  }

  function moveLeft() {
    addClass(wrap, "animate");
    pos_x++;
    setPos();
  }

  function moveRight() {
    addClass(wrap, "animate");
    pos_x--;
    setPos();
  }

  function moveDown() {
    addClass(wrap, "animate");
    pos_y--;
    setPos();
  }

  for (var x = 0; x < nav_up.length; x++) {
    nav_up[x].addEventListener("click", moveUp);
  }

  for (var x = 0; x < nav_left.length; x++) {
    nav_left[x].addEventListener("click", moveLeft);
  }

  for (var x = 0; x < nav_right.length; x++) {
    nav_right[x].addEventListener("click", moveRight);
  }

  for (var x = 0; x < nav_down.length; x++) {
    nav_down[x].addEventListener("click", moveDown);
  }

  // Animations

  for (var x = 0; x < animation.length; x++) {
    (function (_x) {
      animation[_x].addEventListener("click", function () {
        toggleAnimation(_x);
      });
    })(x);
  }

  function toggleAnimation(i: any) {
    for (var x = 0; x < animation.length; x++) {
      if (i === x) {
        addClass(animation[x], "active");
        addClass(wrap, animation[x].getAttribute("data-animation"));
      } else {
        removeClass(animation[x], "active");
        removeClass(wrap, animation[x].getAttribute("data-animation"));
      }
    }
  }

  for (var x = 0; x < zoom.length; x++) {
    zoom[x].addEventListener("click", zoomOut);
  }

  function zoomOut(e: any) {
    e.stopPropagation();
    addClass(site, "show-all");
    for (var x = 0; x < panel.length; x++) {
      (function (_x) {
        panel[_x].addEventListener("click", setPanelAndZoom);
      })(x);
    }
  }

  function setPanelAndZoom(e: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (pos_x = -e.target.getAttribute("data-x-pos")),
      (pos_y = e.target.getAttribute("data-y-pos"));
    setPos();
    zoomIn();
  }

  function zoomIn() {
    for (var x = 0; x < panel.length; x++) {
      panel[x].removeEventListener("click", setPanelAndZoom);
    }
    removeClass(site, "show-all");
  }

  (function () {
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    //  zoomClick.dispatchEvent(event);
  })();

  return (
    <div className="site-wrap">
      <div ref={wrap} className="panel-wrap animate--none">
        <div className="panel" data-x-pos="0" data-y-pos="0">
          <div
            id="Layer1"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img1} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--up js-up">up</span>
          <span className="panel__nav panel__nav--right-top js-up js-right">
            up/right
          </span>
          <span className="panel__nav panel__nav--left-top js-up js-left">
            up/left
          </span>
          <span className="panel__nav panel__nav--left js-left">left</span>
          <span className="panel__nav panel__nav--right js-right">right</span>
          <span className="panel__nav panel__nav--right-down js-down js-right">
            down/right
          </span>
          <span className="panel__nav panel__nav--left-down js-down js-left">
            down/left
          </span>
          <span className="panel__nav panel__nav--down js-down">down</span>
          <span className="panel__zoom js-zoom" id="zoomClick">
            View All
          </span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="home/home.html">首页中心</a>
            </span>
          </div>
        </div>
        <div className="panel" data-x-pos="0" data-y-pos="1">
          <span className="panel__nav panel__nav--left js-left">left</span>
          <div
            id="Layer2"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img2} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--right js-right">right</span>
          <span className="panel__nav panel__nav--right-down js-down js-right">
            down/right
          </span>
          <span className="panel__nav panel__nav--left-down js-down js-left">
            down/left
          </span>
          <span className="panel__nav panel__nav--down js-down">down</span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="video/video.html">艺术课程</a>
            </span>
          </div>
        </div>

        <div className="panel" data-x-pos="-1" data-y-pos="1">
          <div
            id="Layer3"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img1} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--right-down js-down js-right">
            down/right
          </span>
          <span className="panel__nav panel__nav--right js-right">right</span>
          <span className="panel__nav panel__nav--down js-down">down</span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="news/index.html">新闻资讯</a>
            </span>
          </div>
        </div>
        <div className="panel" data-x-pos="1" data-y-pos="1">
          <div
            id="Layer4"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img3} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--left-down js-down js-left">
            down/left
          </span>
          <span className="panel__nav panel__nav--left js-left">left</span>
          <span className="panel__nav panel__nav--down js-down">down</span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="story/index.html">画家故事</a>
            </span>
          </div>
        </div>
        <div className="panel" data-x-pos="-1" data-y-pos="0">
          <div
            id="Layer5"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img4} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--up js-up">up</span>
          <span className="panel__nav panel__nav--right-top js-up js-right">
            up/right
          </span>
          <span className="panel__nav panel__nav--right js-right">right</span>
          <span className="panel__nav panel__nav--right-down js-down js-right">
            down/right
          </span>
          <span className="panel__nav panel__nav--down js-down">down</span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="theme/theme.html">精选主题</a>
            </span>
          </div>
        </div>
        <div className="panel" data-x-pos="-1" data-y-pos="-1">
          <div
            id="Layer6"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img7} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--up js-up">up</span>
          <span className="panel__nav panel__nav--right-top js-up js-right">
            up/right
          </span>
          <span className="panel__nav panel__nav--right js-right">right</span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="game/index.html">交互游戏</a>
            </span>
          </div>
        </div>
        <div className="panel" data-x-pos="1" data-y-pos="-1">
          <div
            id="Layer7"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img9} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--up js-up">up</span>
          <span className="panel__nav panel__nav--left-top js-up js-left">
            up/left
          </span>
          <span className="panel__nav panel__nav--left js-left">left</span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="book/index.html">艺术书籍</a>
            </span>
          </div>
        </div>
        <div className="panel" data-x-pos="1" data-y-pos="0">
          <div
            id="Layer8"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img10} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--up js-up">up</span>
          <span className="panel__nav panel__nav--left-top js-up js-left">
            up/left
          </span>
          <span className="panel__nav panel__nav--left js-left">left</span>
          <span className="panel__nav panel__nav--left-down js-down js-left">
            down/left
          </span>
          <span className="panel__nav panel__nav--down js-down">down</span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="personal1/index.html">个人中心</a>
            </span>
          </div>
        </div>
        <div className="panel" data-x-pos="0" data-y-pos="-1">
          <div
            id="Layer9"
            style={{
              position: "absolute",
              left: "",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <img alt="" src={img8} width="100%" height="100%" />
          </div>
          <span className="panel__nav panel__nav--up js-up">up</span>
          <span className="panel__nav panel__nav--left-top js-up js-left">
            up/left
          </span>
          <span className="panel__nav panel__nav--right-top js-up js-right">
            up/right
          </span>
          <span className="panel__nav panel__nav--left js-left">left</span>
          <span className="panel__nav panel__nav--right js-right">right</span>
          <div className="panel__animation-list">
            <span
              className="js-animation active"
              data-animation="animate--none"
            >
              <a href="digital/index.html">交互展览</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
