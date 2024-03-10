var isLiked = false;
var likeCount = 128; // Nilai awal

function toggleLike() {
  isLiked = !isLiked;
  if (isLiked) {
    likeCount++;
  } else {
    likeCount--;
  }
  updateLikeIcon();
  updateLikeCount();
}

function updateLikeIcon() {
  var likeIcon = document.getElementById('likeIcon');
  var likedIcon = document.getElementById('likedIcon');

  if (isLiked) {
    likeIcon.classList.add('hidden');
    likedIcon.classList.remove('hidden');
  } else {
    likeIcon.classList.remove('hidden');
    likedIcon.classList.add('hidden');
  }
}

function updateLikeCount() {
  var likeCountElement = document.getElementById('likeCount');
  likeCountElement.innerText = likeCount;
}





