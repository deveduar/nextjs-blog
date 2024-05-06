---
title: "Como subir un proyecto a github"
date: "2023-07-06"
tags: [github, programacion]
---

## Comandos utiles
1. `git init`
2. `git add .`
3. `git add <nombre del archivo>`
4. `git commit -m "Mensaje del commit"`
5. `git remote add origin https://github.com/tu_usuario/tu_proyecto.git`
6. `git push -u origin main`
7. `git push`

## Pasos
1. Crea un repositorio en GitHub:
	- Inicia sesión en GitHub y crea un nuevo repositorio con nombre y descripción.
	- Establece la visibilidad (público o privado) y crea el repositorio vacío.
2. Inicializa Git en tu proyecto:
	- Abre una terminal y navega hasta la carpeta raíz del proyecto.
	- Ejecuta `git init` para inicializar Git.
3. Agrega archivos al repositorio:
	- Utiliza `git add .` para agregar todos los cambios pendientes al área de preparación.
	- Puedes usar `git add <nombre del archivo>` para agregar archivos específicos.
4. Realiza un commit de los cambios:
	- Ejecuta `git commit -m "Mensaje del commit"` con un mensaje descriptivo.
5. Conecta tu repositorio local con GitHub:
	- Agrega la dirección remota de GitHub con `git remote add origin <dirección del repositorio de GitHub>`.
6. Sube los cambios a GitHub:
	- Utiliza `git push -u origin main` para subir los cambios a la rama "main" en GitHub.
7. Verifica en GitHub

## CSS Snippets
#### Plugin Tasks

```css
/* Priority as Checkbox Color and Remove the Emoji */
.task-list-item[data-task-priority="highest"] input[type=checkbox] {
    box-shadow: 0px 0px 2px 2px #ff006e;
    border-color: #ff006e;
}

.task-list-item[data-task-priority="normal"] input[type=checkbox] {
    box-shadow: 0px 0px 2px 2px #2b2d42;
    border-color: #2b2d42;
}

.task-list-item[data-task-priority="high"] input[type=checkbox] {
    box-shadow: 0px 0px 1px 1px var(--color-red);
    border-color: var(--color-red);
}

.task-list-item[data-task-priority="medium"] input[type=checkbox] {
    box-shadow: 0px 0px 1px 1px var(--color-orange);
    border-color: var(--color-orange);
}

.task-list-item[data-task-priority="low"] input[type=checkbox] {
    box-shadow: 0px 0px 1px 1px var(--color-cyan);
    border-color: var(--color-cyan);
}


input[type=checkbox]:checked {
    box-shadow: none !important;
    border-color: var(--checkbox-border-color) !important;
}

.task-description {
    margin-left:3px;
}


.tasks-group-heading p {
    margin-left:2.2em;
    font-size: 0.9em !important;
    padding-bottom: 0.1px !important;
    color: #8fbaff !important;
}

.cm-preview-code-block.cm-embed-block.markdown-rendered, .block-language-tasks {
    background-color: rgba(20, 18, 20, 0.986);
    border: 0.1em solid #373634;
    overflow: hidden; /* truncar elementos */
}
.block-language-tasks span {
    margin-left: 1px;
}


.block-language-tasks li {
  white-space: nowrap; 
  text-overflow: ellipsis;

.block-language-tasks li:hover {
  white-space: normal;
  overflow: visible; 
  text-overflow: unset; 
  background-color: rgba(188, 187, 187, 0.3);
}
```

