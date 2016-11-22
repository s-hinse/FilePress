/**
 * Created by SvenH on 16.10.2016.
 */
	//Form submission

var imageForm = $( '#image-form' ),
	fileInput = $('#file-input'),
	formData = new FormData();

imageForm.on( 'submit', function( e ) {
	e.preventDefault();

	formData.append( 'file', fileInput[0].files[0] );

	$.ajax({
		url: 'http://webdev/rest-api/wp-json/wp/v2/media',
		method: 'POST',
		data: formData,
		crossDomain: true,
		contentType: false,
		processData: false,
		beforeSend: function ( xhr ) {
			xhr.setRequestHeader( 'Authorization', 'Basic d2ViX2FkbWluOnRlc3Q=' );
		},
		success: function( data ) {
			console.log( data );
		},
		error: function( error ) {
			console.log( error );
		}
	});
});