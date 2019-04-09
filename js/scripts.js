$(document).ready(function(){
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });
});

$(document).ready(function() {
   var $lightbox = $('#lightbox');
   $('[data-target="#lightbox"]').on('click', function(event) {
       var $img = $(this).find('img'),
           src = $img.attr('src'),
           alt = $img.attr('alt'),
           css = {
               'maxWidth': $(window).width() - 300,
               'maxHeight': $(window).height() - 300
           };
       $lightbox.find('img').attr('src', src);
       $lightbox.find('img').attr('alt', alt);
       $lightbox.find('img').css(css);
   });
   $lightbox.on('shown.bs.modal', function (e) {
       var $img = $lightbox.find('img');
       $lightbox.find('.modal-dialog').css({'width': $img.width()});
       $lightbox.find('.close').removeClass('hidden');
   });
});

document.getElementById("basic1").onsubmit=function() {
    maedchen = parseInt(document.querySelector('input[name = "maedchen"]:checked').value);
	   madgen = parseInt(document.querySelector('input[name = "madgen"]:checked').value);
	   umlaut = parseInt(document.querySelector('input[name = "umlaut"]:checked').value);
	   casenum = parseInt(document.querySelector('input[name = "casenum"]:checked').value);
     wordorder = parseInt(document.querySelector('input[name = "wordorder"]:checked').value);


	   result = maedchen + madgen + umlaut + casenum + wordorder;

	document.getElementById("grade").innerHTML = result;



return false; // required to not refresh the page; just leave this here
} //this ends the submit function


document.getElementById("med1").onsubmit=function() {
    anstatt = parseInt(document.querySelector('input[name = "anstatt"]:checked').value);
	   aufcase = parseInt(document.querySelector('input[name = "aufcase"]:checked').value);
	   aufcase2 = parseInt(document.querySelector('input[name = "aufcase2"]:checked').value);
	   biscase = parseInt(document.querySelector('input[name = "biscase"]:checked').value);
     kino = parseInt(document.querySelector('input[name = "kino"]:checked').value);
     ausser = parseInt(document.querySelector('input[name = "ausser"]:checked').value);
     gegenden = parseInt(document.querySelector('input[name = "gegenden"]:checked').value);
     um_med = parseInt(document.querySelector('input[name = "um_med"]:checked').value);
     meindes = parseInt(document.querySelector('input[name = "meindes"]:checked').value);
     vor_med = parseInt(document.querySelector('input[name = "vor_med"]:checked').value);


	   medresult = anstatt + aufcase + aufcase2 + biscase + kino + ausser + gegenden + um_med + meindes + vor_med;

	document.getElementById("medgrade").innerHTML = medresult;

  // document.getElementById("medgrade2").innerHTML = result2 {
    // if (result == 0) {result2 = "Hmm. You should probably spend a lot longer revising these before you try again."};
    // if (result == 20) {result2 = "Well, you didn't *fail*, but I know you've got it in you to ace this... Maybe some other time."};
    // if (result == 40) {result2 = "Hey, we're getting there! Keep it up!"};
    // if (result == 60) {result2 = "You're doing really well! Just a little more!"};
    // if (result == 80) {result2 = "Ooh, so close! My winner senses are tingling!"};
    // if (result == 100) {result2 = "Well done! Do you want to try the advanced quiz next and keep those German muscles flexing?<br /><img src='images/gpprofessor.png' width='300' />"};
// }


  return false;


}


document.getElementById("hard1").onsubmit=function() {
    de_gegen = parseInt(document.querySelector('input[name = "de_gegen"]:checked').value);
	   de_kasus = parseInt(document.querySelector('input[name = "de_kasus"]:checked').value);
	   de_kor = parseInt(document.querySelector('input[name = "de_kor"]:checked').value);
	   de_kor2 = parseInt(document.querySelector('input[name = "de_kor2"]:checked').value);
     de_kor3 = parseInt(document.querySelector('input[name = "de_kor3"]:checked').value);


	   result = de_gegen + de_kasus + de_kor + de_kor2 + wordorder;

	document.getElementById("hardgrade").innerHTML = de_kor3;



return false; // required to not refresh the page; just leave this here
} //this ends the submit function
