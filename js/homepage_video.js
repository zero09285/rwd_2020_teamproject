window.onload = function () { //Loading效果 與 Aos初始化
    AOS.init();
    $('.header').addClass('noactive')
    $('body').addClass('scrollY_hidden')
    $(".loading_page").fadeIn(200)

    setTimeout(function () {
        $('.header').removeClass('noactive')
        $('body').removeClass('scrollY_hidden')
        $(".loading_page").fadeOut(500);
    }, 500); 

};

var scale = anime({
    targets: ".video_slidebox",
    translateY: - 50 + "%",
    scale: 1.25,
    duration: 1000,
    elasticity: '1000',
    direction: 'alternate',
    loop: true
})


var jump = anime({
    targets: ".play_box",
    // translateY: - 25 + "%",
    scale: 2,
    duration: 3000,
    elasticity: '1900',
    direction: 'alternate',
    loop: true
})

// var animation = anime({
//     targets: ".swiper-right",
//     scale: 2.5,
//     translateX: 18 + 'vw',
//     borderRadius: 50,
//     duration: 2000,
//     elasticity: '1000',
//     easing: 'linear',
//     direction: 'alternate',
//     loop: true
// });


    var fly = anime({
        targets: ".play_box_son",
        scale: 4,
        duration: 8000,
        elasticity: '10000',
        easing: 'linear',
        direction: 'forward',
        // loop: true
    });

    $(".play_box_son").css('opacity', 0.35);

    
    // var big = anime({
    //     targets: "canvas",
    //     scale: 3,
    //     duration: 10000,
    //     elasticity: '10000',
    //     easing: 'linear',
    //     direction: 'forward',
    //     // loop: true
    // });



$(function () {

    $(".video_slidebox").draggable({
        revert: true, //放開後移回原位
        containment: "parent", //限制移動區塊只在父層中
        axis: "x", //只移動X軸

        drag: function () { //移動時計算透明度
            var distance = $(".play_box").position().left - $(".video_slidebox").position().left
            var offset = distance / 1000
            $(".video_mask").css('opacity', offset);
            // $(".swiper-right").css('opacity', offset);

            if (distance <= 225) {
                $('.video_slidebox').addClass('alpha');
            }

        },
    })

})

$(".video_slidebox").on("dragstop", function () {//拖動結束後增加現在畫面中的noactive、增加video的acvtive、停止時回復遮罩的透明度 
    $(".video_mask").css('opacity', 0.8);

    // $(".swiper-right").css('opacity', 1);
    if ($(".video_mask").css('opacity') <= 0.23) {
        $('#banner').addClass('noactive')
        $('header').addClass('noactive')
        $('footer').addClass('noactive')
        $('.gototop').addClass('noactive')
        $('.video_section_bottom').addClass('noactive')
        $('.reservation').addClass('noactive')
        $('.diy_section').addClass('noactive')
        $('.video_switch').addClass('active')
        $(".video_mask").addClass('noactive')
        $(".play_box").addClass('noactive')
        $(".video_slidebox").addClass('noactive')
        $('.video_slidebox_section').addClass('noactive');
        $('span').addClass('noactive')
        $('body').addClass('scrollY_hidden')
        $('body').addClass('noHeight')   
        // $('.swiper-right').addClass('noactive')
        $('.video_section').fadeOut(1000)

        var big = anime({
            targets: "canvas",
            scale: 6,
            duration: 400,
            elasticity: '10000',
            easing: 'linear',
            direction: 'forward',
            // loop: true
        });
        

        setTimeout(function () { //設定延遲的函式
            $('.video_section').fadeIn(1)
            $(".videoplayer_box").addClass('active')
            $(".videoplayer").addClass('active')
            $('canvas').addClass('noactive');

            setTimeout(function () {//設定延遲的函式
                $('.video_switch').removeClass('active')
            }, 10)

        }, 1000);
    }
})

$(".videoplayer_box_exit"),$('.videoplayer_box').click(function () {//看完影片按離開之後回復原始畫面

    $('.video_section').fadeOut(500)
    $('canvas').removeClass('noactive');

    setTimeout(function () {//設定延遲的函式

        // $(".video_switch-back").addClass('active')
        $(".videoplayer_box").removeClass('active')
        $(".videoplayer").removeClass('active')

        setTimeout(function () {//設定延遲的函式

            // $(".video_switch-back").removeClass('active')
            $(".video_mask").removeClass('noactive')
            $(".play_box").removeClass('noactive')
            $(".video_slidebox").removeClass('noactive')
            $('.video_slidebox_section').removeClass('noactive');
            $('.video_section_bottom').removeClass('noactive')
            $('.video_slidebox').removeClass('alpha');
            $('span').removeClass('noactive')
            $('body').removeClass('scrollY_hidden')
            $('body').removeClass('noHeight')    
            $('#banner').removeClass('noactive')
            $('header').removeClass('noactive')
            $('footer').removeClass('noactive')
            $('.gototop').removeClass('noactive')
            $('.reservation').removeClass('noactive')
            $('.diy_section').removeClass('noactive')
            $('.RWD_playbox').removeClass('noactive')
            $('.RWD_playbox_text').removeClass('noactive')
            // $('.swiper-right').removeClass('noactive')
            $('.video_section').fadeIn(1000)

            setTimeout(function (p) {
                var small = anime({
                    targets: "canvas",
                    scale: 1,
                    duration: 1000,
                    elasticity: '10000',
                    easing: 'linear',
                    direction: 'forward',
                    // loop: true
                });
    
            },500)
           
        }, 10)

    }, 500);





    // $('.swiper-right').removeClass('noactive')
    // $(".video_mask").removeClass('noactive')
    // $(".play_box").removeClass('noactive')
    // $(".video_slidebox").removeClass('noactive')
    // $('.video_slidebox').removeClass('alpha');
})

    $('.RWD_playbox').click(function () {
        $('#banner').addClass('noactive')
        $('header').addClass('noactive')
        $('footer').addClass('noactive')
        $('.gototop').addClass('noactive')
        $('.RWD_playbox').addClass('noactive')
        $('.RWD_playbox_text').addClass('noactive')
        $('.video_section_bottom').addClass('noactive')
        $('.reservation').addClass('noactive')
        $('.diy_section').addClass('noactive')
        $('.video_switch').addClass('active')
        $(".video_mask").addClass('noactive')
        $(".play_box").addClass('noactive')
        $(".video_slidebox").addClass('noactive')
        $('.video_slidebox_section').addClass('noactive');
        $('span').addClass('noactive')
        $('body').addClass('scrollY_hidden')
        $('body').addClass('noHeight')   
        // $('.swiper-right').addClass('noactive')
        $('.video_section').fadeOut(1000)

        var big = anime({
            targets: "canvas",
            scale: 6,
            duration: 400,
            elasticity: '10000',
            easing: 'linear',
            direction: 'forward',
            // loop: true
        });
        

        setTimeout(function () { //設定延遲的函式
            $('.video_section').fadeIn(1)
            $(".videoplayer_box").addClass('active')
            $(".videoplayer").addClass('active')
            $('canvas').addClass('noactive');

            setTimeout(function () {//設定延遲的函式
                $('.video_switch').removeClass('active')
            }, 10)

        }, 1000);
    })