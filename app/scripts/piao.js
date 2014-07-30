/*
 * Piao.js V0.0
 *
 * Author:
 * yu_dong_han@hotmail.com
 *
 * Description:
 * Make position-absolute html element float when user mouse moving.
 *
 */


(function($) {

    $.fn.piao = function(param) {

        return this.each(function() {
            //items.push(this);

            if (typeof param.init_position !== "object") {
                param.init_position = {}
            }
            if (typeof param.limit !== "object") {
                param.limit = {}
            }
            if (typeof param.change_rate !== "object") {
                param.change_rate = {}
            }


            param.init_position.x = (typeof param.init_position.x !== "undefined") ?
                param.init_position.x : $(this).position().left;

            param.init_position.y = (typeof param.init_position.y !== "undefined") ?
                param.init_position.y : $(this).position().top;

            param.limit.x = (typeof param.limit.x !== "undefined") ?
                param.limit.x : 10;

            param.limit.y = (typeof param.limit.y !== "undefined") ?
                param.limit.y : 10;

            param.change_rate.x = (typeof param.change_rate.x !== "undefined") ?
                param.change_rate.x : 0.1;

            param.change_rate.y = (typeof param.change_rate.y !== "undefined") ?
                param.change_rate.y : 0.1;

            param.$that = $(this);

            //TODO:

            //param.invert
            //param.parent
            //param.stop

            //console.log(param)

            $('.out').on('mousemove.piao', param, function(e) {
                var d = e.data;

                var change_x = (e.clientX - d.$that.position().left) * d.change_rate.x;
                var change_y = (e.clientY - d.$that.position().top) * d.change_rate.y;

                if (Math.abs(change_x) > d.limit.x) {
                    if (change_x > 0) {
                        change_x = d.limit.x;
                    } else {
                        change_x = -d.limit.x;
                    }
                }

                if (Math.abs(change_y) > d.limit.y) {
                    if (change_y > 0) {
                        change_y = d.limit.y;
                    } else {
                        change_y = -d.limit.y;
                    }
                }

                d.$that.css({
                    left: d.init_position.x + change_x,
                    top: d.init_position.y + change_y
                })

            })
        })




        /*

		function set(){
			for(var i=0,l=p.length;i<l;i++){
				var $i = $(p[i].item)
				p[i].pos_left = $i.position().left
				p[i].pos_top = $i.position().top
			}
		}

		set();

		function float(e){
			for(var i=0,l=p.length;i<l;i++){
				if(p[i].stop){
					continue;
				}

				var $i = $(p[i].item),
				//TODO: status : thrill , normal, lazy !important


				//change_x = (e.clientX - p[i].pos_left)*p[i].xrate,
				//change_y = (e.clientY - p[i].pos_top )*p[i].yrate
				change_x = (e.clientX - p[i].pos_left)*0.5,
				change_y = (e.clientY - p[i].pos_top )*0.5
    			console.log(e.clientX,e.clientY)
    			if(!!p[i].invert){
    				change_x = -change_x
    				change_y = -change_y
    			}

        		$i.css({
        			left : p[i].pos_left  + change_x,
        			top : p[i].pos_top + change_y
        		})
			}
		}

		$(this).on('mousemove.piao',function(e){
			float(e)
		})

		return this;*/
    }

})(jQuery)