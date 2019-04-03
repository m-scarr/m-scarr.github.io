setInterval(step, 1);

$(document).on("click", function () {
    if (screen_width < width_switch) {
        if (nav_state == "open" || nav_state == "opening") {
            nav_state = "closing"
        }
    }
})
$("#jquerygames-link").on("click", function (event) {
    var win = window.open('http://jquerygames.herokuapp.com/');
    if (win) {
        win.focus();
    } else {
        alert('The demo of this project is attempting to open in another tab, but may have been blocked by pop-ups.');
    }
})
$("#jquerygames-ghlink").on("click", function (event) {
    var win = window.open('https://github.com/m-scarr/jQueryGames');
    if (win) {
        win.focus();
    } else {
        alert('The demo of this project is attempting to open in another tab, but may have been blocked by pop-ups.');
    }
})
$("#trollstoll-link").on("click", function (event) {
    var win = window.open('http://trollstoll.herokuapp.com/');
    if (win) {
        win.focus();
    } else {
        alert('The demo of this project is attempting to open in another tab, but may have been blocked by pop-ups.');
    }
})
$("#trollstoll-ghlink").on("click", function (event) {
    var win = window.open('https://github.com/m-scarr/TrollsToll');
    if (win) {
        win.focus();
    } else {
        alert('The demo of this project is attempting to open in another tab, but may have been blocked by pop-ups.');
    }
})
$("#nytscraper-ghlink").on("click", function (event) {
    var win = window.open('https://github.com/m-scarr/NYTscraper');
    if (win) {
        win.focus();
    } else {
        alert('The demo of this project is attempting to open in another tab, but may have been blocked by pop-ups.');
    }
})

$("#nav-about").on("click", function (event) {
    event.preventDefault()
    event.stopPropagation()
    if (screen_width < width_switch) {
        nav_state = "closing"
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    } else {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    }
})
$("#twohundredjobfound-link").on("click", function (event) {
    var win = window.open('http://twohundredjobfound.herokuapp.com/');
    if (win) {
        win.focus();
    } else {
        alert('The demo of this project is attempting to open in another tab, but may have been blocked by pop-ups.');
    }
})
$("#twohundredjobfound-ghlink").on("click", function (event) {
    var win = window.open('https://github.com/m-scarr/twohundredjobfound');
    if (win) {
        win.focus();
    } else {
        alert('The demo of this project is attempting to open in another tab, but may have been blocked by pop-ups.');
    }
})

$(".github-icon").on("click", function (event) {
    event.preventDefault()
    window.open($(this).attr("data"))
})

$("#nav-skills").on("click", function (event) {
    event.preventDefault()

    if (screen_width < width_switch) {
        event.stopPropagation()
        nav_state = "closing"
        $('body,html').animate({
            scrollTop: $("#skills").offset().top
        }, 500);
    } else {
        $('body,html').animate({
            scrollTop: $("#skills").offset().top
        }, 500);
    }
})

$("#nav-work").on("click", function (event) {
    event.preventDefault()
    if (screen_width < width_switch) {
        event.stopPropagation()
        nav_state = "closing"
        $('body,html').animate({
            scrollTop: $("#work").offset().top
        }, 500);
    } else {
        $('body,html').animate({
            scrollTop: $("#work").offset().top
        }, 500);
    }
})

$("#nav-contact").on("click", function (event) {
    event.preventDefault()
    if (screen_width < width_switch) {
        event.stopPropagation()
        nav_state = "closing"
        $('body,html').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    } else {
        $('body,html').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    }
})

$(".nav").on("click", function (event) {
    event.preventDefault()
    if (screen_width < width_switch) {
        event.stopPropagation()
        if (nav_state == "closed" || nav_state == "closing") {
            nav_state = "opening"
        }
    }
})

$("#linkdin_icon").on("click", function (event) {
    event.preventDefault()
    window.open("https://www.linkedin.com/in/michael-scarr-537a95156/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B22YXYhhtQGC5ABMxce1FXw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-nav.settings_view_profile")
})

$("#phone_icon").on("click", function (event) {
    event.preventDefault()
    window.open('tel:6122170598');
})

$("#email_icon").on("click", function (event) {
    event.preventDefault()
    window.open('mailto:michael.m.scarr@gmail.com')
})


$("#hardware-button").on("click", function (event) {
    event.preventDefault()
    $("#hardware-button").fadeOut(1000)
    $("#hardware").fadeIn(1000)
})

