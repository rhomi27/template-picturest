

$(document).ready(function () {

    // Fungsi untuk memeriksa apakah semua input telah diisi
    function validateInputs($input) {
        var inputLength = $input.val().length;
        var maxInput = parseInt($('#' + $input.attr('id') + '-max').text());
        $('#' + $input.attr('id') + '-count').text(inputLength)
        var $errorLabel = $('#' + $input.attr('id') + '-error');

        if ($input.hasClass('max-text') && inputLength > maxInput) {
            $input.addClass('border-red-600');
            $errorLabel.text('Input exceeds maximum character limit');
            return false;
        } else if ($input.hasClass('required') && $input.val().trim() === '') {
            $input.addClass('border-red-600');
            $errorLabel.text('This field is required');
            return false;
        } else {
            $input.removeClass('border-red-600');
            $errorLabel.text('');
            return true;
        }
    };

    $('.required, .max-text').on('input change', function () {
        validateInputs($(this));
    });



    $('#upload-form').submit(function (event) {
        event.preventDefault();
        var allInputsValid = true;
        $('.required, .max-text').each(function () {
            if (!validateInputs($(this))) {
                allInputsValid = false;
            }
        });

        if (allInputsValid) {
            $('#upload-form')[0].reset();
            $('#previewImage').addClass('hidden');
            $('#labelimg').removeClass('hidden');

            $('#success-upload').css({
                opacity: 0,
                top: '-20px',
                display: 'flex'
            });
            // Jalankan animasi masuk
            $('#success-upload').animate({
                opacity: 1,
                top: '20px'
            }, 500);
        }
    });

    $('#close-btn-success').click(function () {
        $('#success-upload').animate({
            left: 0,
            opacity: 0.1,
        }, function () {
            $('#success-upload').hide()
            $('#success-upload').css({
                opacity: 0,
                top: '-20px',
                left: '50%',
                display: 'none'
            });
        });
    })

    $('#notnow-btn').click(function () {
        $('#success-upload').animate({
            top: -20,
            opacity: 0.1,
        }, function () {
            $('#success-upload').hide()
            $('#success-upload').css({
                opacity: 0,
                top: '-20px',
                left: '50%',
                display: 'none'
            });
        });
    })
});
// validasi draft
$(document).ready(function () {
    var inputChanged = false;
    $('#fileImage').change(function () {
        if ($(this).val()) {
            inputChanged = true;
            $('#upload-btn').removeAttr('disabled');
        } else {
            inputChanged = false;
            $('#upload-btn').attr('disabled', true);
        }
    });

    $('#buttonBack, #draft').on('click', function () {
        if (inputChanged) {
            $('#draft-modal').removeClass('hidden animate__bounceOutUp');
            $('#modal-draft').removeClass('animate__fadeOut');
            $('#modal-draft').addClass('animate__bounceInDown');
            $('#draft-modal').addClass('flex animate__fadeIn');
            $('#draft-modal').on('animationend', function () {
                $(this).removeClass('hidden');
            });
            $('#delete').attr('href', $(this).attr('data-href'));
        } else {
            window.location.href = $(this).attr('data-href');
        }
    });

    $('#continue').click(function () {
        $('#draft-modal').removeClass('animate__fadeIn');
        $('#modal-draft').removeClass('animate__bounceInDown')
        $('#modal-draft').addClass('animate__bounceOutUp');
        $('#draft-modal').addClass('animate__fadeOut');

        // Tambahkan kelas 'hidden' setelah animasi selesai
        $('#draft-modal').on('animationend', function () {
            $(this).removeClass('animate__fadeOut');
            $('#modal-draft').removeClass('animate__bounceOutUp'); 
            $(this).addClass('hidden');
        });
    });



})

// preview image
function previewFile() {
    var preview = document.getElementById('previewImage');
    var fileInput = document.getElementById('fileImage');
    var label = document.getElementById('labelimg');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        label.classList.add('hidden')
        preview.classList.remove('hidden')
        reader.readAsDataURL(file);
    } else {
        preview.classList.add('hidden')
        label.classList.remove('hidden')

    }
}
