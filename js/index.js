/**
 * Created by Ethan on 16/4/7.
 */

activeNavItem = "index";

$(function () {
    $('.slides').slidesjs({
        navigation: false,
        //如果你不使用分页的方式显示图片你可以设置为false
        pagination: false,
        play: {
            active: false,
            auto: true,
            interval: 4000,
            swap: true
        }
    });
});
