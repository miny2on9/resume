$(() => {
	let $header  = $('.header');
	let $menu = $('.nav-gnb > li');
	let $contents = $('.section');

	$header.removeClass('opacity');

	$menu.on('click', function(e){
		let $this = $(this);
		let $i = $this.index();
		let $section = $contents.eq($i);
		let $sTop = $section.offset().top-100;

		$menu.removeClass('is-active');
		$this.addClass('is-active');

		$('html, body').stop().animate({scrollTop:$sTop});
		
		e.preventDefault();
	});

	$(window).scroll(function(){
		let $sTop = $(window).scrollTop();
		let $sTopHeight = $sTop + 400;

		if ( $(window).scrollTop() <= 85){
			$header.removeClass('scroll');
		} else {
			$header.addClass('scroll');
		}

		$contents.each(function(){
			let $this = $(this);
			let $i = $this.index();

			if( $this.offset().top <= $sTopHeight ){
				$menu.removeClass('is-active');
				$menu.eq($i).addClass('is-active');
			}
		});
	});


});