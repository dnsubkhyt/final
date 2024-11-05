document.addEventListener('DOMContentLoaded', () => {
    // 1. User Authentication - Check if user is logged in
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('loginBtn').classList.add('d-none');
        document.getElementById('logoutBtn').classList.remove('d-none');
    }

    // 2. User Preferences - Load theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'night') {
        document.body.classList.add('night');
    }

    // 3. Day/Night Theme Toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        const isNight = document.body.classList.toggle('night');
        localStorage.setItem('theme', isNight ? 'night' : 'light');
    });

    // 4. Image Gallery Filter
    const filterInput = document.getElementById('filterInput');
    filterInput.addEventListener('input', (event) => {
        const filterText = event.target.value.toLowerCase();
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(thumbnail => {
            const altText = thumbnail.alt.toLowerCase();
            if (altText.includes(filterText)) {
                thumbnail.style.display = 'block';
            } else {
                thumbnail.style.display = 'none';
            }
        });
        // Save filter setting to localStorage
        localStorage.setItem('galleryFilter', filterText);
    });

    // Load stored filter from localStorage (if any)
    const storedFilter = localStorage.getItem('galleryFilter');
    if (storedFilter) {
        filterInput.value = storedFilter;
        const event = new Event('input');
        filterInput.dispatchEvent(event);
    }

    // 5. Image Gallery Click to display larger image
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', (event) => {
            const largeImageSrc = event.target.dataset.large;
            document.getElementById('displayImage').src = largeImageSrc;
        });
    });

    // 6. Show Current Time with Notification
    document.getElementById('showTime').addEventListener('click', () => {
        const currentTime = new Date().toLocaleTimeString();
        document.getElementById('currentTime').innerText = `Current Time: ${currentTime}`;
        document.getElementById('notificationSound').play();
    });

    // 7. Login Functionality
    document.getElementById('loginBtn').addEventListener('click', () => {
        const username = prompt('Enter your username:');
        if (username) {
            localStorage.setItem('username', username);
            document.getElementById('loginBtn').classList.add('d-none');
            document.getElementById('logoutBtn').classList.remove('d-none');
        }
    });

    // 8. Logout Functionality
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('username');
        document.getElementById('loginBtn').classList.remove('d-none');
        document.getElementById('logoutBtn').classList.add('d-none');
    });
});
