const iconoMenuMobile = document.querySelector('.icono_menu');

const listaMenuMobile = document.querySelector('.nav-menu_mobile');

const containerTarjetas = document.querySelector('.container');

// const clickPoints = document.querySelector('.points-tarjeta');
const clickPoints = document.querySelector('.container');

iconoMenuMobile.addEventListener('click', desplegarMenuMobile);

clickPoints.addEventListener('click', (e) =>{
    // e.target
    console.log(e.target.classList.contains('point_1'));
    e.stopPropagation();
});

///Menu////////////////////////////////////////////////////////////////////////////
function desplegarMenuMobile(){
    listaMenuMobile.classList.toggle('inactive');
}
///Puntos//////////////////////////////////////////////////////////////////////////
// function darClickPoints{

// }

const productList = [];
productList.push({
    title: 'Medidor De Potencia Para Sistemas Embebidos',
    date: '11 / Nov / 2022',
    image1: './img/descarga.jfif',
    image2: './img/image-112.png',
    image3: './img/Naruto_Uzumaki.webp',
    description: 'Este documento fue hecho para optener el titulo de ingeniero en Robotica',
    page: 'file:///C:/Users/juani/Documents/workspace/CalculoChistes%206/index.html#',
});
productList.push({
    title: 'Medidor De Potencia Para Sistemas Embebidos',
    date: '11 / Nov / 2022',
    image1: './img/descarga.jfif',
    image2: './img/image-112.png',
    image3: './img/Naruto_Uzumaki.webp',
    description: 'Este documento fue hecho para optener el titulo de ingeniero en Robotica',
    page: 'file:///C:/Users/juani/Documents/workspace/CalculoChistes%206/index.html#',
});
productList.push({
    title: 'Medidor De Potencia Para Sistemas Embebidos',
    date: '11 / Nov / 2022',
    image1: './img/descarga.jfif',
    image2: './img/image-112.png',
    image3: './img/Naruto_Uzumaki.webp',
    description: 'Este documento fue hecho para optener el titulo de ingeniero en Robotica',
    page: 'file:///C:/Users/juani/Documents/workspace/CalculoChistes%206/index.html#',
});
productList.push({
    title: 'Medidor De Potencia Para Sistemas Embebidos',
    date: '11 / Nov / 2022',
    image1: './img/descarga.jfif',
    image2: './img/image-112.png',
    image3: './img/Naruto_Uzumaki.webp',
    description: 'Este documento fue hecho para optener el titulo de ingeniero en Robotica',
    page: 'file:///C:/Users/juani/Documents/workspace/CalculoChistes%206/index.html#',
});

/*
<div class="tarjeta" class="tarjeta-numero">
    <picture class="foto-tarjeta_1" class="foto-tarjeta_1-numero">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    </picture>
    <picture class="foto-tarjeta_2" class="foto-tarjeta_2"-numero>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    </picture>
    <picture class="foto-tarjeta_3">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    </picture>
    <ul class="points-tarjeta" class="points-tarjeta-numero">
        <li class="point_1" class="point_1-numero"></li>
        <li class="point_2" class="point_2-numero"></li>
        <li class="point_3" class="point_3-numero"></li>
    </ul>
    <div class="producto-tarjeta-nombre">
        <div>
            <p clas="date-numero">17 / Enero / 2023</p>
        </div>
        <p clas="title-numero">Medidor de Potencia para Sistemas Embebidos de Bajo Consumo.</p>
        <a href="#">Leer Más</a>
    </div>
</div>
*/

