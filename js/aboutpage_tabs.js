$(".tab-btn").click(function () {
    var btn_index = $(".tab-btn").index(this);
    $(".tab-btn").removeClass('tab_active')
    $(".tab-content").removeClass('tab_active')
    $(this).addClass('tab_active')
    $(`.tab-content:nth-child(${btn_index + 1}`).addClass('tab_active')
})

$(".map01").mouseover(function () {
  
    $(".box01").css('display', 'block')
})

$(".map01").mouseout(function () {
  
    $(".box01").css('display', 'none')
})
$(".map02").mouseover(function () {
  
    $(".box02").css('display', 'block')
})

$(".map02").mouseout(function () {
  
    $(".box02").css('display', 'none')
})
   
$(".map03").mouseover(function () {
  
    $(".box03").css('display', 'block')
})

$(".map03").mouseout(function () {
  
    $(".box03").css('display', 'none')
})
   
$(".map04").mouseover(function () {
  
    $(".box04").css('display', 'block')
})

$(".map04").mouseout(function () {
  
    $(".box04").css('display', 'none')
})
    