$("#hardware").on("click", function (event) {
    event.preventDefault()
    $("#hardware").fadeOut(1000)
    $("#hardware-button").fadeIn(1000)
})

var screen_width = $(window).width()
var nav_state = "closed"
var width_switch = 567

// $("#about-text").css("line-height", Math.floor((container_height - 180) / (about_height / line_height)) + "px")

function step() {
    screen_width = $(window).width()
    if (nav_state == "opening") {
        $("#menu-img").hide()
        if (parseInt($(".nav").css("width"), 10) < (screen_width - 16)) {
            $(".nav").css("width", (parseInt($(".nav").css("width"), 10) + 8) + "px")
        } else if (parseInt($(".nav").css("height"), 10) < 272) {
            $(".nav").css("width", (screen_width - 16) + "px")
            $(".nav").css("height", (parseInt($(".nav").css("height"), 10) + 8) + "px")
        } else {
            nav_state = "open"
        }
    }
    if (nav_state == "closing") {
        $(".nav-item").hide()
        if (parseInt($(".nav").css("height"), 10) > 32) {
            $(".nav").css("height", (parseInt($(".nav").css("height"), 10) - 8) + "px")
        } else if (parseInt($(".nav").css("width"), 10) > 32) {
            $(".nav").css("height", "32px")
            $(".nav").css("width", (parseInt($(".nav").css("width"), 10) - 8) + "px")
        } else {
            nav_state = "closed"
        }
    }
    if (screen_width >= width_switch) {
        nav_state = "closed"
        $("#menu-img").hide()
        $(".mtitle").hide()

        $(".nav-container").css("position", "fixed")
        $(".nav-container").css("top", "0")
        $(".nav-container").css("right", "0")
        $(".nav-container").css("left", "0")
        $(".nav-container").css("z-index", "9")
        $(".nav-container").css("width", "calc(100% - 2px)")
        $(".nav-container").css("border-color", "0")
        $(".nav-container").css("background-color", "rgba(255,255,255,.9)")
        $(".nav-container").css("height", "auto")

        $(".nav").css("z-index", "9")
        $(".nav").css("position", "relative")
        $(".nav").css("width", "100%")
        $(".nav").css("border-radius", "4px")
        $(".nav").css("border-width", "1px")
        $(".nav").css("border-style", "solid")
        $(".nav").css("border-color", "lightgray")
        $(".nav").css("display", "flex")
        $(".nav").css("justify-content", "center")
        $(".nav").css("top", "0")
        $(".nav").css("left", "0")
        $(".nav").css("height", "auto")

        $(".nav-item").css("font-weight", "bold")
        $(".nav-item").css("font-size", "2em")
        $(".nav-item").css("width", "20%")
        $(".nav-item").show()
        $(".title").show()

        console.log($(window).scrollTop() )
        if ($(window).scrollTop() <= 3) {
            $(".title").css("height", "80px")
            $(".title").css("opacity", "1")
        }
         else if ($(window).scrollTop() < 80) {
            var test = (80 - $(window).scrollTop())
            $(".title").css("height", test + "px")
            $(".title").css("opacity", (test - 50) / 50)
        } else if ($(window).scrollTop() >= 80) {
            $(".title").css("height", "0px")
            $(".title").css("opacity", "0")
        }
        // } else {
        //     $(".title").fadeIn()
        // }
    } else {
        $(".title").hide()
        if ($(window).scrollTop() <= 3) {
            $(".mtitle").css("height", "80px")
            $(".mtitle").css("opacity", "1")
        }
         else if ($(window).scrollTop() < 80) {
            var test = (80 - $(window).scrollTop())
            $(".mtitle").css("height", test + "px")
            $(".mtitle").css("opacity", (test - 50) / 50)
        } else if ($(window).scrollTop() >= 80) {
            $(".mtitle").css("height", "0px")
            $(".mtitle").css("opacity", "0")
        }
        if (nav_state == "closed") {
            $(".nav-item").hide()
            $(".nav").css("display", "block")
            $(".nav").css("width", "32px")
            $(".nav").css("height", "32px")
            $(".nav").css("padding", "0px")
            $(".nav").css("top", "4px")
            $(".nav").css("left", "4px")
            $(".nav").css("position", "fixed")
            $(".nav-item").css("width", "auto")
            $("#menu-img").show()
        }
        if (nav_state == "open") {
            $("#menu-img").hide()
            $(".nav").css("width", (screen_width - 16) + "px")
            $(".nav").css("height", "272px")
            $(".nav-item").show()
        }
        $(".mtitle").show()
    }
}
