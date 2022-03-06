(function (window) {
    //즉시실행함수

    //tab
    const tabsTarget = document.querySelectorAll(".tabs-title-wrap ul li");
    const tabsContent = document.querySelectorAll(".tabs-content-wrap .tabs-content");

    function tabsClickedFunc(index) {
        return function (e) {
            [].forEach.call(tabsContent, function (item, i) {
                item.classList.remove("active");
                tabsTarget[i].classList.remove("active");
            });
            e.currentTarget.classList.add("active");
            tabsContent[index].classList.add("active");
        };
    }

    function globalMenu(props) {
        const menu = document.querySelector(".header .gnb");
        const logo = document.querySelector(".header .logo");
        const menuWrapper = document.querySelector(".ly-iframe-wrap");
        const menuFrame = document.querySelector("#globalMenu");

        menu.classList.toggle("active");
        logo.classList.toggle("active");
        menuWrapper.classList.toggle("active");
        const _childBox = menuFrame.contentWindow.document.querySelector(".menu-box");
        const _childLag = menuFrame.contentWindow.document.querySelector(".change-language");

        if (menu.classList.contains("active")) {
            //active가 있을때 메뉴 오픈
            _childBox.classList.add("open");
            _childLag.classList.add("open");
        } else {
            //active가 없을때 메뉴 닫힘
            _childBox.classList.remove("open");
            _childLag.classList.remove("open");
        }
    }

    function eventbindFunc() {
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("gnb-menu")) {
                globalMenu(e.target);
            }
        });

        if (tabsTarget.length > 0) {
            [].forEach.call(tabsTarget, function (x, index) {
                x.addEventListener("click", tabsClickedFunc(index), false);
            });
        }
    }

    function init() {
        //초기화
        eventbindFunc();
    }

    init();
})(window);

function singleScenesUpdate(trigger, durations, animation, controllers, uniqueId) {
    const allScened = new ScrollMagic.Scene({
        triggerElement: trigger,
        duration: durations,
    })
        .setTween(animation)
        .addTo(controllers);
}

function multipleScrenesUpdate(trigger, durations, animation, controllers, uniqueId) {
    const allScened = new ScrollMagic.Scene({
        triggerElement: [].forEach.call(trigger, function (x) {
            return x;
        }),
        duration: durations,
    })
        .setTween(animation)
        .addTo(controllers)
        .addIndicators({
            name: [].forEach.call(uniqueId, function (x) {
                return x;
            }),
        });
}

//메뉴 클릭시 애니메이션을 표현을 위해 만든 함수
function clickMenuFocus(props) {
    const menu = window.parent.document.querySelector(".header .gnb");
    const logo = window.parent.document.querySelector(".header .logo");
    const menuWrapper = window.parent.document.querySelector(".ly-iframe-wrap");
    const menuFrame = window.parent.document.querySelector("#globalMenu");

    const _childBox = document.querySelector(".menu-box");
    const _childLag = document.querySelector(".change-language");
    if (props) {
        menuWrapper.classList.remove("active");
        menu.classList.remove("active");
        logo.classList.remove("active");
        _childBox.classList.remove("open");
        _childLag.classList.remove("open");

        if (props === "WWD") {
            window.parent.location.href = "/pages/whatwedo.html";
        } else if (props === "WWA") {
            window.parent.location.href = "/pages/whoweare.html";
        } else {
            window.parent.location.href = "/pages/contactus.html";
        }
    }
}