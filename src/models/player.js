const mongoose = require('../db/index')

const playerSchema = new mongoose.Schema({
    jogador: {
        type: String,
        required: true
    },
    heroi: {
        type: String,
        required: true,
        unique: true
    },
    identidade: {
        nome: {
            type: String,
            unique: true
        },
        secreta: {
            type: Boolean
        }
    },
    genero: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    altura: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    olhos: {
        type: String
    },
    cabelos: {
        type: String
    },
    grupo_afiliado: {
        nome: {
            type: String
        },
        base: {
            type: String
        }
    },
    nivel_de_poder: {
        type: Number,
        required: true
    },
    imagem_url: {
        type: String
    },
    vida: {
        type: String,
        required: true
    }
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player