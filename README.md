# Academic Website

Built with GitHub Pages + Jekyll (Minimal Mistakes theme).

## Local Preview (optional)
1. Install Ruby and Bundler.
2. `bundle init` then add `gem "github-pages", group: :jekyll_plugins` and `gem "minimal-mistakes-jekyll"` to Gemfile, or use the remote_theme as configured.
3. `bundle install`
4. `bundle exec jekyll serve`  
   Visit http://localhost:4000

## Deploy
Push to `main`.  
Enable **Settings → Pages → Build from: GitHub Actions** (or `Deploy from a branch`, source: `main`).
