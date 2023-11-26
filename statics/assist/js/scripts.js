jQuery(document).ready(function ($) {
    "use strict";

    $(document).on('click', '.devices .icon', function () {
        var type = $(this).attr('class').replace('icon ' , '');

        $('.preview').attr('class', 'preview ' + type);
    });

    $(document).on('click', '.close', function (e) {
        e.preventDefault();
        $('body').toggleClass('minimized');
        return false
    });

    $(document).on('click', '.showTopBar', function (e) {
        e.preventDefault();
        $('body').toggleClass('minimized');
        return false
    });
});