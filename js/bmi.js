$( document ).ready(function() {

    $("#calculate").click(validateForm);
});

function validateForm() {
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
            submitHandler: calculate,
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
function calculate() {
    var data = {};
    data.sex = $("#sex .active").data("value");
    data.weight =  $('#weight').val();
    data.height = $('#height').val();
    data.age = $('#age').val()

    console.log('data = ' + data.toString())
    return false;
}

