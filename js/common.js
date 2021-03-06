(function (window) {
    //즉시실행함수

    //tab
    const tabsTarget = document.querySelectorAll(".tabs-title-wrap ul li");
    const tabsContent = document.querySelectorAll(".tabs-content-wrap .tabs-content");

    //button
    const buttonGroup = document.querySelectorAll(".button-group .button");

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
        const header = document.querySelector(".header");
        const menuWrapper = document.querySelector(".ly-iframe-wrap");
        const menuFrame = document.querySelector("#globalMenu");

        menu.classList.toggle("active");
        logo.classList.toggle("active");
        menuWrapper.classList.toggle("active");
        header.classList.toggle("active");
        const _childBox = menuFrame.contentWindow.document.querySelector(".ly-menu");

        if (menu.classList.contains("active")) {
            //active가 있을때 메뉴 오픈
            _childBox.classList.add("open");
        } else {
            //active가 없을때 메뉴 닫힘
            _childBox.classList.remove("open");
        }
    }

    function singleButtonGroupClick(e) {
        const parentButtonChild = e.target.parentElement.querySelectorAll(".button");
        [].forEach.call(parentButtonChild, function (x) {
            x.classList.remove("active");
        });
        e.target.classList.add("active");
    }
    function multipleButtonGroupClick(e) {
        e.target.classList.toggle("active");
    }

    function eventbindFunc() {
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("gnb-menu")) {
                globalMenu(e.target);
            }
        });

        if (buttonGroup.length > 0) {
            [].forEach.call(buttonGroup, function (x) {
                if (x.parentElement.dataset.type) {
                    if (x.parentElement.dataset.type === "single") {
                        x.addEventListener("click", singleButtonGroupClick, false);
                    } else {
                        x.addEventListener("click", multipleButtonGroupClick, false);
                    }
                }
            });
        }

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

//메뉴 클릭시 애니메이션을 표현을 위해 만든 함수
function clickMenuFocus(props) {
    const menu = window.parent.document.querySelector(".header .gnb");
    const logo = window.parent.document.querySelector(".header .logo");
    const header = window.parent.document.querySelector(".header");
    const menuWrapper = window.parent.document.querySelector(".ly-iframe-wrap");

    const _childBox = document.querySelector(".ly-menu");
    if (props) {
        menuWrapper.classList.remove("active");
        menu.classList.remove("active");
        logo.classList.remove("active");
        _childBox.classList.remove("open");
        header.classList.remove("active");

        if (props === "WWD") {
            window.parent.location.href = "./whatwedo.html";
        } else if (props === "WWA") {
            window.parent.location.href = "./whoweare.html";
        } else if (props === "KR") {
            window.parent.location.href = "../kr/main.html";
        } else if (props === "ENG") {
            window.parent.location.href = "../eng/main.html";
        } else {
            window.parent.location.href = "./contactus.html";
        }
    }
}

function openPopup(props) {
    props.classList.add("open");
}

function closePopup(props) {
    props.classList.remove("open");
}
