/*on refresh scrolls to top*/
/*$(document).ready(function() {
    var url = window.location.href;
    if( url.indexOf('#') > 0 ) {
    	url = url.slice(0, url.lastIndexOf('#'));
        window.location.replace(url);
    } else {
        $(document).scrollTop();
    }
});*/


window.onbeforeunload = function () {
        window.scrollTo(0,0);
};