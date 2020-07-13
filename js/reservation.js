
        // radio + 打勾的js
        $('input[name="radio-btn"]').wrap('<div class="radio-btn"><i></i></div>');
        $(".radio-btn").on('click', function () {
            var _this = $(this),
                block = _this.parent().parent();
            block.find('input:radio').attr('checked', false);
            block.find(".radio-btn").removeClass('checkedRadio');
            _this.addClass('checkedRadio');
            _this.find('input:radio').attr('checked', true);
        });
        $('input[name="check-box"]').wrap('<div class="check-box"><i></i></div>');
        $.fn.toggleCheckbox = function () {
            this.attr('checked', !this.attr('checked'));
        }
        $('.check-box').on('click', function () {
            $(this).find(':checkbox').toggleCheckbox();
            $(this).toggleClass('checkedBox');
        });



        //bottom的js
        var $button = document.querySelector('.button');
        $button.addEventListener('click', function () {
            var duration = 0.3,
                delay = 0.08;
            TweenMax.to($button, duration, { scaleY: 1.6, ease: Expo.easeOut });
            TweenMax.to($button, duration, { scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay });
            TweenMax.to($button, duration * 1.25, { scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
        });
        