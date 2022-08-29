const objs =  [
    { 
        "nome" : "Carlos",
        "idade": 41,
        "esta_trabalhando": true,
        "detalhes_profissao": {
        "profissao": "Programador",
        "empresa": "Empresa X"
        },
        "hobbies": ["Programa", "Pedala", "Dorme"]
    
    },
    { 
        "nome" : "Risia",
        "idade": 45,
        "esta_trabalhando": false,
        "detalhes_profissao": {
        "profissao": "Investidora",
        "empresa": "Empresa Y"
        },
        "hobbies": ["Investe", "Lê", "Pedala"]
    
    }
]

console.log(objs)
//JSON
//Converter objeto para JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)