function reproducirContainer(Lista){
    let numeroSelector = 0;
    let tarjetaNumero;
    let fotoTarjeta1Numero;
    let fotoTarjeta2Numero;
    let fotoTarjeta3Numero;
    let pointsTarjetaNumero;
    const selectPoint = [];
    let point1Numero;
    let point2Numero;
    let point3Numero;
    let productoTarjetaNombreNumero;
    let dateNumero;
    let titleNumero;
    let leerMas;
    
    for (product of Lista) {
        numeroSelector = numeroSelector + 1;
        console.log(numeroSelector);

        const productTarjeta = document.createElement('div');
        productTarjeta.classList.add('tarjeta');

        tarjetaNumero = 'tarjeta-' + numeroSelector;
        productTarjeta.classList.add(tarjetaNumero);
        
        // foto-tarjeta_1/////////////////////////////////////////////////////////////////
        const productFotoTarjeta_1 = document.createElement('picture');
        productFotoTarjeta_1.classList.add('foto-tarjeta_1');

        fotoTarjeta1Numero = 'foto-tarjeta_1-' + numeroSelector;
        productFotoTarjeta_1.classList.add(fotoTarjeta1Numero);
    
        const img1 = document.createElement('img');
        img1.setAttribute('src', product.image1);
    
        productFotoTarjeta_1.appendChild(img1);
    
        // foto-tarjeta_2/////////////////////////////////////////////////////////////////
        const productFotoTarjeta_2 = document.createElement('picture');
        productFotoTarjeta_2.classList.add('foto-tarjeta_2');
        productFotoTarjeta_2.classList.add('inactive');

        fotoTarjeta2Numero = 'foto-tarjeta_2-' + numeroSelector;
        productFotoTarjeta_2.classList.add(fotoTarjeta2Numero);

        const img2 = document.createElement('img');
        img2.setAttribute('src', product.image2);
    
        productFotoTarjeta_2.appendChild(img2);
    
        // foto-tarjeta_3/////////////////////////////////////////////////////////////////
        const productFotoTarjeta_3 = document.createElement('picture');
        productFotoTarjeta_3.classList.add('foto-tarjeta_3');
        productFotoTarjeta_3.classList.add('inactive');

        fotoTarjeta3Numero = 'foto-tarjeta_3-' + numeroSelector;
        productFotoTarjeta_3.classList.add(fotoTarjeta3Numero);

        const img3 = document.createElement('img');
        img3.setAttribute('src', product.image3);
    
        productFotoTarjeta_3.appendChild(img3);
    
        // points-tarjeta//////////////////////////////////////////////////////////////////
        const pointsTarjeta = document.createElement('ul');
        pointsTarjeta.classList.add('points-tarjeta');

        pointsTarjetaNumero = 'points-tarjeta-' + numeroSelector;
        pointsTarjeta.classList.add(pointsTarjetaNumero);

        const point_1 = document.createElement('li');
        point_1.classList.add('point_1');
        point_1.classList.add('point-active-color');
        point_1.addEventListener('click', imagenActiva1);

        point1Numero = 'point_1-' + numeroSelector;
        point_1.classList.add(point1Numero);
        selectPoint[numeroSelector] = document.querySelector('.' + point1Numero);
        // selectPoint[numeroSelector].addEventListener('click', imagenActiva1);

        const point_2 = document.createElement('li');
        point_2.classList.add('point_2');
        point_2.addEventListener('click', imagenActiva2);

        const point_3 = document.createElement('li');
        point_3.classList.add('point_3');
        point_3.addEventListener('click', imagenActiva3);
    


// const point1 = document.querySelector('.point_1');
// const point2 = document.querySelector('.point_2');
// const point3 = document.querySelector('.point_3');

// const imagenTarjeta1 = document.querySelector('.foto-tarjeta_1');
// const imagenTarjeta2 = document.querySelector('.foto-tarjeta_2');
// const imagenTarjeta3 = document.querySelector('.foto-tarjeta_3');

// point1.addEventListener('click', imagenActiva1);
// point2.addEventListener('click', imagenActiva2);
// point3.addEventListener('click', imagenActiva3);




        pointsTarjeta.appendChild(point_1);
        pointsTarjeta.appendChild(point_2);
        pointsTarjeta.appendChild(point_3);
    
        // producto-tarjeta-nombre/////////////////////////////////////////////////////////
        const productoTarjetaNombre = document.createElement('div');
        productoTarjetaNombre.classList.add('producto-tarjeta-nombre');
    
        const dateDiv = document.createElement('div');
        const dateP = document.createElement('p');
        dateP.innerText = product.date;
    
        const descriptionP = document.createElement('p');
        descriptionP.innerText = product.description;
    
        const LeerMas = document.createElement('a');
        LeerMas.setAttribute('href', product.page);
        LeerMas.innerText = 'Leer más';
    
        dateDiv.appendChild(dateP );
    
        productoTarjetaNombre.appendChild(dateDiv);
        productoTarjetaNombre.appendChild(descriptionP);
        productoTarjetaNombre.appendChild(LeerMas);
    
        // tarjeta///////////////////////////////////////////////////////////////
        productTarjeta.appendChild(productFotoTarjeta_1);
        productTarjeta.appendChild(productFotoTarjeta_2);
        productTarjeta.appendChild(productFotoTarjeta_3);
        productTarjeta.appendChild(pointsTarjeta);
        productTarjeta.appendChild(productoTarjetaNombre);
    
        containerTarjetas.appendChild(productTarjeta);
    }
}

