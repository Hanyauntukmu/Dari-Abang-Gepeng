function clocks(){
		var h = new Date().getHours();
		var m = new Date().getMinutes();
		var s = new Date().getSeconds();
		if(h>0 && h<=5){
			$('#body').removeClass('gantiE');
			$('#body').addClass('gantiA');
			$('#text').html('');
			$('#text').append('Pagi');
			$('#Quote').html('');
			$('#Quote').append('"Jangan Lupa Sholat!"');
		}
    	if(h>5 && h<=8){
			$('#body').removeClass('gantiA');
			$('#body').addClass('gantiB');
			$('#text').html('');
			$('#text').append('Siang');
			$('#Quote').html('');
			$('#Quote').append('"Bangun alifah dari alam mimpimu"');
		}if(h>8 && h<=14){
			$('#body').removeClass('gantiB');
			$('#body').addClass('gantiC');
			$('#text').html('');
			$('#text').append('Siang');
			$('#Quote').html('');
			$('#Quote').append('" beres beres dulu gih, Sapu Sapu, ngepel, Jemur pakaian"');
		}if(h>14 && h<=18){
			$('#body').removeClass('gantiC');
			$('#body').addClass('gantiD');
			$('#text').html('');
			$('#text').append('Sore');
			$('#Quote').html('');
			$('#Quote').append('"Wah sudah Sore ternyata, Mandi gih!"');
		}if(h>18 && h<=24){
			$('#body').removeClass('gantiD');
			$('#body').addClass('gantiE');
			$('#text').html('');
			$('#text').append('Malam');
			$('#Quote').html('');
			$('#Quote').append('"Tidur jug tong gadang, jagalah kesehatan"');
		}

		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;
		$('#hour').html(h);
		$('#minute').html(m);
		$('#second').html(s);

	};
	$(document).ready(function(){
	 setInterval(clocks, 1000);
	});
