# Nombre del repositorio remoto (por defecto es origin)
REMOTE = origin
# Rama por defecto a la que subir los cambios
BRANCH = main

# Regla por defecto: muestra las opciones disponibles
all:
	@echo "Uso del Makefile para GitHub:"
	@echo "  make status   - Ver estado del repositorio"
	@echo "  make add      - Agregar todos los archivos modificados"
	@echo "  make commit  - Confirmar cambios (requiere mensaje: make commit msg='tu mensaje')"
	@echo "  make push     - Subir cambios al repositorio remoto"
	@echo "  make deploy   - Ejecutar add + commit + push (requiere mensaje: make deploy msg='tu mensaje')"

# Ver estado del repositorio
status:
	git status

# Agregar todos los archivos modificados y nuevos
add:
	git add .

# Confirmar cambios con un mensaje
commit:
	@if [ -z "$(msg)" ]; then \
		echo "Error: Debes proporcionar un mensaje. Uso: make commit msg='tu mensaje'"; \
		exit 1; \
	fi
	git commit -m "$(msg)"

# Subir cambios al repositorio remoto
push:
	git push $(REMOTE) $(BRANCH)

# Ejecutar todo el flujo: add + commit + push
deploy: add commit push

# Regla para limpiar (si necesitas eliminar archivos no deseados, opcional)
clean:
	git clean -n  # Muestra qué archivos se eliminarían (sin borrar)
	@echo "Para borrar realmente, usa: git clean -f"
