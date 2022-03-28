//머큐리프로젝트 애니메이션 트리거
const trs100 = document.querySelectorAll(".trs100");
const object_earth = document.querySelector("#object01");
const aboutus_background = document.querySelector(".aboutus");
const history_background = document.querySelector(".history");
const ourteam_background = document.querySelector(".ourteam");

const history_textArea_list = document.querySelector("#history .text-area.list");
const ourteam_textArea_list = document.querySelector("#ourteam .text-area.list");
const tech_object = document.querySelector(".tech-object");
const tech_textArea = document.querySelector("#techconsulting .text-area");
const title = document.querySelectorAll(".section-wrapper .title-area");
const clientsImg = document.querySelectorAll(".clients-wrap span");

const viewability_wrap = document.querySelector(".viewability-object");
const audience_object_wrap = document.querySelector(".audience-object");
const operations_object_Wrap = document.querySelector(".operations-object");
const coverage_box_wrap = document.querySelector(".coverage-box-wrap");
const analysis_wrap = document.querySelector(".analysis-wrap");

const recruit_textArea_list = document.querySelector("#recruit .text-area.list");

//locomotive
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    // lerp: 0, // Linear Interpolation, 0 > 1 // Try 0.01
    // inertia: 1,
    smooth: true,

    // getDirection: true,
    smartphone: {
        // breakpoint: 0,
        smooth: true,
        // getDirection: true,
    },
    tablet: {
        // breakpoint: 0,
        smooth: true,
        // getDirection: true,
    },
});

locoScroll.on("scroll", ScrollTrigger.update);

gsap.registerPlugin(ScrollTrigger);

setTimeout(() => {
    locoScroll.update();
}, 500);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

