# 🎮 COD ACADEMY — Proiect Complet

## Structura

```
cod-academy-full/
├── frontend/           ← Site-ul (HTML, CSS, JS)
│   ├── index.html      ← Pagina principala (protejata — necesita login)
│   ├── login.html      ← Pagina de login/register
│   ├── css/            ← Stiluri
│   └── js/             ← Logica frontend
│
└── backend/            ← Server API + Auth
    ├── src/            ← Codul serverului
    ├── .env            ← Configurare (schimba secretele!)
    └── package.json
```

## Cum pornesti TOTUL (o singura comanda)

```powershell
cd backend
npm install
npm run dev
```

Apoi deschide in browser:

```
http://localhost:3000
```

**Gata!** Vei fi redirectionat la pagina de login.
Creeaza un cont, logheaza-te, si ai acces la curs.

## Cum functioneaza

1. Deschizi `http://localhost:3000` → backend-ul serveste frontend-ul
2. `index.html` verifica daca ai token → daca NU, te trimite la `login.html`
3. Te loghezi → primesti token → esti redirectionat la curs
4. In header apare numele tau + buton de logout (✕)
5. Dupa 15 min token-ul expira → se reface automat din cookie

## API Endpoints

| Endpoint | Descriere |
|----------|-----------|
| POST `/api/auth/register` | Creaza cont |
| POST `/api/auth/login` | Login (username sau email) |
| POST `/api/auth/logout` | Logout |
| GET `/api/auth/me` | Profil utilizator |
| GET `/api/modules` | Lista module |
| GET `/api/progress` | Progres utilizator |
| POST `/api/progress/update` | Salveaza progres |
| GET `/api/admin/users` | Lista useri (admin only) |

## Note

- **Backend-ul serveste si frontend-ul** — nu mai ai nevoie de Live Server
- **SQLite** — baza de date se creeaza automat la prima rulare (`database.sqlite`)
- **Schimba secretele** din `backend/.env` inainte de productie!
