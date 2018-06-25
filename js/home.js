$(function(){
	
  	var quotes = $(".quotes");
    var quoteIndex = -1;
    var today = new Date();

    $('.container').append($("#home").html()); 
	$("#year").text(today.getFullYear()+".");
	$("#date-input").attr("min",today.toISOString().slice(0,10))

    showNextQuote();
   	myMap();

   	$("#hoursbtn").click(function(event) {
   		switchDisplay("#hours");
    });

    $("#homebtn").click(function(event) {
    	switchDisplay("#home");
    });

    $("#pricesbtn").click(function(event) {
    	switchDisplay("#prices");
    });

    $("#appointmentForm").submit(function(event){
    	if (checkIfValid()) {
   			$("#successAppointment").show();
         	$('#bookModel').modal('toggle');
         	clearBookModel();
         	event.preventDefault();
         	setTimeout(function () {
         		$("#successAppointment").alert('close');
   			}, 2500);
        }
        else
        	event.preventDefault();
	});

	 $("#bugForm").submit(function(event){
    	if ($('#desc-input').val().length > 50) {
   			$("#successBug").show();
         	$('#bugModel').modal('toggle');
         	clearBugModel();
         	event.preventDefault();
         	setTimeout(function () {
         		$("#successBug").alert('close');
   			}, 2500);
        }
        else{
        	$("#descInvalid").show();
        	$('#desc-input').css("border-color", "#dc3545");
        	event.preventDefault();
        }
	});

	$("#appointmentCancel").click(function(event) {
		clearBookModel();
	});

	$("#appointmentClose").click(function(event){
		clearBookModel();
	});

	$("#bugCancel").click(function(event) {
		clearBugModel();
	});

	$("#bugClose").click(function(event){
		clearBugModel();
	});

    function showNextQuote() {
        quoteIndex++;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(1000)
            .fadeOut(2000, showNextQuote);
    }

    function myMap() {
		var mapProp= {
		    center:new google.maps.LatLng(43.0642,-76.9902),
		    zoom:15,
		};

		var map= new google.maps.Map(document.getElementById("googleMap"),mapProp);
		var myCenter = new google.maps.LatLng(43.064240515, -76.99089033); 
		var marker = new google.maps.Marker({
		    position: myCenter,
		    animation: google.maps.Animation.BOUNCE
		  });

		marker.setMap(map);
	}

	function switchDisplay(displayId){
		$('.container').fadeOut(1000);
   		setTimeout(function () {
   			$(".navbar-nav li a").removeClass("active");
	        $(displayId+"btn").addClass("active");
	        $('.container').html($(displayId).html()).fadeIn(1000); 
	        if(displayId === "#home")
	        	myMap();
   		}, 1000);
	}

	function checkIfValid(){
		var valid = true;
		var phoneNumLength = 10;

		if(!/^[A-Za-z -\']+$/.test($('#name-input').val())){
			$('#name-input').css("border-color", "#dc3545");
			$('#nameInvalid').show();
			$('#nameValid').hide();
			valid = false;
		}
		else{
			$('#name-input').css("border-color", "#28a745");
			$('#nameValid').show();
			$('#nameInvalid').hide();
		}
		if(!/\S+@\S+\.\S+/.test($('#email-input').val())){
			$('#email-input').css("border-color", "#dc3545");
			$('#emailInvalid').show();
			$('#emailValid').hide();
			valid = false;
		}
		else{
			$('#email-input').css("border-color", "#28a745");
			$('#emailValid').show();
			$('#emailInvalid').hide();

		}
		if($('#tel-input').val().replace(/\D/g,'').length !== phoneNumLength){
			$('#tel-input').css("border-color", "#dc3545");
			$('#telInvalid').show();
			$('#telValid').hide();
			valid = false;
		}
		else{
			$('#tel-input').css("border-color", "#28a745");
			$('#telValid').show();
			$('#telInvalid').hide();
		}
		if($('#date-input').val() === ""){
			$('#date-input').css("border-color", "#dc3545");
			$('#dateInvalid').show();
			$('#dateValid').hide();
			valid = false;
		}
		else{
			$('#date-input').css("border-color", "#28a745");
			$('#dateValid').show();
			$('#dateInvalid').hide();
		}
		if($('#time-input').val() === ""){
			$('#time-input').css("border-color", "#dc3545");
			$('#timeInvalid').show();
			$('#timeValid').hide();
			valid = false;
		}
		else{
			$('#time-input').css("border-color", "#28a745");
			$('#timeValid').show();
			$('#timeInvalid').hide();
		}
		return valid;
	}

	function clearBookModel(){
		$(".valid-feedback").hide();
		$(".invalid-feedback").hide();
		$("#appointmentForm .form-control").css("border-color", "");
		$("#appointmentForm .form-control").val("");
	}

	function clearBugModel(){
		$(".invalid-feedback").hide();
		$("#bugForm .form-control").css("border-color", "");
		$("#bugForm .form-control").val("");
	}
});