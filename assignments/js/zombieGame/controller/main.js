/*Start btn*/

$("#btn-start").click(function () {
    startGame();
});

function startGame() {
    /*hide start menu*/
    $("#play-game-menu").css("display", "none");
    $("#score").css("display", "block");

    createEnemy();
    $(window).on("keydown", function (e) {
        var left = parseInt($("#solo-back").css("left"));

        /*solo left*/
        if (e.key == "ArrowLeft" && left > -2100) {
            $("#solo-back").css("left", left - 50 + "px")
        }
        /*solo right*/
        else if (e.key == "ArrowRight" && left < 1500) {
            $("#solo-back").css("left", left + 50 + "px")
        }

        /*shoot laser*/
        if (e.keyCode == 32) {
            let bullet = createBullet();
            shootGun(bullet, left);
        }
    });
}

const space = $("#space").get(0);