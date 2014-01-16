#!/bin/bash
node build.js
( git init
  git config user.name "Travis-CI"
  git config user.email "dev@nodemeatspace.com"
  git add index.html
  git commit -m "Deployed to Github Pages"
  git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages >/dev/null
)
