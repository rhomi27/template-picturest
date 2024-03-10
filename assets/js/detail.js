function toggleText() {
    var text = document.getElementById("fullText");
    var button = document.getElementById("toggleButton");

    if (text.classList.contains("max-h-[calc(24px*2)]")) {
        text.classList.remove("max-h-[calc(24px*2)]");
        button.textContent = "....Lihat lebih sedikit";
    } else {
        text.classList.add("max-h-[calc(24px*2)]");
        button.textContent = "....Lihat lebih banyak";
    }
}
var successIcon = document.getElementById('success-icon');
var defaultIcon = document.getElementById('default-icon');
var tooltipDefault = document.getElementById('default-tooltip');
var tooltipSuccess = document.getElementById('success-tooltip');
// copy url

function berhasil() {
    successIcon.classList.remove('hidden')
    defaultIcon.classList.add('hidden')
    tooltipDefault.classList.add('hidden')
    tooltipSuccess.classList.remove('hidden')

    setTimeout(() => {
        successIcon.classList.add('hidden')
        defaultIcon.classList.remove('hidden')
        tooltipDefault.classList.remove('hidden')
        tooltipSuccess.classList.add('hidden')
    }, 2000);
}

function copyUrl() {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
        .then(() => {
            berhasil();
        })
        .catch((error) => {
            console.error('Error copying text: ', error);
        });
}

function downloadImage() {
    const img = document.getElementById('image');
    const imgUrl = img.src;
    // Buat elemen tautan unduhan
    const downloadLink = document.createElement('a');
    downloadLink.href = imgUrl;
    downloadLink.download = 'image.jpg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}


var isFollow = false;

function follow() {
    isFollow = !isFollow;
    updateFollow();
    console.log(isFollow)
}
function updateFollow() {
    var followbtn = document.getElementById('follow-btn');
    var followIcon = document.getElementById('follow');
    var followedIcon = document.getElementById('followed');

    if (isFollow) {
        followbtn.classList.add('border-gray-500')
        followbtn.classList.add('text-gray-500')
        followbtn.classList.remove('border-red-500')
        followbtn.classList.remove('text-red-500')
        followIcon.classList.add('hidden');
        followedIcon.classList.remove('hidden');
    } else {
        followbtn.classList.remove('border-gray-500')
        followbtn.classList.remove('text-gray-500')
        followbtn.classList.add('border-red-500')
        followbtn.classList.add('text-red-500')
        followIcon.classList.remove('hidden');
        followedIcon.classList.add('hidden');
    }
}