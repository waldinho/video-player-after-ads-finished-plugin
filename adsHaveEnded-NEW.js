videojs.registerPlugin('adsHaveEnded', function(options) {
    var player = this;

    function showOnAddEnd(options) {

        var closeButton = document.getElementsByClassName("video-popout-close");

        if (closeButton.length > 0) {
            var closeButton = document.querySelector(".video-popout-close");

            function fadeIn(options, closeButton) {
                var closeButton = document.querySelector(".video-popout-close");
                closeButton.removeAttribute("style")
                closeButton.style.opacity = 0;
                var fade = function() {
                    closeButton.style.display = "table-cell";
                    closeButton.style.position = "absolute";
                    closeButton.style.bottom = "12px";
                    closeButton.style.right = "0";
                    closeButton.style.opacity = +closeButton.style.opacity + 0.01;
                    if (+closeButton.style.opacity < 1) {
                        (window.requestAnimationFrame && requestAnimationFrame(fade)) || setTimeout(fade, 16)
                    }
                };
                fade();
            }
            fadeIn(closeButton);
        } else {
            console.log("WARNING: Close button not present");
        }
    };
    player.on('ads-ad-ended', function(options) {
        showOnAddEnd();
    });
    player.on('ima3-ad-error', function(options) {
        showOnAddEnd();
    });
    player.on('ima3error', function(options) {
        showOnAddEnd();
    });
    player.on('ima3-hard-timeout', function(options) {
        showOnAddEnd();
    });
});
