$(document).ready(function() {
    "use strict";
    // Instagram Feed

    jQuery.fn.spectragram.accessData = {
        accessToken: '223595357.67fbf55.047ed77aecd44effa5f1addb07630d18',
        clientID: '67fbf553629e4345ab1f55f34f77e1c3'
    };

    $('.instafeed').each(function() {
        $(this).children('ul').spectragram('getUserFeed', {
            query: 'outofbabylon',
            max: 12,
            size: 'medium',
            wrapEachWith: '<p></p>'
        });
    });
});
