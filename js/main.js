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
        description:'Realizacion de pequeños aplicaciones React manejando el estado global de las mismas con Redux.'
    },
    {   
        titulo: 'Next JS',
        institucion: 'Udemy',
        description:'Creación de aplicaciones React con renderizado del lado del servidor (SSR) y pre-renderizado (SPR). Optimización de imágenes con NextJS Image, creación de aplicaciones completas con rutas API.'
    
    },
    {   
        titulo: 'Codificacion Creativa',
        institucion: 'Domestika',
        description:'Libreria canvas-sketch para realizar animaciones con javascript.'
    },
    {   
        titulo: 'Adobe Photoshop',
        institucion: 'Domestika',
        description:'-'
    },
    {   
        titulo: 'Licenciatura en Artes Visuales',
        institucion: 'Universidad Nacional de Córdoba',
        description:'A lo largo de la carrera fui adquiriendo herramientas tales como pensamiento crítico, una visión estética construida, conocimientos de historia, filosofía, artes gráficas, etc.'
    },
];



const containerLista = document.getElementById('lista-educacion');


  const elements = estudios.map((item) => {
  
      const element = document.createElement("div");
      const titulo = document.createElement("h4");
      titulo.textContent = `${item.titulo} - ${item.institucion}`;
      const descripcion = document.createElement("p");
      descripcion.textContent = item.description;
      element.appendChild(titulo);
      element.appendChild(descripcion);
      return element;
  });
  
  
  elements.forEach((element) => {
      containerLista.appendChild(element);
    });
  
