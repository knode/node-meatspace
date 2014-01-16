#!/bin/bash
node build.js
(
  mkdir pages
  cd pages
  git clone --branch=gh-pages "https://${GH_TOKEN}@${GH_REF}"
  git checkout gh-pages
  cp ../index.html /index.html
  git config user.name "Travis-CI"
  git config user.email "dev@nodemeatspace.com"
  git add index.html
  git commit -m "Deployed to Github Pages"
  git push --force --quiet origin gh-pages
)
