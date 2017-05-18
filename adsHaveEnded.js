// To Do:

// 3. Add transition
// 4. Check on local, duplicate ES live player and change player id to point to this one to test.

videojs.plugin('adsHaveEnded', function(options) {

    var player = this;

    function showOnAddEnd(options) {
        var closeButton = document.getElementsByClassName("video-popout-close");
        if (closeButton.length > 0) {
            var closeButton = document.querySelector(".video-popout-close");
            closeButton.style.display = "table-cell";
        } else {
            console.log("Close Button not present")
        }
    };

    player.on('ads-ad-ended', function(options) {
        showOnAddEnd();
    });

    player.on('ima3-ad-error', function(options) {
        showOnAddEnd();
    });

});