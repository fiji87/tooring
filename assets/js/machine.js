// hide language badge
$("document").ready(
    function() {
        // color code blocks
        $("pre.highlight.badge").attr("data-lang", "");
        
        // add icons to side notes
        $(".ui.close.rail.warning.left .ui.segment").append(
            "<i class=\"fa-solid fa-triangle-exclamation\"></i>"
        );
        $(".ui.close.rail.error.left .ui.segment").append(
            "<i class=\"fa-solid fa-bug\"></i>"
        );
        $(".ui.close.rail.info.left .ui.segment").append(
            "<i class=\"fa-solid fa-circle-exclamation\"></i>"
        );

        $(".ui.close.rail.warning.right .ui.segment").prepend(
            "<i class=\"fa-solid fa-triangle-exclamation\"></i>"
        );
        $(".ui.close.rail.error.right .ui.segment").prepend(
            "<i class=\"fa-solid fa-bug\"></i>"
        );
        $(".ui.close.rail.info.right .ui.segment").prepend(
            "<i class=\"fa-solid fa-circle-exclamation\"></i>"
        );
    }
)