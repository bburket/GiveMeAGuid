﻿(function() {
    $('#guidButton').on('click', function() {
        var id = uuid.v4();
        $('#guidText').text(id);
        _gaq.push(['_trackEvent', 'Buttons', 'GenGuid', 'Guid Genned']);
    });

    $('#guidText').text(uuid.v4());
})();

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=160981823996305";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34799949-1']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();