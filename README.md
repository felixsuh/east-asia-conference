# East Asia Conference website

Static website for the workshop, **Connectivity and the Resilience of the Liberal Script in East Asia**.

## Publish with GitHub Pages

GitHub Pages is the recommended option: it is free for this static site, uses HTTPS, and needs no server or database.

1. Create a new GitHub repository (for example, `east-asia-conference`).
2. Upload only the contents of the `docs` folder: `index.html`, `styles.css`, `script.js`, `404.html`, and `Materials/`. This prevents unused source materials, biographies, and photographs in the project folder from becoming public.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, then select the `main` branch and the `/ (root)` folder. Save.
5. GitHub will display the public URL after publishing. It normally looks like `https://YOUR-ACCOUNT.github.io/east-asia-conference/`.

Do not upload `index.html` by itself: the CSS, JavaScript, and logo files in `Materials/` must remain alongside it.

## Local preview

Open `index.html` in a browser. For the closest match to the published site, serve this folder with any simple local web server.

## Updating content

Edit the files in `docs/`, then upload/commit the changed files. GitHub Pages republishes automatically.
