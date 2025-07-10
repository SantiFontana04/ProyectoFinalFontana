# 🛍️ La Atajada - Proyecto Final

Este es el entregable del proyecto final de e-commerce creado con **React + Vite**, como parte del curso de React. En esta entrega se agregó un carrito de compras, un formulario para enviar una orden de compra y se implementó la base de datos de Firebase para guardar los productos disponibles.

---

## 🚀 Tecnologías usadas

- React
- Vite
- Bootstrap
- React Icons
- Firestore Database

## ✅ Funcionalidades

### 🧩 NavBar
- Muestra el nombre del e-commerce: **La Atajada**.
- Contiene tres categorías de productos:
  - Nuevos
  - Ofertas
  - Más vendidos

### 📦 ItemListContainer
- Se renderiza debajo del `NavBar`.
- Muestra los productos.

### 🛒 Carrito de compras
- Permite agregar productos al carrito desde el `ItemDetail`.
- Se puede aumentar o disminuir la cantidad deseada.
- El ícono del carrito en el `NavBar` muestra la cantidad total de productos.
- Permite eliminar productos individuales o vaciar todo el carrito con confirmación.
- Muestra el total a pagar en tiempo real.

### 🔍 Detalle de productos
- Al hacer clic en un producto, se muestra su imagen, descripción, precio y stock disponible.
- Desde ahí se puede seleccionar la cantidad deseada y agregar al carrito.

### 🧾 Checkout
- Formulario para completar los datos del comprador.
- Validaciones con `react-hook-form`.
- Confirmación de orden y generación de un ID único.
- Al finalizar, limpia el carrito y muestra un mensaje de éxito.

### ☁️ Firebase Firestore
- Base de datos utilizada para almacenar los productos.
- Las órdenes de compra se guardan en la colección `orders`.

### 🔄 Routing
- Implementación de `react-router-dom` para navegación por categorías, productos y páginas internas.
- Página de error 404 personalizada cuando la ruta no existe.

---

## 💻 Cómo correr el proyecto

1. Cloná el repositorio:

git clone https://github.com/SantiFontana04/CreaTuLanding1Fontana.git

Entrá al proyecto:

cd ProyectoFinalFontana

Instalá las dependencias:

npm install

Iniciá el servidor de desarrollo:

npm run dev
