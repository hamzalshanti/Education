$(function () {


$('.owl-carousel').owlCarousel({
    items:3,
    dots:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoWidth:true,
    autoplayHoverPause:true,
    loop: true,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
        autoWidth: false,
        margin: 10
    },
    1200 : {
        items: 3,
    },

}

});


animate();
$(document).scroll(function () {
animate();
});

function animate(){
    var y = $(this).scrollTop();
    var heroPosition = $(".hero-section").position();
    var aboutPosition = $(".about-us").position();
    var coursesPosition = $(".courses").position();
    var blogPosition = $(".student-blog").position();
    var stat = $('.statistics').position();
    if(y >= 0) {
      $('main').addClass('hero-ani');
    }
    if (y > (heroPosition.top + 300)) {
    	$('main').addClass('animate');
    }
    if (y > (aboutPosition.top - 208)) {
    	$('main').addClass('animate2');
    }
    if (y > (coursesPosition.top - 208)) {
    	$('main').addClass('animate3');
    }
    if (y > (blogPosition.top - 208)) {
    	$('main').addClass('animate4');
    }
    
}

});

//function sideMenu () {
	// $('.navbar-toggler-icon-custom').toggleClass('rotate-icon');
	// $('.overlay').fadeToggle();
	// $('.navbar-collapse-custom').toggleClass('nav-appear');
	// $('body').toggleClass('scroll-hide');
	// $('.navbar-toggler-icon-custom').toggleClass('fa-times');
//}

		// let i = 0;
  //   	let teacherCount = setInterval(function() {
		//  	$('.teacher-count').html(++i);
		// 	if(i == $('.teacher-count').data('count'))
		// 	clearInterval(teacherCount);
  //   	});
  //   	let ii = 0;
  //   	let studentCount = setInterval(function() {
		//  	$('.student-count').html(++ii);
		// 	if(ii == $('.student-count').data('count'))
		// 	clearInterval(studentCount);
  //   	});

  //   	let iii = 0;
  //   	let courseOnlineCount = setInterval(function() {
		//  	$('.course-online-count').html(++iii);
		// 	if(iii == $('.course-online-count').data('count'))
		// 	clearInterval(courseOnlineCount);
  //   	});
    	
  //   	let iiii = 0;
  //   	let courseOfflineCount = setInterval(function() {
		//  	$('.course-offline-count').html(++iiii);
		// 	if(iiii == $('.course-offline-count').data('count'))
		// 	clearInterval(courseOfflineCount);
  //   	});


function sideMenu () {
	$('body').toggleClass('main-header');
}