reproducirContainer(productList);

const point1 = document.querySelector('.point_1');
const point2 = document.querySelector('.point_2');
const point3 = document.querySelector('.point_3');

const imagenTarjeta1 = document.querySelector('.foto-tarjeta_1');
const imagenTarjeta2 = document.querySelector('.foto-tarjeta_2');
const imagenTarjeta3 = document.querySelector('.foto-tarjeta_3');

// point1.addEventListener('click', imagenActiva1);
// point2.addEventListener('click', imagenActiva2);
// point3.addEventListener('click', imagenActiva3);

///points-tarjeta///////////////////////////////////////////////////////////////////
function imagenActiva1(){
    const isPoint1Open = point1.classList.contains('point-active-color');
    const isPoint2Open = point2.classList.contains('point-active-color');
    const isPoint3Open = point3.classList.contains('point-active-color');

    console.log('1');
    if(isPoint1Open){
        // console.log('1');
        // imagenTarjeta1.classList.add('inactive');
        console.log('Entro 1');
    }
    else if(isPoint2Open){
        // console.log('2');
        point1.classList.add('point-active-color');
        point2.classList.toggle('point-active-color');

        imagenTarjeta1.classList.remove('inactive');
        imagenTarjeta2.classList.add('inactive');
        console.log('Entro 2');
    }
    else if(isPoint3Open){
        // console.log('3');
        point1.classList.add('point-active-color');
        point3.classList.toggle('point-active-color');

        imagenTarjeta1.classList.remove('inactive');
        imagenTarjeta3.classList.add('inactive');
        console.log('Entro 3');
    }
}

function imagenActiva2(){
    const isPoint1Open = point1.classList.contains('point-active-color');
    const isPoint2Open = point2.classList.contains('point-active-color');
    const isPoint3Open = point3.classList.contains('point-active-color');
    console.log('2');
    if(isPoint1Open){
        // console.log('1');
        point2.classList.add('point-active-color');
        point1.classList.toggle('point-active-color');

        imagenTarjeta2.classList.remove('inactive');
        imagenTarjeta1.classList.add('inactive');
        console.log('Entro 1');
    }
    else if(isPoint2Open){
        // console.log('2');
        // imagenTarjeta1.classList.add('inactive');
        console.log('Entro 2');
    }
    else if(isPoint3Open){
        // console.log('3');
        point2.classList.add('point-active-color');
        point3.classList.toggle('point-active-color');

        imagenTarjeta2.classList.remove('inactive');
        imagenTarjeta3.classList.add('inactive');
        console.log('Entro 3');
    }
}

function imagenActiva3(){
    const isPoint1Open = point1.classList.contains('point-active-color');
    const isPoint2Open = point2.classList.contains('point-active-color');
    const isPoint3Open = point3.classList.contains('point-active-color');
    console.log('3');
    if(isPoint1Open){
        // console.log('1');
        point3.classList.add('point-active-color');
        point1.classList.toggle('point-active-color');

        imagenTarjeta3.classList.remove('inactive');
        imagenTarjeta1.classList.add('inactive');
        console.log('Entro 1');
    }
    else if(isPoint2Open){
        // console.log('2');
        point3.classList.add('point-active-color');
        point2.classList.toggle('point-active-color');

        imagenTarjeta3.classList.remove('inactive');
        imagenTarjeta2.classList.add('inactive');
        console.log('Entro 2');
    }

    else if(isPoint3Open){
        // console.log('3');
        console.log('Entro 3');
    }
}