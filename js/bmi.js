$( document ).ready(function() {

    $("#calculate").click(calculate);
    jQuery.extend(jQuery.validator.messages, {
        required: 'Du musst hier was eintragen'
    });
});

function calculate() {
    console.log('Doing it');
    // Validate first
    $('#bmi-form').validate(
        // Setup validator
        {
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
                if(element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
        }
    )
}

