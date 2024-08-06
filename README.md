## How I Made This Project

### 1. Setting Up the Project
I started by setting up the project using React.js and Tailwind CSS for styling. I chose these technologies because they provide a robust framework and flexible styling options, respectively.

### 2. Implementing the Login Page
I designed and implemented the login page based on the provided design. This involved creating a login form and handling authentication. Upon successful login, users are redirected to the OneBox screen.

### 3. Creating the OneBox Screen
I created the OneBox screen to display a list of threads. I used React components to structure the interface and made use of state management to handle the data. 

### 4. Fetching Data
I integrated the following API endpoints to fetch and manage thread data:
- `GET /onebox/list` to fetch the list of threads.
- `GET /onebox/:thread_id` to fetch details of a specific thread.
- `DELETE /onebox/:thread_id` to delete a specific thread.

### 5. Implementing Keyboard Shortcuts
To enhance user experience, I implemented keyboard shortcuts:
- Pressing "D" deletes the selected thread.
- Pressing "R" opens the reply box.

### 6. Building the Custom Text Editor
I built a custom text editor using React and integrated additional buttons like “SAVE” and “Variables”. This editor supports rich text editing and is designed to be user-friendly.

### 7. Implementing Reply Functionality
I implemented the reply functionality where users can compose and send replies. The reply data is sent using the `POST /reply/:thread_id` endpoint. The payload includes the sender's email, recipient's email, subject, and body in HTML format.

### 8. Adding Light and Dark Mode
To provide theme options, I added support for both light and dark modes. Users can toggle between these themes using a switcher.

### 9. Challenges Faced
One of the main challenges I faced was integrating the API in some places due to issues with finding the token. This affected the completeness of some data-fetching functionalities.

### 10. Testing and Debugging
I thoroughly tested the application to ensure all features worked as expected. Debugging was an ongoing process, and I used various tools and techniques to identify and fix issues.


![Screenshot 2024-08-06 195542](https://github.com/user-attachments/assets/7a295044-5e8c-4b62-bea4-97158b3fd267)
![Screenshot 2024-08-06 195633](https://github.com/user-attachments/assets/4f271c7e-b8e3-45c3-91d5-0695ff964616)
![Screenshot 2024-08-06 195702](https://github.com/user-attachments/assets/96d63519-13b7-4b71-9948-1013b1e02a5f)
![Screenshot 2024-08-06 195746](https://github.com/user-attachments/assets/c96d0dbf-d95c-4e01-b447-d0f5be25da70)
![Screenshot 2024-08-06 195935](https://github.com/user-attachments/assets/00ada6f3-72ab-4214-ba39-c914a9864590)
![Screenshot 2024-08-06 200004](https://github.com/user-attachments/assets/cdb1ccf6-b6dc-4657-8a23-e6f5b3aa0316)
![Screenshot 2024-08-06 200102](https://github.com/user-attachments/assets/6612a9ee-c657-43a5-b51b-e768afcee724)
![Screenshot 2024-08-06 200117](https://github.com/user-attachments/assets/4bec73f5-b5f8-4b39-ade7-a9e7ae84d6d1)
