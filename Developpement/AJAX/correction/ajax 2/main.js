
// fonctions generales

function onExecute() {
	var choice = $('input[name=what]:checked').val();
	
	switch(choice) {
		case "1":
			$.get("doc/test.html", getFile1); 
		break;
			
		case "2":
			$.getJSON("doc/json.php", getFile2); 
		break;
			
		case "3":
			$.get("doc/movies.php", getFile1); 
		break;

		case "4":
			$.get("doc/sql.php", getFile1); 
		break;
	}
}

// fonctions AJAX

function getFile1(data) { 
	$("#target").html(data);
}

function getFile2(contacts) { 
	var ul = $('<ul>'); 
	
	for(var i = 0; i < contacts.length; i++) {
    	var prenom = contacts[i].firstName; 
    	var phone = contacts[i].phone;
		
		ul.append($('<li>').text(prenom + ' ' + phone));
	}
			
	$('#target').html(ul);
}

// code principale

$(function () {
	$('#run').on("click", onExecute);
});
