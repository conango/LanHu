'use strict';

module Lanhu {

    export var debug:boolean = true;

    export function Start() {


        var bg = document.querySelector('.intro__background__left .--bg');

        window.addEventListener('click', function () {
            //bg.style.opacity = 0
        }, false);

    }

}

var app = new Lanhu.Start();