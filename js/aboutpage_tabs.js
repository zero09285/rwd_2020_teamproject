$(".tab-btn").click(function () {
    var btn_index = $(".tab-btn").index(this);
    $(".tab-btn").removeClass('tab_active')
    $(".tab-content").removeClass('tab_active')
    $(this).addClass('tab_active')
    $(`.tab-content:nth-child(${btn_index + 1}`).addClass('tab_active')
})

$(".map01").click(function () {
  
    if ($('#Kiln01').addClass('noactive')) {
        $('#Kiln01').removeClass('noactive')
    }else {
        $('#Kiln01').addClass('noactive')
    }
})
$(".map02").click(function () {

    if ($('#Kiln02').addClass('noactive')) {
        $('#Kiln02').removeClass('noactive')
    }else {
        $('#Kiln02').addClass('noactive')
    }
})
   
$(".map03").click(function () {
    if ($('#Kiln03').addClass('noactive')) {
        $('#Kiln03').removeClass('noactive')
    }else {
        $('#Kiln03').addClass('noactive')
    }
})
   
$(".map04").click(function () {
    if ($('#Kiln04').addClass('noactive')) {
        $('#Kiln04').removeClass('noactive')
    }else {
        $('#Kiln04').addClass('noactive')
    }
})
    

