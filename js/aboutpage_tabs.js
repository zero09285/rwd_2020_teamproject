$(".tab-btn").click(function () {
    var btn_index = $(".tab-btn").index(this);
    $(".tab-btn").removeClass('tab_active')
    $(".tab-content").removeClass('tab_active')
    $(this).addClass('tab_active')
    $(`.tab-content:nth-child(${btn_index + 1}`).addClass('tab_active')
})