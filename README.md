## B.Tech Minor Project 
### Travel Quest – Online Hotel Booking Web Application

Travel Quest is a B.Tech 3rd year minor academic project developed as part of the Computer Science and Engineering curriculum.  
The project focuses on designing and understanding a web-based online hotel booking system that provides users with a simple, secure, and interactive experience.

### Project Overview
The application allows users to:
- Search and explore hotel listings
- View detailed hotel and room information
- Register and authenticate users
- Book hotel rooms
- Add, edit, and manage listings
- Write and manage reviews
- Experience a responsive and user-friendly interface

The system is designed to be scalable, secure, and accessible across devices.

### Technologies Used
- HTML5, CSS3, JavaScript  
- Bootstrap  
- Node.js and Express.js  
- MongoDB  

### Academic Context
This project was completed as a **team-based academic minor project** during B.Tech (3rd Year).  
My contribution focused on:
- Research and requirement analysis  
- Understanding system design and workflows  
- Project documentation and report preparation  

### Key Learning Outcomes
- Understanding real-world web application structure  
- Requirement analysis and system feasibility study  
- Database design concepts and application flow  
- Importance of scalability, security, and user experience  

### Project Report
The complete academic project report is available in the `project-report` folder.

---

## 🚀 Deployment Guide: Hugging Face Spaces

This project is configured to run out-of-the-box on **Hugging Face Spaces** using the Docker SDK.

### Step 1: Create a Space on Hugging Face
1. Go to [Hugging Face Spaces](https://huggingface.co/spaces) and click **Create new Space**.
2. Set a **Space name** (e.g. `travel-quest`).
3. Select **Docker** as the SDK.
4. Select the **Blank** template.
5. Click **Create Space**.

### Step 2: Configure MongoDB Atlas (Free Forever Database)
1. Sign up for a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free shared cluster.
3. In **Network Access**, allow access from anywhere (`0.0.0.0/0`) since Hugging Face dynamic IPs change frequently.
4. Under **Database Access**, create a user (e.g., `admin` with a secure password).
5. Click **Connect** -> **Drivers** and copy the Connection String (`mongodb+srv://...`).

### Step 3: Add Variables to Hugging Face Space
1. Open your Space's **Settings** tab.
2. Scroll to the **Variables and secrets** section.
3. Click **New secret** and add:
   - **Key**: `ATLASDB_URL`
   - **Value**: Your MongoDB Atlas Connection String (e.g. `mongodb+srv://admin:YOUR_PASSWORD@cluster.mongodb.net/travelquest?retryWrites=true&w=majority`)
4. Add another secret if you want to customize session signing:
   - **Key**: `SECRETE`
   - **Value**: Any custom password string.

### Step 4: Upload Code to Hugging Face
You can link your Space directly to your GitHub repository:
1. In your Hugging Face Space settings, click **Link to GitHub**.
2. Select your repository `sarveshmishraoffi-data/Btech_Minor_Project_Travel_Quest`.
3. Save, and Hugging Face will automatically pull the code, read the [Dockerfile](file:///d:/CV_Documnet/Btech_Minor_Project_Travel_Quest-main/Btech_Minor_Project_Travel_Quest-main/Dockerfile), build the container, and host the site live!

### Step 5: Seed the Production Database
Once the Space is running and connected to Atlas, you can seed the database with Indian listings:
1. Locally, update the `.env` file to contain `ATLASDB_URL=your_mongodb_atlas_connection_string`.
2. Run:
   ```bash
   node init/index.js
   ```
3. This seeds all Udaipur, Goa, Kerala, and Munnar listings directly to your cloud MongoDB Atlas database, making them visible on your live Hugging Face Space!

