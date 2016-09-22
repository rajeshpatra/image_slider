$(document).ready(function(){

	slider = {

		initialize: function(){
			var self = this;
			this.counter = 0;
			this.main_image = $("#main-image");
			this.text_main = $("#text-main");
			this.thumbnails = $('.thumbnail-display ul li');

			$(".thumbnail-display ul li").on('click', function(e){

				var target = e.currentTarget;

				var text = $(target).find('.image-text').text();

				console.log(text);

				$(self.text_main).text(text);

				var current_serial = parseInt($(target).find('img').attr('data-serial'));


				self.sliderFromCurrent(current_serial + 1);



				var img_src = $(target).find('img').attr('src');
				$(target).siblings().removeClass('active');
				
				$(target).addClass('active');

				$(self.main_image).attr('src', img_src);
				


			});
			
			this.slideTimer();
		},

		slideTimer: function(){
			var self = this;
			self.timer = setInterval(function(){

				if(typeof self.thumbnails[self.counter] == 'undefined'){

					self.counter = 0;

					$(self.thumbnails[self.counter]).siblings().removeClass('active');
					$(self.thumbnails[self.counter]).addClass('active');

					var text = $(self.thumbnails[self.counter]).find('.image-text').text();

					$(self.text_main).text(text);

					var img_src = $(self.thumbnails[self.counter]).find('img').attr('src');
					$(self.main_image).attr('src', img_src);
					self.counter = self.counter + 1;

				} else {

					$(self.thumbnails[self.counter]).siblings().removeClass('active');
					$(self.thumbnails[self.counter]).addClass('active');

					var text = $(self.thumbnails[self.counter]).find('.image-text').text();

					$(self.text_main).text(text);

					var img_src = $(self.thumbnails[self.counter]).find('img').attr('src');
					$(self.main_image).attr('src', img_src);

					self.counter = self.counter + 1;
				}
				
			}, 2000);
		},

		sliderFromCurrent: function(current_serial){
			var self = this;
			clearInterval(self.timer);

			self.counter = current_serial;

			self.slideTimer();
		}

	}

	slider.initialize();
	

});