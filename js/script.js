function clocks(){
	//Javascript atawa js teh pemrogramman siga php ngan teu bisa langsung di html ditulisna
	//Date() nyaeta siga jam kan ieumah bisa dicokot tiap detik, menit, tanggal, jeung sajabana
	//Date() mun si jamna hirup pasti si date ge hirup



		// variable h teh jamna
		var h = new Date().getHours();

		// variable m teh menitna
		var m = new Date().getMinutes();

		// variable s teh detikna
		var s = new Date().getSeconds();

		// klo goblok ya cuma kamu

		//mun jam 0 peuting nepika jam 10 isuk teh lakukeun ieu
		if(h>0 && h<=10){
			//aya deuih anakna si js, ngaranna jquery
			//si jquery nyokot tag html anu idna body, trs dileungitkeun class malamna... njir meni watir 
			$('#body').removeClass('malam');

			//seentos eta diasupkeun tah class "pagi" dina tag html tadi
			$('#body').addClass('pagi');

			//nahh ayeuna ngahapus eusina lain class na
			//siga kumaha we kieu <p> isi </p> 
			$('#text').html('');
			//trs jadi kieu <p></p>, si eusi na dipicen da butut

			//jejlebkeun weh tulisan pagi ka jerona
			$('#text').append('Pagi');
			//jadi weh kieu <p>Pagi</p>

			//Sarua siga mu diluhur ngan beda tulisan jeung naon id tag html na
			$('#Quote').html('');
			$('#Quote').append('"Jangan Lupa Sholat!"');
		}

    	if(h>5 && h<=8){
			$('#body').removeClass('pagi');
			$('#body').addClass('siang');
			$('#text').html('');
			$('#text').append('Siang');
			$('#Quote').html('');
			$('#Quote').append('"Bangun alifah dari alam mimpimu"');
		}if(h>8 && h<=12){
			$('#body').removeClass('pagi');
			$('#body').addClass('siang');
			$('#text').html('');
			$('#text').append('Siang');
			$('#Quote').html('');
			$('#Quote').append('" beres beres dulu gih,Sapu Sapu,ngepel,Jemur pakaian"');
		}if(h>14 && h<=18){
			$('#body').removeClass('siang');
			$('#body').addClass('sore');
			$('#text').html('');
			$('#text').append('Sore');
			$('#Quote').html('');
			$('#Quote').append('"Wah sudah Sore ternyata, Mandi gih!"');
		}if(h>19 && h<=24){
			$('#body').removeClass('sore');
			$('#body').addClass('malam');
			$('#text').html('');
			$('#text').append('Malam');
			$('#Quote').html('');
			$('#Quote').append('"Tidur jug jangan gadang jagalah kesehatan"');
		}

		//mun jam, menit, detik na 1 nepika 9, kan ngan 1 angka, tambahkeun 0 diawalna
		//nu asalna 1 jadi 01, meh teu jomblo siga maneh

		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;
		s = (s < 10) ? "0" + s : s;

		//didieu asupkeun kabeh
		$('#hour').html(h);
		$('#minute').html(m);
		$('#second').html(s);

	};
	//mun euweuh ieu moal hurung, siga maneh tanpa doi.. suram
	$(document).ready(function(){
	 setInterval(clocks, 1000);
	//1000 => 1000mili detik atau 1 detik. tunggan heula, sa detik teupira, trs jalankeun
	});