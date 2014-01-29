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
    var sex = $("#sex .active").data("value");
    var weight =  $('#weight').val();
    var height = $('#height').val() / 100; // Required in m
    var age = $('#age').val()
    var bmi = (weight/(height*height)).toFixed(2);
    console.log('bmi = ' + bmi);
    $("#bmi-value").text(bmi);
    $("#bmi-modal").modal();
    return false;
}

