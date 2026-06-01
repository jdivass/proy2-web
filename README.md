# Calculadora CASIO — Proyecto 2

Calculadora web estilo CASIO implementada con React, TypeScript y Vite.

## Utilizar la calculadora en el servidor de la clase

http://35.239.29.236/24687/proy2/

---

## Instalación

```bash
git clone https://github.com/jdivass/proy2-web.git
cd proy2-web
bun install
```

## Correr la aplicación

```bash
bun run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Correr los tests

```bash
bun run test
```

## Correr Storybook

```bash
bun run storybook
```

Abre [http://localhost:6006](http://localhost:6006) en el navegador.

## Correr el linter

```bash
bun run lint
```

---

## Tabla de implementaciones

| Implementación | Punteo |
|---|---|
| (5 pts) Por cada test no trivial, máximo 25 pts — **6 tests implementados** | 25 pts |
| (5 pts) Por cada historia de Storybook, máximo 25 pts — **10 historias implementadas** | 25 pts |
| Código compliant con JavaScript Standard. Regla custom sin punto y coma, máximo 120 caracteres por línea | 10 pts |
| Uso de TypeScript | 5 pts |
| Package manager Bun en lugar de npm/node, `bun.lock` commiteado | 5 pts |
| Diseño de interfaz estilo calculadora física CASIO | 10 pts |
| Ningún archivo de componente supera las 20 líneas de código | 20 pts |
| Title `CASIO Calculator` y favicon custom commiteados | 5 pts |

**Total: 105 pts**

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Button/         # Botón individual (variantes: digit, operator, action, equals)
│   ├── Display/        # Pantalla de la calculadora
│   └── Keyboard/       # Teclado numérico 
├── config/
│   ├── keys.ts         # Definición de teclas
│   └── buildKeys.ts    # Mapeo de teclas a acciones
├── hooks/
│   └── useCalculator.ts  # Lógica completa de la calculadora
└── main.tsx
```