# Quickstart

Install [docker](https://www.docker.com/), then run

```bash
docker compose up
```
This will give you a local website preview on [localhost:4000](http://localhost:4000/).

# Pushing

## (Local) Compilation
Compile (and serve) with
```bash
docker compose up
```
The compiled website is found in `_site/`.


## Remote compilation on github (+hosting)
A `git push` will create a public version at [https://fiji87.github.io/tooring/](https://fiji87.github.io/tooring/). Github will also create a compiled version for each commit. In the [actions page](https://github.com/fiji87/tooring/actions) select your commit of choice, and download the `github-pages` artifact you find at the bottom of the page. Extract it, then extract the `artifact.tar` inside it, and you will get the compiled version in `artifact/`.

**Note:** Since this version is publicly hosted on [https://fiji87.github.io/tooring/](https://fiji87.github.io/tooring/), all links are relative to the `/tooring/` sub. Replace them w/ `/`, e.g. with
```bash
find . -type f -exec sed -i 's|/tooring/|/|g' {} +
```
If you do this by hand, you are not a computer scientist.


## Public website on mdt.di.unipi.it
With local compilation, you can directly transfer the website to the server. You need to sync the *compiled version* in `_site` to the server (in the folder `web/`). Do **not sync the whole project**.
It is *strongly advised* to leverage this repository to have different snapshots of the compiled versions, and keep a previous version handy.


# Creating new posts

You create new posts by creating new `.md` files in `_posts`, using frontmatter

```markdown
---
layout: post
title: {$ post title}
author: {$ post author}
excerpt_image: assets/images/banners/25_resized.png
tags:
  - cup
top: 1
sidebar: []
---
```
Where
- `excerpt_image` is the banner image
- `tags` is a list of tags for the post (we have `info` for the website intro, `cup` for new editions)

## Content
Post content must be markdown. You can sprinkle in some HTML for funsies. Most non-standard widgets in the website come from [semantic UI](https://semantic-ui.com/), you can use that source for consistency.

## Naming
File name **must** have prefix
```
{$YEAR}-{$MONTH}-{$DAY}-
```
The post will then appear only on said date on the hosted version. If you are hosting the static version, i.e., local compilation, you need to recompile it after the date and sync it back to the server.