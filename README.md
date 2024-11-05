Interactive Web App
This is a simple, interactive web app built using HTML, CSS, and JavaScript. It offers dynamic features such as user authentication, a day/night theme toggle, an image gallery with filtering capabilities, and a real-time clock with notifications. The app also saves user preferences in localStorage to maintain a personalized experience across sessions.

Live Demo
You can view the live version of the app by clicking the link below:
[https://dnsubkhyt.github.io/final/]

Features
1. User Authentication
Users can log in by providing a username.
Once logged in, the user is shown a logout button and their username is saved in localStorage.
The app remembers the logged-in state even after refreshing the page or closing the browser.
2. Day/Night Theme Toggle
The app provides a toggle button to switch between day and night themes.
The theme preference is saved in localStorage, ensuring that the theme remains consistent when the user revisits the site.
3. Image Gallery
The app includes an interactive image gallery where users can filter images based on text input.
The filter setting is saved in localStorage so that it persists between sessions.
Clicking on a thumbnail image displays a larger version of the image.
4. Show Current Time
Users can click a button to view the current time.
A sound notification is triggered each time the time is displayed.
5. Responsive Design
The app is fully responsive and adjusts well to different screen sizes, including mobile and tablet devices.
How to Use
Login: Click the "Login" button to enter your username. The app will remember your login status.
Theme Toggle: Click the "Toggle Day/Night Theme" button to switch between light and dark modes.
Gallery Filter: Use the search bar to filter images by their description.
Show Time: Click the "Show Current Time" button to view the current time along with a notification sound.
Logout: Once logged in, you can click the "Logout" button to log out and clear your session.
Technologies Used
HTML5: Used for structuring the web page.
CSS3: Used for styling the page with modern layout techniques and responsive design.
JavaScript: Handles user authentication, theme toggle, image gallery, and the display of the current time.
Managing User Preferences
Authentication: User login information (username) is stored in localStorage. When the user logs in, their username is saved and displayed, and they are presented with the option to log out.
Theme Preference: The chosen theme (day or night) is saved in localStorage. The app checks the stored theme when loaded and applies it automatically.
Gallery Filter: The filter text entered by the user is saved in localStorage, ensuring that the filter state persists across page reloads.
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/dnsubkhyt/final.git
Open the project folder and double-click index.html to view the app in your browser.

Contributing
Feel free to fork this project, open an issue if you find any bugs, or submit a pull request to add new features or improvements.
