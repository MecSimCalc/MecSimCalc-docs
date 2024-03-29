# MecSimCalc Docs

> Built using [docusaurus.io](https://docusaurus.io/)

> [Markdown docs](https://www.markdownguide.org/basic-syntax/)

> [Markdown Emoji](https://gist.github.com/rxaviers/7360908)

## Initial setup

1. Install [Node.JS](https://nodejs.org/en/download/)
2. Open a terminal and install use `cd` to go to the code directory
3. Install packages: `npm install`
4. Setup pre-commit hooks: `pip install pre-commit && pre-commit install`

## Running local development site

1. Run server `npm run start`
2. Go to http://localhost:3000/

## Deployment Site

1. Build the site `npm run build`
2. Deploy the site `npm run serve`

## Notes

1. Run `git config core.ignorecase false` in command line so github picks up on capitalization in file/folder names

## Algolia DocSearch

> Algolia is used to implement the search bar

- [Docusaurus & Algolia](https://docusaurus.io/docs/search#using-algolia-docsearch)
- [Running our own Algolia](https://docsearch.algolia.com/docs/legacy/run-your-own/)
- [Video on how to setup Algolia](https://www.youtube.com/watch?v=F_jqADu-izk&ab_channel=CalebCurry)

### Crawler

Whenever text changes, Algolia needs to run a crawler to collect all the data

1. Need to install [jq](https://github.com/stedolan/jq/wiki/Installation)

```
docker run -it --env-file=.env -e "CONFIG=$(cat algolia.config.json | jq -r tostring)" algolia/docsearch-scraper
```

## Git Large File Storage (Git LFS)

1. Install Git LFS: https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage
   - On mac: `brew install git-lfs`
   - On linux: `sudo apt install git-lfs`
2. Install it: `git lfs install`
3. [Configure files to use LFS](https://docs.github.com/en/repositories/working-with-files/managing-large-files/configuring-git-large-file-storage)
   - `git lfs track "*.pkl" "*.pickle" "*.jpg" "*jpeg" "*.png" "*.mp4"`
4. To pull the files:

```bash
git lfs pull
```
