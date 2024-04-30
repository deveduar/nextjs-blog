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
