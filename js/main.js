
$(document).ready(function() {
		$(".section-description li").click(function(){
		$(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('.img-service').removeClass('active').eq($(this).index()).addClass('active');
		$(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('.description-text').removeClass('active').eq($(this).index()).addClass('active');
	});

$('body').delegate('.photo-nav-item:not(.active)', 'click', function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		const classNameCategory = $(this).attr('data-target');	
		$('.photo-item').hide();
		if(classNameCategory === "category-all") {
			$('.photo-item').slice(0, 12).show();
		}
		else {
			$(`.${classNameCategory}`).slice(0, 12).show();
		}
	});

$(".photo-item").hover(function(){
	let hoverInfo = $(this).data("info");
	hoverInfo = hoverInfo.split("; ");
	$(this).animate("slow");
	$(this).prepend(`<div class="amazing-category-item">
                     <div class="categ-icon">
	                     <a href=""><i class=" fas fa-link"></i></a> 
	                     <a href=""><i class="search-icon fas fa-search"></i></a>
                    </div>
                    <p class="category-description">${hoverInfo[0]}<span>${hoverInfo[1]}</span></p>
                    </div>`);
}, function(){
	$(this).find(".amazing-category-item").remove();
});

	$('.btn-load-more').click(function() {
		$('.hidden').delay().show(400);
	$('.btn-load-more').mouseout(function () {
       	$(this).hide();
    });
	});

$(".persons li").click(function () {
    $(this).addClass("active").siblings().removeClass("active").closest(".person-slider").find(".person-photo div").removeClass("active").eq($(this).index() - 1).addClass("active");
    $(this).addClass("active").siblings().removeClass("active").closest(".person-block").find(".person-item").removeClass("active").eq($(this).index() - 1).addClass("active");
});
$("#btn-slide-prev").click(function (e) {
    e.preventDefault();
    const thumbnails = $(".person-item");
    let needIndex = 0;
    for(let i = 0; ; i++) {
        if($(`.person-item:eq(${i})`).hasClass("active")) {
            needIndex = i;
            break;
        }
    }

    $(`.person-photo div, .person-item:eq(${needIndex})`).removeClass("active");
    $(`.person-photo div:eq(${needIndex-1}), .person-item:eq(${needIndex-1})`).addClass("active");
});

$("#btn-slide-next").click(function (e) {
    e.preventDefault();
    e.preventDefault();
    const thumbnails = $(".person-item");
    let needIndex = 0;
    for(let i = 0; ; i++) {
        if($(`.person-item:eq(${i})`).hasClass("active")) {
            needIndex = i;
            break;
        }
    }

    $(`.person-photo div, .person-item:eq(${needIndex})`).removeClass("active");
    
    if($(`.person-item:eq(${needIndex+1})`).length != 0) {
        $(`.person-photo div:eq(${needIndex+1}), .person-item:eq(${needIndex+1})`).addClass("active");
    }
    else {
        $(`.person-photo div:eq(0), .person-item:eq(0)`).addClass("active");
    }
    
    $(`.person-photo div.person-item:eq(${needIndex+1})`).addClass("active");
    
    });
});






