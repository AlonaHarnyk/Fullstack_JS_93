# APIS

## LIST api:

- https://rapidapi.com/diasnour0395--THKPibD0nf/api/random-user-generator1/
- https://rapidapi.com/flowcode/api/flowcode1/
- https://rapidapi.com/alberto-zE9RMSlyY/api/dbm/
- https://rapidapi.com/jsavajols/api/getqrcode/
- https://rapidapi.com/translated/api/mymemory-translation-memory/
- https://rapidapi.com/weatherbit/api/weather/
- https://rapidapi.com/jakash1997/api/superhero-search/
- https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/free-news/
- https://rickandmortyapi.com/api/character/4
- https://rapidapi.com/pgamerxdev/api/random-stuff-api/
- https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text/

---

[rapidapi.com](https://rapidapi.com/pgamerxdev/api/random-stuff-api/)

```js
const options = {
  params: { tag: "dark", blacklist: "dirty,men" },
  headers: {
    Authorization: "3mfgXHZm497i",
    "X-RapidAPI-Key": "9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4",
    "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
  },
};

fetch("https://random-stuff-api.p.rapidapi.com/joke", options)
  .then((data) => data.json())
  .then(console.log);
```

---

[rapidapi.com](https://rapidapi.com/diasnour0395--THKPibD0nf/api/random-user-generator1/)

```js
const options = {
  method: "GET",
  params: { limit: "5" },
  headers: {
    "X-RapidAPI-Key": "9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4",
    "X-RapidAPI-Host": "random-user-generator1.p.rapidapi.com",
  },
};

fetch("https://random-user-generator1.p.rapidapi.com/locale/id_ID", options);
```

---

[rapidapi.com](https://rapidapi.com/flowcode/api/flowcode1/)

```js
const options = {
  params: {
    url: "https://www.flowcode.com",
    imageType: "png",
    fgColor: "#ff0000",
    bgColor: "#cbcbcb",
    style: "default",
    rimTextTop: "Scan Me",
    rimTextBottom: "Scan Me",
    moduleShape: "default",
  },
  headers: {
    "X-RapidAPI-Key": "9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4",
    "X-RapidAPI-Host": "flowcode1.p.rapidapi.com",
  },
};
fetch("https://flowcode1.p.rapidapi.com/flowcode", options);
```

---

[rapidapi.com](https://rapidapi.com/alberto-zE9RMSlyY/api/dbm/)

```js
const options = {
  headers: {
    "X-RapidAPI-Key": "9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4",
    "X-RapidAPI-Host": "dbm.p.rapidapi.com",
  },
};
fetch("https://dbm.p.rapidapi.com/movies?_limit=7", options);
```

---

[Message Bot Api](https://rapidapi.com/pgamerxdev/api/random-stuff-api/)

```js
const options = {
  method: "GET",
  headers: {
    Authorization: "3mfgXHZm497i",
    "X-RapidAPI-Key": "fd83113197msh93c2b2d5cc00a3ep1c503bjsn3e85bf01dd76",
    "X-RapidAPI-Host": "random-stuff-api.p.rapidapi.com",
  },
};

fetch(
  "https://random-stuff-api.p.rapidapi.com/ai?msg=Hi%20there%2C%20how%20are%20you%3F%20(REQUIRED)&bot_name=Random%20Stuff%20Api%20(OPTIONAL)&bot_gender=male%20(OPTIONAL)&bot_master=PGamerX%20(OPTIONAL)&bot_age=19%20(OPTIONAL)&bot_company=PGamerX%20Studio%20(OPTIONAL)&bot_location=India%20(OPTIONAL)&bot_email=admin%40pgamerx.com%20(OPTIONAL)&bot_build=Public%20(OPTIONAL)&bot_birth_year=2002%20(OPTIONAL)&bot_birth_date=1st%20January%2C%202002%20(OPTIONAL)&bot_birth_place=India%20(OPTIONAL)&bot_favorite_color=Blue%20(OPTIONAL)&bot_favorite_book=Harry%20Potter%20(OPTIONAL)&bot_favorite_band=Imagine%20Doggos%20(OPTIONAL)&bot_favorite_artist=Eminem%20(OPTIONAL)&bot_favorite_actress=Emma%20Watson%20(OPTIONAL)&bot_favorite_actor=Jim%20Carrey%20(OPTIONAL)&id=For%20customised%20response%20for%20each%20user",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
```
