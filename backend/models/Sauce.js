// Plugin npm de Node.js pour la base de données

const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

// Modèles de sauces avec le type de données
const sauceSchema = mongoose.Schema ({
    userId: { type: String, required: true },
    name: { type: String, required: true, unique: true},
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: Array, required: true },
    usersDisliked: { type: Array, required: true }
});

sauceSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Sauce', sauceSchema);