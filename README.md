# iefesel.github.io

Personal website of İbrahim Efe Sel, built automatically by GitHub Pages (Jekyll). Edit a file, press **Commit changes**, and the site updates within 1–2 minutes.

## Where do I change what?

| What | File |
|---|---|
| Name, photo, tagline, city, social links | `_data/profile.yml` |
| About text | `_data/profile.yml` → `about:` |
| Contact details | `_data/profile.yml` → `contact:` |
| Education, interests, coursework, skills, experience | `_data/cv.yml` |
| Projects | `_data/projects.yml` |
| Links page | `_data/links.yml` |
| PDF titles and categories (optional) | `_data/documents.yml` |
| Blog posts | `_posts/` folder, one file per post |
| PDFs | `documents/` folder |
| Photo | `assets/photo.jpg` (upload a new photo with the same name) |
| Colours and layout | `assets/style.css` |

## Add a blog post

1. Open `_posts/2026-10-09-post-template.md` and copy its contents.
2. In the `_posts` folder choose **Add file → Create new file**.
3. Name it `YEAR-MONTH-DAY-post-name.md`, e.g. `2026-11-02-the-standard-model.md` (lowercase letters, numbers and hyphens only).
4. Paste the template, delete the `published: false` line, write your post.
5. Press **Commit changes**.

The post appears at `iefesel.github.io/blog/post-name/`. Posts dated in the future stay hidden until that date.

### Formatting (Markdown)

```
### Subheading
**bold**  *italic*
[link text](https://example.com)
- list item
> quote
![image description](/assets/image.jpg)
[Open the PDF](/documents/file-name.pdf)
$$E = mc^2$$          (needs "math: true" at the top of the post)
```

## Add a PDF

1. Open the `documents` folder → **Add file → Upload files**.
2. Drop the PDF in and press **Commit changes**.

It appears on the **Documents** page automatically. Nothing else to edit.

- Avoid spaces and special characters in file names: `quantum-mechanics-notes.pdf`.
- For a nicer title, a description or a category, add an entry to `_data/documents.yml`.
- To remove a PDF from the site, delete the file from the `documents` folder.

## Hide something

- Post: add `published: false` at the top.
- Project: add `draft: true` under it.

## Good to know

- In `.yml` files the **spaces at the start of a line matter**. Keep the indentation when copying a line. Use spaces, not Tab.
- Keep text inside quotes `" "`. If you need a quote mark inside the text, use `'`.
- You rarely need to touch `_layouts`, `_includes` or `_config.yml`.
- If something breaks, open the **Actions** tab of the repository. A red cross shows the failing change and its error. Every file's **History** lets you go back to an older version.

Font: Latin Modern Roman (GUST Font License).
