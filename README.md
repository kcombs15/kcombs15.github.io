# Quarto Academic Website (GitHub Pages)

This is a minimal, professional starter for an academic website powered by **Quarto** and deployed via **GitHub Pages**.

## Prerequisites
1. Install Quarto: https://quarto.org/docs/get-started/
2. Install R: https://cran.r-project.org/
3. Get Quarto VS Code extension (optional but recommended): https://marketplace.visualstudio.com/items?itemName=quarto.quarto
4. Install R packages: `install.packages(c("knitr", "rmarkdown"))`
5. Check that you can render Quarto documents: `quarto check`

## How to use

1. Start virtual envrionment: `.\.venv\Scripts\Activate.ps1`
2. Preview locally `quarto preview`
3. Commit & push to GitHub 
   `git status`
   `git add -A`
   `git commit -m "Your message"`
   `git push`
4. GitHub Actions will build and deploy to `gh-pages` branch automatically
5. Your website will be live at `https://karacombs.github.io/`

## Theme
- Theme: Pulse
- Theme preview website: https://bootswatch.com/pulse/

## Venv
- env\Scripts\Activate.ps1

## Updates
- Publications: Add the citation on publications.qmd and row to /assets/publications.csv for inclusion in the figure