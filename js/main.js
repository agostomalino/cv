let estudios = [
    {   
        titulo: 'Desarrollo Frontend',
        institucion: 'Coderhouse',
        description:'Desarrollé para este curso, una web responsive para un comercio de cerámica artesanal. En la misma implementé el uso de Balsamiq Studio para realizar el wireframe, utilicé HTML 5 para la arquitectura de la web, estilos con CSS- SASS y Bootstrap. Manejé versiones en GIT y GITHUB. Aprendí nociones de SEO y seguridad web. Manejo de dominios y hostings.'
    },
    {   
        titulo: 'Javascript',
        institucion: 'Coderhouse',
        description:'E-commerce de Ficus cerámica. En la misma, se renderizan los productos de manera dinámica, desarrollé un buscador que filtra los productos en la web y el carrito de compras mediante Javascript, Ajax y jQuery.'
    },
    {   
        titulo: 'Javascript',
        institucion: 'Coderhouse',
        description:'E-commerce de Ficus cerámica. En la misma, se renderizan los productos de manera dinámica, desarrollé un buscador que filtra los productos en la web y el carrito de compras mediante Javascript, Ajax y jQuery.'
    },
    {   
        titulo: 'React JS',
        institucion: 'Coderhouse',
        description:'E-commerce de arte. Utilicé la base de datos de Firebase (firestore) para almacenar la información de los productos. Lógica para agregar y quitar productos del carrito y filtro por categorías mediante React js.'
    },
    {   
        titulo: 'React with Redux',
        institucion: 'Udemy',
        description:'agregar descripcion'
    },
    {   
        titulo: 'Next JS',
        institucion: 'Udemy',
        description:'agregar descripcion'
    },
    {   
        titulo: 'Codificacion Creativa',
        institucion: 'Domestika',
        description:'Libreria canvas-sketch para realizar animaciones con javascript.'
    },
    {   
        titulo: 'Adobe Photoshop',
        institucion: 'Domestika',
        description:'agregar descripcion'
    },
    {   
        titulo: 'Licenciatura en Artes Visuales',
        institucion: 'Universidad Nacional de Córdoba',
        description:'agregar descripcion'
    },
];


const containerItems = document.querySelector('containerItems')
// funcion que permita renderizar una lista a partir de un array


    containerItems.innerHTML='';

    estudios.forEach(el => {
        let div = document.createElement('div');

        div.innerHTML += `  
            <div class="cardP card" style="width: 18rem;">
                    <h3 class="card-title">${el.titulo}</h3>
                    <p class="card-text"> ${el.institucion}</p>
                    <p class="card-text"> ${el.description}</p>
            </div>
        `
    containerItems.appendChild(div);     
    });

