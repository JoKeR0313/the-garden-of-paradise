# Product Requirements Document (PRD)
## Garden Paradise - Kertészeti Vállalkozás Weboldal

---

## 1. Projekt Áttekintés

### 1.1 Projekt Neve
**Garden Paradise** - Kertészeti Szolgáltatások Bemutató Weboldal

### 1.2 Projekt Célja
Egy professzionális, modern megjelenésű statikus weboldal készítése egy kertészeti vállalkozás számára, amely bemutatja a cég szolgáltatásait, korábbi munkáit és lehetőséget biztosít a kapcsolatfelvételre.

### 1.3 Célközönség
- Családi házak tulajdonosai
- Társasházak közös képviselői
- Irodaházak, üzletek tulajdonosai
- Önkormányzatok, közintézmények

---

## 2. Technikai Követelmények

### 2.1 Hosting
- **Platform:** AWS S3 Static Website Hosting
- **Típus:** Statikus weboldal (HTML, CSS, JavaScript)
- **CDN:** AWS CloudFront (opcionális, gyorsabb betöltésért)

### 2.2 Technológiai Stack
- **HTML5** - Szemantikus struktúra
- **CSS3** - Reszponzív dizájn (Flexbox/Grid)
- **JavaScript** - Interaktív elemek (vanilla JS vagy könnyű könyvtár)
- **Képformátumok:** WebP (elsődleges), JPEG/PNG (fallback)

### 2.3 Böngésző Támogatás
- Google Chrome (utolsó 2 verzió)
- Mozilla Firefox (utolsó 2 verzió)
- Safari (utolsó 2 verzió)
- Microsoft Edge (utolsó 2 verzió)
- Mobil böngészők (iOS Safari, Android Chrome)

### 2.4 Reszponzivitás
- **Mobile-first** megközelítés
- Töréspontok:
  - Mobil: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

---

## 3. Oldalstruktúra

### 3.1 Főoldal (index.html)

#### Hero Szekció
- Nagy, figyelemfelkeltő háttérkép (kert/növények)
- Cég neve és szlogenje
- CTA gomb: "Kérjen Ajánlatot" (Kapcsolat oldalra navigál)

#### Rólunk Szekció
- Rövid bemutatkozás a vállalkozásról
- Tapasztalat, szakértelem kiemelése
- Kép a tulajdonosról vagy csapatról

#### Szolgáltatások Szekció
Kártyás elrendezésben:
- 🌳 **Kertépítés** - Komplett kerttervezés és kivitelezés
- 🌿 **Kertfenntartás** - Rendszeres kertgondozás
- ✂️ **Fűnyírás** - Professzionális gyepápolás
- 🌺 **Növényültetés** - Fák, cserjék, virágok telepítése
- 💧 **Öntözőrendszer** - Automata öntözés kiépítése
- 🍂 **Szezonális munkák** - Tavaszi/őszi nagytakarítás

#### Miért Minket Szekció
- ✅ 10+ év tapasztalat
- ✅ Professzionális eszközpark
- ✅ Garanciális munkavégzés
- ✅ Rugalmas időpontok
- ✅ Ingyenes helyszíni felmérés

#### Footer
- Gyors elérhetőségek (telefon, email)
- Közösségi média linkek
- Navigációs linkek
- Copyright szöveg

---

### 3.2 Referenciák (referenciak.html)

#### Galéria Szekció
- **Rácsos elrendezés** (masonry vagy grid layout)
- Kategóriák szerinti szűrés:
  - Összes
  - Kertépítés
  - Kertfenntartás
  - Öntözőrendszerek
- **Előtte-utána** képek (slider funkcióval)
- Lightbox galéria nagyításhoz

#### Galéria Elemek Tartalma
Minden projekthez:
- Projekt kép(ek)
- Projekt neve/helyszíne
- Rövid leírás
- Elvégzett munkák listája

#### Ügyfélvélemények
- Idézetek elégedett ügyfelektől
- Csillagos értékelés (vizuális)
- Ügyfél neve és helyszín

---

### 3.3 Kapcsolat (kapcsolat.html)

#### Kapcsolatfelvételi Űrlap
Mezők:
- Név (kötelező)
- Email cím (kötelező, validált)
- Telefonszám (opcionális)
- Üzenet típusa (legördülő: Árajánlat kérés, Kérdés, Egyéb)
- Üzenet (kötelező, textarea)
- Adatvédelmi checkbox (kötelező)
- Küldés gomb

> **Megjegyzés:** Statikus hosting miatt az űrlap külső szolgáltatással működik (pl. Formspree, AWS SES + Lambda, vagy Netlify Forms).

#### Elérhetőségek
- 📍 **Cím:** [Vállalkozás címe]
- 📞 **Telefon:** +36 XX XXX XXXX
- 📧 **Email:** info@gardenparadise.hu
- 🕐 **Nyitvatartás:** H-P: 8:00-17:00, Sz: 8:00-12:00

