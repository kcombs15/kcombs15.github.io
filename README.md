# Quarto Academic Website (GitHub Pages)

This is a minimal, professional starter for an academic website powered by **Quarto** and deployed via **GitHub Pages**.

## How to use

1. Install Quarto: https://quarto.org
2. Preview locally:
   ```bash
   quarto preview
   ```
3. Render output into the `docs/` folder (so GitHub Pages can serve it):
   ```bash
   quarto render
   ```
4. Push to GitHub. In your repo:
   - **Settings → Pages**: Branch = `main`, Folder = `/docs`

## Customize
- Update `_quarto.yml` (title, links).
- Replace `references.bib` with your BibTeX.
- Put your PDF CV at `files/cv.pdf` (a placeholder is included).
- Edit `index.qmd`, `cv.qmd`, `projects.qmd`, `publications.qmd`.
- Optional: add a custom domain via a `CNAME` file.