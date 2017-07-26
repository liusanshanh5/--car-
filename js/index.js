	$(".swiper-wrapper").css({
		width:$(window).width(),
		height:$(window).height()
	})

	var mySwiper = new Swiper ('.swiper-container',{
	    	direction: 'vertical',
	    	// loop: true,
	    	// autoplay:3000,
	    	resistance:'100%',
			mousewheelControl : true,
			grabCursor: true,
			// initialSlide:9,//初始页面的展示
			/*onFirstInit:function(){
			$('.swiper-slide').addClass('ani-slide');*/

			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				swiperAnimateCache(swiper); //隐藏动画元素 
	 			swiperAnimate(swiper); //初始化完成开始动画
				 }, 
		 		onSlideChangeEnd: function(swiper){ 
				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			}

		})

//music
	var music = document.getElementsByTagName('music');
	var demo = document.getElementsByTagName('demo');
	var flag = true;
	$(".music").click(function(){
		if (flag) {
			$('.music img').removeClass("demo");
			$()
			flag = false;
		}
		else{
			$('.music img').addClass("demo");
			flag = true;
		}
		
	})

//page3
	//hands 
	$(".hands").click(function(){
		$(".hands img").css("display","none")
	})
	// 车灯
	var flag1 = true;
	$(".fro-light ").click(function(){
		if (flag1) {
			$(".page3-car img").css("display","block");
			flag1 = false;

		}else{
			$(".page3-car img").css("display","none");
			flag1 = true;
		}
	})
	// 前脸
	var flag2 = true;
	$(".front ").click(function(){
		if (flag2) {
			$(".page3-car").css({
				"left":"1.3rem",
				"top":"1.3rem"
			
			});
			
			flag2 = false;

		}else{
			$(".page3-car").css({
				"left":"-2.65rem",
				"top":"3.40rem"
			
			})
			flag2 = true;
		}
	})
	// 轮廓
	var flag3 = true;
	$(".size ").click(function(){
		if (flag3) {
			$(".page3-car").css({
				"left":"-4.2rem",
				"top":"1.1rem"
			
			});
			
			flag3 = false;

		}else{
			$(".page3-car").css({
				"left":"-2.65rem",
				"top":"3.40rem"
			
			})
			flag3 = true;
		}
	})

//page4
	var x = 0,y = 0,x1 = 0,y1 = 0;
	var divs= document.getElementById('page4-car');
	//divs.createEvent('TouchEvent')//固定写法，先创建触摸事件
	divs.addEventListener("touchstart",touchStartFunc1,false);
	divs.addEventListener("touchmove",touchStartFunc2,false);
	divs.addEventListener("touchend",touchStartFunc3,false);

	//对应函数 

	function touchStartFunc1(e){
	 	var touch = e.changedTouches[0];
	 	x = Number(touch.pageX);
	 	y = Number(touch.pageY);
	 	startX = x;
	 	startY = y;
	}

	var a=0,b=0,c=0;
	function touchStartFunc2(event){
	 	var touch = event.changedTouches[0];
	 	x1 = Number(touch.pageX);
	 	y1 = Number(touch.pageY);

	 	if (x1 - x < 0) {
	 		a = Math.floor((x - x1)/10);
	 	}else{
	 		b = Math.floor((x - x1)/10)
	 	}

	 	if (a > b) {
	 		c++;
	 		if (c == 70) {
	 			c = 0;}
	 		}
	 		else if(a == b){
	 			c = c;
	 		}
	 		else if(a < b){
	 			c -- ;
	 			if (c == -1) {
	 				c = 70;
	 			}
	 		}

	 		b = a ;

	 	$("#page4-car img").css("display","none");
	 		$("#page4-car img").eq(c).css("display","none");
	}

	function touchStartFunc3(e){
	 			
	 }

	var scale = 1;
	var timer = null;
	var flagx = true;
	var time = 50;
	$(".rotate").click(function(){
	 	divs.removeEventListener("touchstart",touchStartFunc1,false);
	 	divs.removeEventListener("touchmove",touchStartFunc2,false);
	 	divs.removeEventListener("touchend",touchStartFunc3,false);
	 	if (flagx) {
	 		clearInterval(timer);
	 		var  d= 0 ;
	 		function Animate(){
	 			$("#page4-car img").css("display","none");
	 			$("#page4-car img").eq(d).css("display","block");
	 			if (d >= 71) {
	 				d = 0;

	 			}
	 			d++;
	 		}
	 		timer = setInterval(Animate,time);
	 		flagx = false;
	 	}
	 	else{
	 		clearInterval(timer);
	 		flagx = true;
	 		divs.addEventListener("touchstart",touchStartFunc1,false);
	 		divs.addEventListener("touchmove",touchStartFunc2,false);
	 		divs.addEventListener("touchend",touchStartFunc3,false);
	 	}
	});

	$(".add").click(function(){
		scale +=0.5;
		if (scale >= 2) {
			scale = 2
		}
		$("#page4-car").css("transform","scale("+scale+")")
	});

	$(".scale").click(function(){
		scale -= 0.5;
		if (scale <= 0.5) {
			scale = 0.5
		}
		$("#page4-car").css("transform","scale("+scale+")")

	});

	$(".page4-car").click(function(){
		clearInterval(timer);
		divs.addEventListener("touchstart",touchStartFunc1,false);
 		divs.addEventListener("touchmove",touchStartFunc2,false);
 		divs.addEventListener("touchend",touchStartFunc3,false);
	})

// page5
	$(".page5-img1").click(function(){
		$(".AQS2 ").fadeOut(1000,function(){
			$(".AQS3 ").fadeIn(1000);
			$(".AQS3 ").fadeIn(1000,function(){
				$(".AQS3 ").fadeOut(1000);
				$(".AQS3 ").fadeOut(1000,function(){
					$(".AQS1 ").fadeIn(1000);
					$(".AQS1 ").fadeIn(1000,function(){
						$(".AQS1 ").fadeOut(1000);
						$(".AQS1 ").fadeOut(1000,function(){
							$(".AQS2").css("display","block")
							
						});
					});
				});
			})

		})
	})

// page6

	$(".click-words").click(function(){
		$(".black").css("display","none");
		$(".page6-img2 img").css("display","none");
		$(".click-words").css("display","none");

	})	

// page6
	$(".page7-img2").click(function(){
		$(".hands3 img").css("display","none");
		$('.music img').removeClass("demo");
	})	

// page10
	// 正则匹配邮箱
	var reg = /^[a-zA-Z0-9]+([_\.]?[a-zA-Z0-9]){0,3}@[a-zA-Z0-9]{1,24}(\.[a-z]{2,3}){1,3}$/;

	$(".btn").click(function(){

		if (reg.test($(".em").val())) {
			alert("呵呵呵")
		}

		else{
			$(".email span").css("display","block");

		}

		// if ($(".email span").val().length ==0) {
		// 		$(".email span").css("display","none");
		// 	}
		
	})
	// function oninput(e){

	// }
	$(".em").on("input",function(){
		if($(".em").val()==""){
			$(".email span").css("display","none");
		}
	})