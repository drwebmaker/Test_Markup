/**
 * Created by valeriy.abornyev on 2/28/2016.
 */
var headerHeight = $("#header").height(),
    navHeight = $(".navigation").height(),
    footerHeight = $("#footer").height(),
    wrapHeight = $(".wrap").height();

$(".left-sidebar").height(wrapHeight - headerHeight - navHeight - footerHeight - 28);