#### Térkép
- Beágyazott Google Maps a szolgáltatási területről
- Vagy statikus térkép kép

#### Szolgáltatási Terület
- Lista vagy térkép a kiszolgált településekről

---

## 4. Design Követelmények

### 4.1 Színpaletta
| Szín | Hex Kód | Használat |
|------|---------|-----------|
| Elsődleges zöld | #2E7D32 | Fejléc, gombok, kiemelések |
| Másodlagos zöld | #81C784 | Hover állapotok, díszítések |
| Természetes barna | #5D4037 | Akcentusok, ikonok |
| Világos háttér | #F5F5F5 | Oldal háttér |
| Fehér | #FFFFFF | Kártyák, szekciók |
| Szöveg | #212121 | Fő szövegek |

### 4.2 Tipográfia
- **Címek:** Montserrat vagy Playfair Display
- **Szövegtörzs:** Open Sans vagy Roboto
- **Méretezés:** Reszponzív (rem/em egységek)

### 4.3 Képek
- Minőségi stock fotók vagy saját képek
- Optimalizált fájlméret (< 200KB/kép)
- Lazy loading implementálása
- Alt szövegek SEO és akadálymentesség miatt

---

## 5. Funkcionális Követelmények

### 5.1 Navigáció
- Rögzített fejléc (sticky header)
- Hamburger menü mobilon
- Aktív oldal jelölése
- Sima görgetés (smooth scroll)

### 5.2 Interakciók
- Hover effektek gombokon és kártyákon
- Animált megjelenések görgetéskor (scroll animations)
- Lightbox galéria
- Előtte-utána slider

### 5.3 Teljesítmény
- Lighthouse score: > 90 minden kategóriában
- Első tartalmas megjelenítés (FCP): < 1.5s
- Teljes oldal betöltés: < 3s

---

## 6. SEO Követelmények

- Szemantikus HTML struktúra
- Meta title és description minden oldalon
- Open Graph meta tagek (közösségi megosztáshoz)
- Strukturált adatok (LocalBusiness schema)
- robots.txt és sitemap.xml
- Képek alt attribútumai
- Kanonikus URL-ek

---

## 7. Fájlstruktúra

```
garden-paradise/
├── index.html
├── referenciak.html
├── kapcsolat.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── gallery.js
│   └── form.js
├── images/
│   ├── hero/
│   ├── services/
│   ├── gallery/
│   ├── testimonials/
│   └── icons/
├── fonts/
├── robots.txt
├── sitemap.xml
└── 404.html
```

---

## 8. AWS S3 Deployment

### 8.1 S3 Bucket Beállítások
- Bucket név: `gardenparadise.hu` (vagy egyedi)
- Régió: eu-central-1 (Frankfurt)
- Static Website Hosting: Engedélyezve
- Index document: index.html
- Error document: 404.html

### 8.2 Bucket Policy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::BUCKET_NAME/*"
    }
  ]
}
```

### 8.3 Opcionális CloudFront CDN
- HTTPS támogatás
- Egyedi domain (pl. www.gardenparadise.hu)
- Gyorsabb tartalomszolgáltatás
- SSL tanúsítvány (AWS Certificate Manager)

---

## 9. Jövőbeli Fejlesztések (Nice-to-have)

- [ ] Blog szekció (statikus generátorral)
- [ ] Online időpontfoglalás
- [ ] Árkalkulátor
- [ ] Többnyelvű támogatás (EN)
- [ ] Szezonális akciók banner
- [ ] Chatbot integráció
- [ ] Google Analytics / Tag Manager

---

## 10. Elfogadási Kritériumok

- [ ] Minden oldal reszponzív és mobilbarát
- [ ] Oldalbetöltés < 3 másodperc
- [ ] Űrlap sikeresen küldi az üzeneteket
- [ ] Galéria lightbox megfelelően működik
- [ ] SEO meta adatok beállítva
- [ ] AWS S3-on sikeresen hostolható
- [ ] Böngésző kompatibilitás tesztelve
- [ ] Akadálymentességi alapkövetelmények teljesülnek

---

## 11. Projekt Ütemezés

| Fázis | Feladat | Időtartam |
|-------|---------|-----------|
| 1 | Design tervezés | 3-5 nap |
| 2 | HTML struktúra | 2-3 nap |
| 3 | CSS styling | 3-4 nap |
| 4 | JavaScript funkciók | 2-3 nap |
| 5 | Tartalom feltöltés | 1-2 nap |
| 6 | Tesztelés | 2 nap |
| 7 | AWS deployment | 1 nap |
| **Összesen** | | **14-20 nap** |

---

*Dokumentum verzió: 1.0*  
*Készült: 2026. január 16.*
