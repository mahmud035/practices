// Like button animation
document.getElementById('likeBtn').addEventListener('click', function () {
  const likeAnimation = document.getElementById('likeAnimation');
  likeAnimation.style.display = 'block';
  setTimeout(() => {
    likeAnimation.style.display = 'none';
  }, 600); // Hide the animation after it plays
});

// Subscribe button animation
document.getElementById('subscribeBtn').addEventListener('click', function () {
  const subscribeAnimation = document.getElementById('subscribeAnimation');
  subscribeAnimation.style.display = 'block';
  setTimeout(() => {
    subscribeAnimation.style.display = 'none';
  }, 1000); // Hide the animation after it plays
});
