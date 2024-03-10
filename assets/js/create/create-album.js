
$('#new-album').click(function () {
    $('#create-album').addClass('flex');
    $('#create-album').removeClass('hidden');
    $('#modal-album').addClass('animate__bounceIn');
    $('#create-album').on('animationend', function () {
        $(this).removeClass('hidden');
    });
})

$('#close-modal-album').click(function () {
    $('#modal-album').removeClass('animate__bounceIn');
    $('#modal-album').addClass('animate__bounceOut')
    $('#create-album').on('animationend', function () {
        $('#modal-album').removeClass('animate__bounceOut');
        $(this).addClass('hidden');
    });
})


function viewThumbnail() {
    var previewThumbnail = document.getElementById('previewThumbnail');
    var fileInputThumbnail = document.getElementById('thumbnail');
    var labelThumbnail = document.getElementById('labelthumbnail');
    var fileThumbnail = fileInputThumbnail.files[0];
    var readerThumbnail = new FileReader();

    readerThumbnail.onloadend = function () {
        previewThumbnail.src = readerThumbnail.result;
    }

    if (fileThumbnail) {
        labelThumbnail.classList.add('hidden');
        previewThumbnail.classList.remove('hidden');
        readerThumbnail.readAsDataURL(fileThumbnail);
    } else {
        previewThumbnail.classList.add('hidden');
        labelThumbnail.classList.remove('hidden');
    }
}