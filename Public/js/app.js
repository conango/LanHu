'use strict';
var Lanhu;
(function (Lanhu) {
    Lanhu.debug = true;
    function Start() {
        var bg = document.querySelector('.intro__background__left .--bg');
        window.addEventListener('click', function () {
            //bg.style.opacity = 0
        }, false);
    }
    Lanhu.Start = Start;
})(Lanhu || (Lanhu = {}));
var app = new Lanhu.Start();
//# sourceMappingURL=app.js.map