function gsap_all_animation() {
    if (title.length > 0) {
        const titleArea = gsap.utils.toArray(".title-area");
        titleArea.forEach((title, index) => {
            gsap.to(title, {
                scrollTrigger: {
                    trigger: title,
                    scroller: "[data-scroll-container]",
                    end: "+=100%",
                    scrub: true,
                    toggleClass: "--active",
                    duration: 1,
                },
            });
        });
    }

    if (trs100.length > 0) {
        const KTRS100 = gsap.utils.toArray(".kr .trs100");
        const ENGTRS100 = gsap.utils.toArray(".eng .trs100");
        KTRS100.forEach((trs, index) => {
            gsap.from(trs, {
                scrollTrigger: {
                    trigger: trs,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=100%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                translateY: 40,
                opacity: 0,
                ease: "power2",
            });
        });

        ENGTRS100.forEach((trs, index) => {
            gsap.from(trs, {
                scrollTrigger: {
                    trigger: trs,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=100%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                translateY: 40,
                opacity: 0,
                ease: "power2",
            });
        });
    }

    if (clientsImg.length > 0) {
        const clients_Images = gsap.utils.toArray(".clients-wrap span");
        clients_Images.forEach((img, index) => {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=50%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                translateY: 60,
                opacity: 0,
                ease: "power2",
            });
        });
    }

    if (object_earth) {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#object01",
                scroller: "[data-scroll-container]",
                start: "top top+=300",
                end: "+=100%",
                scrub: true,
            },
        }).fromTo("#object01", 1, { y: -60, ease: "power2" }, { y: 0, ease: "power2" });
    }

    if (aboutus_background) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutus",
                scroller: "[data-scroll-container]",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo(".aboutus", 1, { y: 60 }, { y: 0 });
    }

    if (history_background) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".history",
                scroller: "[data-scroll-container]",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo(".history", 1, { x: 200 }, { x: 0 });
    }

    if (ourteam_background) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".ourteam",
                scroller: "[data-scroll-container]",
                start: "top+=-1200 top",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo(".ourteam", 1, { x: 200 }, { x: 0 });
    }

    if (history_textArea_list) {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#history .text-area.list ul",
                scroller: "[data-scroll-container]",
                start: "top+=-800 top",
                end: "bottom top",
                scrub: true,
                toggleActions: "play reverse play reverse",
            },
        })
            .from("#history .text-area.list ul", {
                stagger: 0.5,
                css: { className: "-" },
            })
            .to(".text-area.list ul", {
                stagger: 0.5,
                css: { className: "--active" },
            });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#history .text-area.list ul",
                scroller: "[data-scroll-container]",
                start: "top+=-800 top",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo(".text-area.list ul li span", 1, { y: 40, opacity: 0, stagger: 0.5 }, { y: 0, opacity: 1, stagger: 0.5 });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#history .text-area.list ul",
                scroller: "[data-scroll-container]",
                start: "top+=-800 top",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo(".text-area.list ul li p", 1, { x: 40, opacity: 0, stagger: 0.5 }, { x: 0, opacity: 1, stagger: 0.5 });
    }

    if (ourteam_textArea_list) {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#ourteam .text-area.list",
                scroller: "[data-scroll-container]",
                start: "top+=-800 top",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo(".text-area.list dl dt", 1, { y: -10, opacity: 0, stagger: 0.5 }, { y: 0, opacity: 1, stagger: 0.5 });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#ourteam .text-area.list",
                scroller: "[data-scroll-container]",
                start: "top+=-800 top",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo(".text-area.list dl dd span", 1, { y: 60, opacity: 0, stagger: 0.1 }, { y: 0, opacity: 1, stagger: 0.1 });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#ourteam .text-area.list",
                scroller: "[data-scroll-container]",
                start: "top+=-800 top",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo("#ourteam .text-area.list dl dd + dd", 1, { y: 80, opacity: 0, stagger: 0.3 }, { y: 0, opacity: 1, stagger: 0.3 });
    }

    //whatwedo start
    if (tech_object) {
        gsap.timeline({
            scrollTrigger: {
                trigger: "[data-scroll-container]",
                scroller: "[data-scroll-container]",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        }).from("#techconsulting .tech-object .tech-rt-wrap", 2, {
            css: { className: "tech-rt-wrap --active" },
        });
    }

    if (viewability_wrap) {
        gsap.to("#viewability-object .viewability-wrap .circle-wrap.fn01", {
            scrollTrigger: {
                trigger: "#viewability-object .viewability-wrap .circle-wrap.fn01",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
                toggleClass: "--active",
            },
        });

        let viewability_fn02 = gsap.timeline({
            scrollTrigger: {
                trigger: "#viewability-object .viewability-wrap .viewability-text-area.fn02",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
            },
        });
        viewability_fn02.from(".viewability-wrap .viewability-text-area.fn02", { y: -20, opacity: 0 });

        gsap.to("#viewability-object .viewability-wrap .circle-wrap.fn03", {
            scrollTrigger: {
                trigger: "#viewability-object .viewability-wrap .circle-wrap.fn03",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
                toggleClass: "--active",
            },
        });

        let viewability_fn04 = gsap.timeline({
            scrollTrigger: {
                trigger: "#viewability-object .viewability-wrap .viewability-text-area.fn04",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
            },
        });
        viewability_fn04.from(".viewability-wrap .viewability-text-area.fn04", { y: -20, opacity: 0 });
    }

    if (audience_object_wrap) {
        let audience_object_fn01 = gsap.timeline({
            scrollTrigger: {
                trigger: ".audience-wrap .fn01",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
            },
        });
        audience_object_fn01.from(".audience-wrap .fn01", { y: 20, opacity: 0 });

        let audience_object_fn02 = gsap.timeline({
            scrollTrigger: {
                trigger: ".audience-wrap .fn02",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
            },
        });
        audience_object_fn02.from(".audience-wrap .fn02", { y: 60, opacity: 0 });

        let audience_object_fn03 = gsap.timeline({
            scrollTrigger: {
                trigger: ".audience-wrap .fn03",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
            },
        });
        audience_object_fn03.from(".audience-wrap .fn03", { y: 20, opacity: 0 });

        let audience_object_fn04 = gsap.timeline({
            scrollTrigger: {
                trigger: ".audience-wrap .fn04",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
            },
        });
        audience_object_fn04.from(".audience-wrap .fn04", { y: 20, opacity: 0 });

        let audience_object_fn05 = gsap.timeline({
            scrollTrigger: {
                trigger: ".audience-wrap .fn05",
                scroller: "[data-scroll-container]",
                end: "+=70%",
                scrub: true,
            },
        });
        audience_object_fn05.from(".audience-wrap .fn05", 1, { y: 40, opacity: 0 }, "+= -0.5");

        let audience_box_Images = gsap.timeline({
            scrollTrigger: {
                trigger: ".audience-box",
                scroller: "[data-scroll-container]",
                end: "+=30%",
                scrub: true,
            },
        });
        audience_box_Images.fromTo(".audience-box .image.fn01", 1, { x: -40 }, { x: 0 }, "+= -0.5");

        let audience_box_Images02 = gsap.timeline({
            scrollTrigger: {
                trigger: ".audience-box",
                scroller: "[data-scroll-container]",
                end: "+=30%",
                scrub: true,
            },
        });
        audience_box_Images02.fromTo(".audience-box .image.fn03", 1, { x: 40 }, { x: 0 }, "+= -0.5");
    }

    if (operations_object_Wrap) {
        gsap.to(".operations-wrap .circle-wrap.fn01", {
            scrollTrigger: {
                trigger: ".operations-wrap .circle-wrap.fn01",
                scroller: "[data-scroll-container]",
                end: "+=100%",
                scrub: true,
                toggleClass: "--active",
            },
        });

        let operations_fn03 = gsap.timeline({
            scrollTrigger: {
                trigger: ".operations-wrap .circle-wrap.fn-none",
                scroller: "[data-scroll-container]",
                end: "+=50%",
                scrub: true,
            },
        });
        operations_fn03.fromTo(".operations-wrap .circle-wrap.fn-none", 1, { y: 80, opacity: 0 }, { y: 0, opacity: 1 });
    }

    if (coverage_box_wrap) {
        const coverageBox = gsap.utils.toArray(".coverage-box span");
        coverageBox.forEach((box, index) => {
            gsap.from(box, {
                scrollTrigger: {
                    trigger: box,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=100%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                translateY: 40,
                opacity: 0,
                ease: "power2",
            });
        });
    }

    if (analysis_wrap) {
        const analysis_Images = gsap.utils.toArray(".analysis .image");
        const analysis_d = gsap.utils.toArray(".analysis dd");
        analysis_Images.forEach((img, index) => {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=100%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                translateY: -40,
                opacity: 0,
                ease: "power2",
            });
        });

        analysis_d.forEach((text, index) => {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: text,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=70%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                translateY: 40,
                opacity: 0,
                ease: "power2",
            });
        });
    }

    if (recruit_textArea_list) {
        const recruit_dt = gsap.utils.toArray("#recruit .text-area.list dl dt");
        const recruit_h4 = gsap.utils.toArray("#recruit .text-area.list dl dd h4");
        const recruit_span = gsap.utils.toArray("#recruit .text-area.list dl dd span");

        recruit_dt.forEach((dt, index) => {
            gsap.from(dt, {
                scrollTrigger: {
                    trigger: dt,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=30%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                duration: 1,
                translateX: 40,
                opacity: 0,
                ease: "power2",
            });
        });

        recruit_h4.forEach((h4, index) => {
            gsap.from(h4, {
                scrollTrigger: {
                    trigger: h4,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=50%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                translateX: 40,
                opacity: 0,
                ease: "power2",
            });
        });

        recruit_span.forEach((span, index) => {
            gsap.from(span, {
                scrollTrigger: {
                    trigger: span,
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    end: "+=20%",
                    //onUpdate: (self) => console.log(self.direction),
                },
                translateY: 40,
                opacity: 0,
                ease: "power2",
            });
        });
    }
}

window.onload = function () {
    gsap_all_animation();
};
