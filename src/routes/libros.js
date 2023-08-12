const express = require("express");
const router = express.Router();

const { getAllLibros, getLibroById, createLibro, updateLibro, deleteLibro} = require("../controllers/libroController");


// Importamos la libreria y valido scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los libros
router.get("/", requiredScopes("read:libros"), getAllLibros);

// Ruta para obtener un libro por id
router.get("/:id", requiredScopes("read:libros"), getLibroById);

// Ruta para crear un nuevo libro
router.post("/", requiredScopes("write:libros"), createLibro);

// Ruta para actualizar un libro que ya existe
router.put("/:id", requiredScopes("write:libros"), updateLibro);

// Ruta para eliminar un libro
router.delete("/:id", requiredScopes("write:libros"), deleteLibro);

module.exports = router;
