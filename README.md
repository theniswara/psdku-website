# 🧩 PSDKU Website

Full Stack Web App built with **Angular 18** (frontend) and **Spring Boot 3** (backend).

---

## ⚙️ How to Run

### 🖥️ Backend (Spring Boot)

1. Open the project folder

   ```
      cd springboot-backend
   ```
2. Create a file named `application.properties` inside:

   ```
   src/main/resources/
   ```
3. Add your local database config:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/psdku_db?useSSL=false
   spring.datasource.username=root
   spring.datasource.password=
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
4. Run the backend:

   ```bash
   mvn spring-boot:run
   ```

   The app will run at **[http://localhost:8080](http://localhost:8080)**

---

### 💻 Frontend (Angular)

1. Open the frontend folder:

   ```bash
   cd angular-frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the app:

   ```bash
   ng serve
   ```

   The app will run at **[http://localhost:4200](http://localhost:4200)**

---

## 🧰 Notes

* Keep your `application.properties` **private** — it’s already added to `.gitignore`.
* Frontend and backend can run separately during development.
* The Angular app connects to backend API: `http://localhost:8080/api/dosen...`

---

## 👥 Team

* Backend: Spring Boot + MySQL
* Frontend: Angular 18
* Database: MySQL