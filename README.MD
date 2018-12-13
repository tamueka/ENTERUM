# App ENTERUM #

Web application that shows a list of songs, which we can see in detail, mark as favorites and leave a comment on them.

---

## Prerequisites ##

Node v10.11.0 and npm 6.4.1 installed

---

### Deploy ###

Download the master branch from the repository

cd ENTERUM

\PRACTICA_FRONTEND_AVANZADO\ENTERUM\

---

### Install ###

Inside the root directory we will execute:

```bash
npm install
```

---

### Run server ###

Json-server has been used as a substitute for a backend:

```bash
npm run server
```

Open server on port 8000

Loading ./src/data/articles.json
Done

Resources:

```bash
http://localhost:8000/articles
```

Home:

```bash
http://localhost:8000
```

This will create a server with the models defined in the file /src/data/db.json

---

### Test ###

```bash
npm run test
```

Error: no test specified

---

### Generation of distribution for production ###

To generate the distribution code we will execute the following command inside the directory:

```bash
npm run build
```

---

### Start ###

Once installed the dependencies we can run the webpack server locally:

```bash
npm run start
```

```bash
Project is running at: http://localhost:8080/
```