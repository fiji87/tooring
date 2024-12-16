// Use the cup menu entry as a link
var width_cutoff = 680;


$(".topbar#cupbutton").on(
    "click",
    function() {
        if (window.innerWidth <= width_cutoff) {
            window.location = "http://127.0.0.1:4000/cup";
        }
    }
);
