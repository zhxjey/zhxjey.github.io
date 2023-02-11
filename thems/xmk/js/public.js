$(function () {
    $('.search h6').click(function () {
        $('.search form').toggleClass('ac')
        return false
    })
    $('.search input').click(function () {
        return false
    })
    $('body').click(function () {
        $('.search form').removeClass('ac')
    })
    if ($(window).width() > 1200) {
        $('.btn').click(function () {
            $(this).toggleClass('ac')
        })
    }else{
        $('.btn').click(function () {
            $(this).toggleClass('ac')
            $('.nav').stop().slideToggle()
        })
    }
    if ($('.zzlist').length > 0) {
        console.log(11)

        function scrollFn(length) {
            if (scrI == length.length) {
                return false;
            }
            var boxPos = $(length[scrI]).offset().top;
            var winPos = $(window).scrollTop() + scrHeight - 300;
            console.log($(length[1]))
            if ($(length[1]).offset().top < winPos) {
                console.log(2)
                $("#num1").rollNum({
                    deVal: 8000,
                });
                $("#num2").rollNum({
                    deVal: 6.5,
                });
                $("#num3").rollNum({
                    deVal: 3,
                });
                $("#num4").rollNum({
                    deVal: 4.5,
                });
                $("#num5").rollNum({
                    deVal: 5,
                });
                $('#num2 .dataOne:eq(1)').width(30).find('span').text('.')
                $('#num4 .dataOne:eq(1)').width(30).find('span').text('.')
            }
            if (boxPos < winPos) {
                $(length[scrI]).addClass('active');

                scrI++;
                if (scrI < length.length) {
                    scrollFn(length);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        var scrollArrty = ['.gsjj', '.zzlist', '.ablist li:eq(0)', '.ablist li:eq(1)', '.ablist li:eq(2)', '.ablist li:eq(3)', '.abpic'];
        var scrI = 0;
        var scrHeight = window.screen.availHeight;
        $(window).scroll(function () {
            scrollFn(scrollArrty);
        })
        scrollFn(scrollArrty);
    }
    // if ($('#num6').length > 0) {
    //     function scrollFn(length) {
    //         if (scrI == length.length) {
    //             return false;
    //         }
    //         var boxPos = $(length[scrI]).offset().top;
    //         var winPos = $(window).scrollTop() + scrHeight - 300;
    //         if ($(length[0]).offset().top < winPos) {
    //             console.log(333)
    //             $("#num6").rollNum({
    //                 deVal: 30,
    //             });
    //             $("#num7").rollNum({
    //                 deVal: 2000,
    //             });
    //         }
    //         if (boxPos < winPos) {
    //             $(length[scrI]).addClass('active');

    //             scrI++;
    //             if (scrI < length.length) {
    //                 scrollFn(length);
    //             } else {
    //                 return false;
    //             }
    //         } else {
    //             return false;
    //         }
    //     }
    //     var scrollArrty = ['.xsfg'];
    //     var scrI = 0;
    //     var scrHeight = window.screen.availHeight;
    //     $(window).scroll(function () {
    //         scrollFn(scrollArrty);
    //     })
    //     scrollFn(scrollArrty);
    // }else{
    //     return 
    // }

    $("a").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 20 + "px"
        }, 500);
        return false; //不要这句会有点卡顿
    });
})