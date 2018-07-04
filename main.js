setInterval(step, 1);

$(document).on("click", function () {
    if (screen_width < width_switch) {
        if (nav_state == "open" || nav_state == "opening") {
            nav_state = "closing"
        }
    }
})

$("#nav-about").on("click", function (event) {
    event.preventDefault()
    if (screen_width < width_switch) {
        event.stopPropagation()
        nav_state = "closing"
    }
    $('body,html').animate({
        scrollTop: $("#about").offset().top - 72
    }, 500);
})

$("#nav-skills").on("click", function (event) {
    event.preventDefault()
    if (screen_width < width_switch) {
        event.stopPropagation()
        nav_state = "closing"
    }
    $('body,html').animate({
        scrollTop: $("#skills").offset().top - 72
    }, 500);
})

$("#nav-work").on("click", function (event) {
    event.preventDefault()
    if (screen_width < width_switch) {
        event.stopPropagation()
        nav_state = "closing"
    }
    $('body,html').animate({
        scrollTop: $("#work").offset().top - 72
    }, 500);
})

$("#nav-contact").on("click", function (event) {
    event.preventDefault()
    if (screen_width < width_switch) {
        event.stopPropagation()
        nav_state = "closing"
    }
    $('body,html').animate({
        scrollTop: $("#contact").offset().top - 72
    }, 500);
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
var width_switch = 600

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
        console.log("!")
        $("#menu-img").hide()
        $(".nav-item").show()
        $(".nav").css("display", "flex")
        $(".nav").css("width", "100%")
        $(".nav").css("z-index", "9")
        $(".nav").css("right", "0")
        $(".nav").css("left", "0")
        $(".nav").css("top", "0")
        $(".nav").css("justify-content", "center")
        $(".nav").css("padding-bottom", "8px")
        $(".nav-item").css("width", "20%")
        $(".nav").css("height", "auto")

        $("#nytscraper").css("height", parseInt($("#jquerygames").css("height"), 10) + "px")
        $("#trollstoll").css("height", parseInt($("#twohundredjobfound").css("height"), 10) + "px")
    } else {
        $("#nytscraper").css("height", "auto")
        $("#trollstoll").css("height", "auto")
        if (nav_state == "closed") {
            $(".nav-item").hide()
            $("#menu-img").show()
            $(".nav").css("display", "block")
            $(".nav").css("width", "32px")
            $(".nav").css("height", "32px")
            $(".nav").css("padding", "0px")
            $(".nav").css("top", "4px")
            $(".nav").css("left", "4px")
            $(".nav-item").css("width", "auto")
            $("#menu-img").show()
        }
        if (nav_state == "open") {
            $("#menu-img").hide()
            $(".nav").css("width", (screen_width - 16) + "px")
            $(".nav").css("height", "272px")
            $(".nav-item").show()
        }
    }
}
