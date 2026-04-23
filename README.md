# sequelize

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

Ejercicio del **curso de Sequelize de Fazt**: una API con Express usando el ORM Sequelize sobre MySQL. Incluye un recurso `Product` de ejemplo con rutas CRUD y seeding de datos usando `@faker-js/faker`.

Es un repo de aprendizaje siguiendo un tutorial, no un proyecto propio.

> **Nota sobre el nombre:** el nombre del repositorio (`sequelize`) colisiona con el del ORM oficial. Es una limitación histórica (así se nombró cuando empezaba el curso); internamente el `package.json` se identifica como `sequelize-fazt`.

## Stack

- **Runtime:** Node.js
- **Framework:** Express 4
- **ORM:** Sequelize 6
- **Driver BD:** mysql2
- **BD:** MySQL (dialect `mysql`, puerto 3306)
- **Seeding:** @faker-js/faker
- **Otros:** morgan (logs), nodemon (desarrollo)

## Estructura

```
sequelize/
├── src/
│   ├── index.js              # Arranque del servidor
│   ├── app/app.js            # Configuración de Express
│   ├── module/
│   │   └── product.module.js # Modelo Sequelize de Product
│   └── router/
│       └── product.router.js # Rutas /api/v1/products
└── package.json
```

## Endpoints

Base: `http://localhost:3000/api/v1`

| Método | Ruta                      | Descripción                     |
| ------ | ------------------------- | ------------------------------- |
| GET    | `/products`               | Lista todos los productos       |
| GET    | `/products/:product_id`   | Obtiene un producto por UUID    |
| POST   | `/products`               | Crea un producto con faker      |
| PUT    | `/products`               | (placeholder)                   |
| DELETE | `/products`               | (placeholder)                   |

## Setup

1. Crear una base de datos MySQL llamada `product_test`.
2. Ajustar las credenciales en `src/module/product.module.js` (o moverlas a variables de entorno).
3. Instalar dependencias y arrancar:

```bash
npm install
npm run dev
```

El servidor corre en el puerto **3000**.

## Notas

- Proyecto pedagógico siguiendo el curso de Fazt, se conserva como registro del aprendizaje.
- Las credenciales de BD están hardcodeadas en el código (se deberían mover a `.env`).

## Autor

Jean Caicedo — [@JeanCaicedo](https://github.com/JeanCaicedo)
