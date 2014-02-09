$( document ).ready(function() {
    $("#calculate").click(validateForm);
});

function validateForm() {
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
    $("#bmi-value").text(bmi);
    $(".weight").hide();
    if (sex == "male") {
        if (bmi < 20) {
            $("#underweight").show()
        } else if (bmi > 20 && bmi < 25) {
            $("#normalweight").show()
        } else if (bmi > 25 && bmi < 30) {
            $("#slightlyoverweight").show()
        } else if (bmi > 30 && bmi < 40 ) {
            $("#veryoverweight").show()
        } else  {
            $("#maxoverweight").show()
        }
    } else {
        if (bmi < 19) {
            $("#underweight").show()
        } else if (bmi > 19 && bmi < 24) {
            $("#normalweight").show()
        } else if (bmi > 24 && bmi < 30) {
            $("#slightlyoverweight").show()
        } else if (bmi > 30 && bmi < 40 ) {
            $("#veryoverweight").show()
        } else  {
            $("#maxoverweight").show()
        }
    }
    $("#bmi-modal").modal();
    return false;
}

