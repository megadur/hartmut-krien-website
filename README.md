# Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Da wir die Seite jetzt als statische Angular-Anwendung (Single-Page Application) ohne traditionelles Backend (wie PHP/MySQL bei WordPress) gebaut haben, ist das alte WordPress-Login natürlich weg. Das ist super für die Kosten, Sicherheit und Geschwindigkeit, erfordert aber eine andere Lösung für Inhaltsänderungen.

Hier sind die 4 besten und bewährtesten Möglichkeiten, wie Herr Krien zukünftig selbst Inhalte (wie "Aktuelles" oder neue Referenzen) anpassen kann, ohne Programmierkenntnisse zu benötigen – und zwar **kostenlos**:

### 1. Die "Google Sheets"-Methode (Mein Favorit für kleine Büros)
Wir lagern dynamische Daten (wie Aktuelles oder Referenzen) in eine Google Tabelle (Google Sheets) aus.
*   **Wie es funktioniert:** Herr Krien trägt neue News oder Projekte einfach wie in Excel in eine Google-Tabelle ein. Die Angular-App lädt diese Tabelle beim Seitenaufruf (als JSON/CSV) im Hintergrund.
*   **Vorteile:** Extrem einfach für ihn (jeder kann Excel bedienen). Es kostet nichts. Er kann das Layout der Seite nicht aus Versehen durch Tippfehler im Code zerstören.
*   **Nachteile:** Bilder hochladen ist etwas umständlicher (er müsste Links zu Bildern eintragen oder wir kombinieren das mit einer anderen Lösung).

### 2. Headless CMS (z.B. Contentful, Sanity oder Strapi)
Ein Headless CMS ist ein reines "Backend als Service".
*   **Wie es funktioniert:** Herr Krien loggt sich auf z.B. `contentful.com` ein. Dort sieht er eine aufgeräumte Eingabemaske für "Referenzen" oder "News", kann Texte schreiben und Bilder hochladen. Unsere Angular-App ruft diese Daten per API ab.
*   **Vorteile:** Sehr professionelles "CMS-Feeling", hervorragend für Bildverwaltung. Kostenlos im sogenannten "Free-Tier" (der für diese Seitengröße ewig reicht).
*   **Nachteile:** Wir müssen das Daten-Abrufen (API-Calls) in Angular einbauen.

### 3. Git-basiertes CMS (z.B. Decap CMS - ehemals Netlify CMS)
*   **Wie es funktioniert:** Wir binden ein Skript ein, sodass er unter `hartmut-krien.de/admin` eine Login-Maske sieht. Wenn er dort etwas ändert und speichert, macht das CMS automatisch einen "Git Commit" in Ihr GitHub Repository und ändert JSON-Dateien, woraufhin GitHub Pages die Seite neu baut.
*   **Vorteile:** Kostenlos, Daten bleiben 100% im GitHub Repository (kein Drittanbieter-Datenbank-Server). Echtes CMS-Interface.
*   **Nachteile:** Die Konfiguration in Kombination mit Angular ist manchmal etwas knifflig (eigentlich ist es für Static Site Generatoren wie Hugo/Jekyll gedacht, funktioniert aber auch mit JSON-Dateien).

### 4. JSON-Dateien via GitHub-Oberfläche (Die pragmatische Notlösung)
*   **Wie es funktioniert:** Wir lagern die Texte in `.json`-Dateien aus (z.B. `referenzen.json`). Herr Krien bekommt einen GitHub-Account und editiert diese Dateien direkt im Browser auf der GitHub-Website.
*   **Vorteile:** Technisch am allerleichtesten umzusetzen.
*   **Nachteile:** Fehleranfällig. Wenn er ein Komma im JSON vergisst, wird die Seite im schlimmsten Fall nicht mehr aktualisiert oder zeigt Fehler.

---

**Meine Empfehlung:**
Wenn er wirklich nur alle paar Monate mal ein neues Projekt eintragen will, ist ein **Headless CMS wie Contentful (Option 2)** die sauberste und professionellste Lösung. Es trennt Code und Inhalt perfekt. 
Wenn er es noch einfacher haben will und vor "Software-Dashboards" Respekt hat, ist die **Google Sheets Lösung (Option 1)** oft ein Geheimtipp, der Kunden total begeistert.

Welcher Ansatz klingt für Ihr Projekt am passendsten?