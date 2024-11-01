document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.getElementById('reviews-container');
    const preloader = document.getElementById('preloader');

    async function loadComments() {
        try {
            preloader.style.display = 'block';

            const randomPostId = Math.floor(Math.random() * 100) + 1;
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${randomPostId}`);

            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных');
            }

            const comments = await response.json();

            preloader.style.display = 'none';

            commentsContainer.innerHTML = '';
            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.className = 'review';

                commentElement.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p>${comment.body}</p>
                `;
                commentsContainer.appendChild(commentElement);
            });
        } catch (error) {
            preloader.style.display = 'none';
            commentsContainer.innerHTML = `<p>⚠ Что-то пошло не так. Попробуйте позже.</p>`;
        }
    }

    loadComments();
});
