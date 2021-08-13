"use strict";
(function () {
    var avengers = 1;
    var villians = 20;
    console.log({ avengers: avengers });
    console.log({ villians: villians });
    if (avengers < villians) {
        console.log('oppsss!');
    }
    else {
        console.log('wohooo');
    }
    avengers = 123;
    console.log({ avengers: avengers });
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
