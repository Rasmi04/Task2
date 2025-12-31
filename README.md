🚀 HTML → Nunjucks Migration

This project has been migrated from static HTML to Nunjucks templating to improve reusability, maintainability, and structure.

Why the Change?

Static HTML was forcing duplication and making updates painful. Nunjucks fixes that.

Aspect	HTML (Old)	Nunjucks (New)
Layout	Repeated <nav> / <footer>	Single base.njk layout
Updates	Manual changes in every file	Update once, reflect everywhere
Structure	Flat & cluttered	Clean, modular templates
📁 Project Structure (Important)

If you ignore this, you will get Template Not Found errors.

index.html
src/
 └─ templates/
     ├─ layouts/
     │   └─ base.njk
     └─ partials/
         ├─ navbar.njk
         └─ footer.njk

File Responsibilities

index.html → Content file (extends layout)

base.njk → Main layout (HTML shell)

partials/ → Reusable components

🛠 Vite + Nunjucks Configuration

Your vite.config.js must point to the template directory:

nunjucks({
  templatesDir: 'src/templates'
})


If this path is wrong, nothing works. Period.

🧩 Using Template Inheritance

Every new page should start like this:

{% extends "layouts/base.njk" %}

{% block content %}
<!-- Page content here -->
{% endblock %}


If you’re copying HTML without using blocks, you’re defeating the purpose.

💻 Local Development
npm install
npm run dev
npm run build


No magic. If it breaks, check:

Folder structure

Template paths

extends syntax
