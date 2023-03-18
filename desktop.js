const iconoMenuMobile = document.querySelector('.icono_menu');

const listaMenuMobile = document.querySelector('.nav-menu_mobile');

const containerTarjetas = document.querySelector('.container');

const idProductoDetalles = document.querySelector('#id-producto-detalles');


const allCards = document.querySelector('.container')
const templateCards = document.querySelector('#cards').content;
const fragment = document.createDocumentFragment() 

// const clickPoints = document.querySelector('.points-tarjeta');


// const clickPoints = document.querySelector('.container');
iconoMenuMobile.addEventListener('click', desplegarMenuMobile);

// clickPoints.addEventListener('click', (e) =>{
//     // e.target
//     console.log(e.target.classList.contains('point_1'));
//     e.stopPropagation();
// });

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
    alt1: 'Este es sasuke',
    image2: './img/image-112.png',
    alt2: 'Naruto',
    image3: './img/Naruto_Uzumaki.webp',
    alt3: 'este otro naruto',
    description: 'Este documento fue hecho para optener el titulo de ingeniero en Robotica',
    page: 'file:///C:/Users/juani/Documents/workspace/CalculoChistes%206/index.html#',
});
productList.push({
    title: 'Hola, jfvnje ejkejnev evnjevjnve ejvenjvenjvr vejnvenjve rjnevnvenve vnvrioeviove vjnvrv vejvnjv ejernnv rejnerner rjnenjer enjvr vnjvrv vjnernj njernjv enjernje nvnjvrnjvr erovrnvr vrjnenir vrnvrnjvr vrnvrnvr vnv',
    date: '14 / Nov / 2022',
    image1: './img/descarga.jfif',
    alt1: '',
    image2: './img/image-112.png',
    alt2: '',
    image3: './img/Naruto_Uzumaki.webp',
    alt3: '',
    description: 'Este documento fue hecho para optener el titulo de ingeniero en Robotica',
    page: 'file:///C:/Users/juani/Documents/workspace/CalculoChistes%206/index.html#',
});
productList.push({
    title: 'Medidor De Potencia Para Sistemas Embebidos',
    date: '18 / Nov / 2022',
    image1: './img/descarga.jfif',
    alt1: '',
    image2: './img/image-112.png',
    alt2: '',
    // image3: './img/Naruto_Uzumaki.webp',
    image3: '',
    alt3: '',
    description: 'Este documento fue hecho para optener el titulo de ingeniero en Robotica',
    page: 'file:///C:/Users/juani/Documents/workspace/CalculoChistes%206/index.html#',
});
productList.push({
    title: 'Medidor De Potencia Para Sistemas Embebidos',
    date: '20 / Nov / 2022',
    image1: './img/descarga.jfif',
    alt2: '',
    image2: './img/image-112.png',
    alt2: '',
    image3: './img/Naruto_Uzumaki.webp',
    alt3: '',
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
//  const template = document.querySelector('.tarjeta').content;
// array
// function addContainer(Lista){
//     Lista.forEach(element => {
//         containerTarjetas.querySelector
//     });
// }

// array.
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* Se crea el DOM */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
function addContainer(Lista){

    let numeroid = 0;
    Lista.forEach(element => {
        numeroid = numeroid + 1;

        const nombreTitulo = templateCards.querySelector('.tarjeta .producto-tarjeta-nombre .the-title')
        nombreTitulo.innerText = element.title
        const dateTarjeta = templateCards.querySelector('.tarjeta .producto-tarjeta-nombre div .date-tarjeta')
        dateTarjeta.innerText = element.date

        const imgTarjeta1 = templateCards.querySelector('.foto-tarjeta_1 img')
        imgTarjeta1.setAttribute('src', element.image1);
        const imgTarjeta2 = templateCards.querySelector('.foto-tarjeta_2 img')
        imgTarjeta2.setAttribute('src', element.image2);
        const imgTarjeta3 = templateCards.querySelector('.foto-tarjeta_3 img')
        imgTarjeta3.setAttribute('src', element.image3);
        
        // const imgTarjeta1  = templateCards.querySelector('.foto-tarjeta_3 img')
        imgTarjeta1 .setAttribute('alt', element.alt1);
        imgTarjeta2 .setAttribute('alt', element.alt2);
        imgTarjeta3 .setAttribute('alt', element.alt3);

        const pointsTarjeta = templateCards.querySelector('.tarjeta .points-tarjeta')
        const pointsA = templateCards.querySelector('.tarjeta .point_1')
        const pointsB = templateCards.querySelector('.tarjeta .point_2')
        const pointsC = templateCards.querySelector('.tarjeta .point_3')

        // console.log('Antes de esta')
        // console.log(numeroid)


        pointsTarjeta.setAttribute('id','points-tarjeta-'+numeroid);
        // console.log(pointsTarjeta.id)

        pointsA.setAttribute('id','point_' + numeroid + '-A');
        // console.log(pointsA.id)
        pointsB.setAttribute('id','point_' + numeroid + '-B');
        // console.log(pointsB.id)
        pointsC.setAttribute('id','point_' + numeroid + '-C');
        // console.log(pointsC.id)

        const idProductoTarjetaNombre = templateCards.querySelector('.producto-tarjeta-nombre')
        idProductoTarjetaNombre.setAttribute('id','id-producto-tarjeta-nombre-' + numeroid);

        const descripcionNumero = templateCards.querySelector('.descripcion')
        descripcionNumero.innerText = element.description
        descripcionNumero.setAttribute('id','descripcion-' + numeroid);

        const cardsN= templateCards.querySelector('.tarjeta')
        cardsN.setAttribute('id','cards-' + numeroid);


        const imgtheA= templateCards.querySelector('.tarjeta .foto-tarjeta_1 img')
        imgtheA.setAttribute('id','imgA-' + numeroid);
        const imgtheB= templateCards.querySelector('.tarjeta .foto-tarjeta_2 img')
        imgtheB.setAttribute('id','imgB-' + numeroid);
        const imgtheC= templateCards.querySelector('.tarjeta .foto-tarjeta_3 img')
        imgtheC.setAttribute('id','imgC-' + numeroid);

        const idTarjeta1= templateCards.querySelector('.tarjeta .foto-tarjeta_1')
        idTarjeta1.setAttribute('id','foto-tarjeta_1-' + numeroid);
        const idTarjeta2= templateCards.querySelector('.tarjeta .foto-tarjeta_2')
        idTarjeta2.setAttribute('id','foto-tarjeta_2-' + numeroid);
        const idTarjeta3= templateCards.querySelector('.tarjeta .foto-tarjeta_3')
        idTarjeta3.setAttribute('id','foto-tarjeta_3-' + numeroid);

        const theTitle= templateCards.querySelector('.tarjeta .producto-tarjeta-nombre .the-title')
        theTitle.setAttribute('id','title-' + numeroid);

        const theBoton= templateCards.querySelector('.tarjeta .producto-tarjeta-nombre .Boton-leer')
        theBoton.setAttribute('id','Boton-leer-' + numeroid);

        // console.log(imgtheA)
        // console.log(imgtheB)
        // console.log(imgtheC)


        // const cardsN= templateCards.querySelector('.tarjeta')


        // cards-numero
        // console.log('e.target.classList.value')
        // pointTarjeta1.setAttribute('src', element.image1);
        
        // pointTarjeta1.addEventListener('click', (e) =>{
        //     console.log(e.target.classList.value);
        //     console.log(e.target.id);
        //     // console.log(e.target.parentNode)
        //     console.log(e.target.id.parentNode);
        //     e.target.classList.add('point-active-color');
        //     e.target.id.toggle('point-active-color');
        //     e.target.id.toggle('point-active-color');
        // });
        const pointTarjeta2 = templateCards.querySelector('.point_2')
        // pointTarjeta2.setAttribute('src', element.image2);
        const pointTarjeta3 = templateCards.querySelector('.point_3')
        // pointTarjeta3.setAttribute('src', element.image3);
        
        // iconoMenuMobile.addEventListener('click', desplegarMenuMobile);

        // console.log(pointTarjeta1.id);

        const clone = templateCards.cloneNode(true);
        fragment.appendChild(clone);
        // console.log(pointTarjeta1.id);
    });
    allCards.appendChild(fragment)
}

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* Logica de funcionamiento DOM*/
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
allCards.addEventListener('click', (e) =>{
    // if(document.getElementById(e.target.id).parentNode.classList.contains('tarjeta')){
        
    // }
    // if(!(e.target.classList.contains('the-title') || e.target.classList.contains('Boton-leer'))){
    //     // const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
    // } else {
    //     // const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
    // }
    // if(e.target.classList.contains('the-title')){
    //     console.log('yes')
    // } else if(e.target.classList.contains('Boton-leer')){
    //     console.log('yes')
    // } else{
    //     const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
    // }
    // console.log(document.getElementById(e.target.id).parentNode.classList.contains('tarjeta'))

    // console.log(e.target.classList.contains('the-title'))
    // console.log(e.target.classList.contains('Boton-leer'))

    // const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;

    // console.log(e.target.classList.value);
    // console.log(e.target.id);
    // console.log(document.getElementById(e.target.id).parentNode.id);

    // const idPoint = '#' + document.getElementById(e.target.id).parentNode.id + ' .point_3';
    // console.log(idPoint)
    // console.log('aqui')
    // selectorPoint = document.querySelector(idPoint);
    // console.log(e.target.classList.value)
    if(e.target.classList.value === 'foto-tarjeta_1'){
        const idPadreTarjeta = document.getElementById(e.target.id).parentNode.id;

        // console.log("Yes")
        const theImag1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
        const theImag2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
        // const theImag3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');

        // console.log('despues')
        // console.log(idPadreTarjeta)
        // console.log(theImag1)
        // console.log(theImag2)
        // console.log(theImag3)

        theImag1.classList.add('inactive');
        theImag2.classList.remove('inactive');

        const thepoint1 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_1');
        const thepoint2 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_2');
        // const thepoint3 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_3');

        thepoint1.classList.remove('point-active-color');
        thepoint2.classList.add('point-active-color');
    }
    if(e.target.classList.value === 'foto-tarjeta_2'){
        const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
        // console.log("Yes")
        // const theImag1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
        const theImag2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
        const theImag3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');

        theImag2.classList.add('inactive');
        theImag3.classList.remove('inactive');

        // const thepoint1 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_1');
        const thepoint2 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_2');
        const thepoint3 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_3');

        thepoint2.classList.remove('point-active-color');
        thepoint3.classList.add('point-active-color');
    }
    if(e.target.classList.value === 'foto-tarjeta_3'){
        const idPadreTarjeta = document.getElementById(e.target.id).parentNode.id;

        // console.log("Yes")
        
        // imgTarjeta1.setAttribute('src', element.image1);
        const theImag1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
        // const theImag2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
        const theImag3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');
        // img3Aside.setAttribute('src', theImag3.src);
        // if(!theImag3.src === ''){
            theImag3.classList.add('inactive');
            theImag1.classList.remove('inactive');
        // }



        const thepoint1 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_1');
        // const thepoint2 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_2');
        const thepoint3 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_3');

        thepoint3.classList.remove('point-active-color');
        thepoint1.classList.add('point-active-color');
    }

    if(e.target.classList.value === 'imgA'){
        const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
        // console.log("Yes")
        const theImag1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
        const theImag2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
        // const theImag3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');

        // console.log('despues')
        // console.log(idPadreTarjeta)
        // console.log(theImag1)
        // console.log(theImag2)
        // console.log(theImag3)

        theImag1.classList.add('inactive');
        theImag2.classList.remove('inactive');

        const thepoint1 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_1');
        const thepoint2 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_2');
        // const thepoint3 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_3');

        thepoint1.classList.remove('point-active-color');
        thepoint2.classList.add('point-active-color');
    }
    if(e.target.classList.value === 'imgB'){
        const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
        // console.log("Yes")
        // const theImag1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
        const theImag2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
        const theImag3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');

        theImag2.classList.add('inactive');
        theImag3.classList.remove('inactive');

        // const thepoint1 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_1');
        const thepoint2 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_2');
        const thepoint3 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_3');

        thepoint2.classList.remove('point-active-color');
        thepoint3.classList.add('point-active-color');

        // console.log('despues')

        // console.log(idPadreTarjeta)
        // console.log(theImag1)
        // console.log(theImag2)
        // console.log(theImag3)
    }
    if(e.target.classList.value === 'imgC'){
        const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
        // console.log("Yes")
        
        // imgTarjeta1.setAttribute('src', element.image1);
        const theImag1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
        // const theImag2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
        const theImag3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');
        // img3Aside.setAttribute('src', theImag3.src);
        // if(!theImag3.src === ''){
            theImag3.classList.add('inactive');
            theImag1.classList.remove('inactive');
        // }



        const thepoint1 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_1');
        // const thepoint2 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_2');
        const thepoint3 = document.querySelector('#' + idPadreTarjeta + ' .points-tarjeta .point_3');

        thepoint3.classList.remove('point-active-color');
        thepoint1.classList.add('point-active-color');

        // console.log('despues')
        // console.log(idPadreTarjeta)
        // console.log(theImag1)
        // console.log(theImag2)
        // console.log(theImag3)
    }


    if(e.target.classList.value === 'point_1'){
        const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
        // e.target.classList.add('point-active-color');
        // let idPoint2 = '#' + document.getElementById(e.target.id).parentNode.id + ' .point_2';
        // let selectorPoint2 = document.querySelector(idPoint2);
        // selectorPoint2.classList.remove('point-active-color');
        // console.log('si')
        // nextSibling
        




        const idPoint2 = '#' + document.getElementById(e.target.id).parentNode.id + ' .point_2';
        const idPoint3 = '#' + document.getElementById(e.target.id).parentNode.id + ' .point_3';
        
        const selectorPoint2 = document.querySelector(idPoint2);
        const selectorPoint3 = document.querySelector(idPoint3);

        // console.log(e.target.classList.contains('point-active-color'))
        if(e.target.classList.contains('point-active-color')){

        }
        else if(!e.target.classList.contains('point-active-color')){
            e.target.classList.add('point-active-color');
            selectorPoint2.classList.remove('point-active-color');
            selectorPoint3.classList.remove('point-active-color');

            const theImagen1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
            const theImagen2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
            const theImagen3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');

            if(!theImagen1.classList.contains('inactive')){
                // console.log('No tiene')
            }
            else if(theImagen1.classList.contains('inactive')){
                // console.log('Si tiene')
                theImagen1.classList.remove('inactive');
            }
            if(!theImagen2.classList.contains('inactive')){
                // console.log('No tiene')
                theImagen2.classList.add('inactive');
            }
            else if(theImagen2.classList.contains('inactive')){
                // console.log('Si tiene')
            }
            if(!theImagen3.classList.contains('inactive')){
                // console.log('No tiene')
                theImagen3.classList.add('inactive');
            }
            else if(theImagen3.classList.contains('inactive')){
                // console.log('Si tiene')
            }
        }
        // console.log(document.getElementById(e.target.id).parentNode.id)

        // const theImagen1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
        // theImagen1.classList.add('inactive');

        // const theImagen2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
        // theImagen2.classList.add('inactive');
    }
    if(e.target.classList.value === 'point_2'){
        const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
        const idPoint1 = '#' + document.getElementById(e.target.id).parentNode.id + ' .point_1';
        const idPoint3 = '#' + document.getElementById(e.target.id).parentNode.id + ' .point_3';
        const selectorPoint1 = document.querySelector(idPoint1);
        const selectorPoint3 = document.querySelector(idPoint3);

        e.target.classList.add('point-active-color');
        // console.log(document.getElementById(e.target.id).parentNode.id)
        // console.log('no')
        // console.log('.' + e.target.id)
        // console.log(document.getElementById('#' + e.target.id).nextSibling);

        // console.log(document.getElementById('#' + e.target.id).nextSibling.value)
        
    // document.getElementById('otro-parrafo').getElementsByTagName('em')[0].nextSibling.nodeValue;
        // (e.target.id.nextSibling).classList.remove('point-active-color');


        // document.getElementById(e.target.id).nextSibling

        selectorPoint1.classList.remove('point-active-color');

        selectorPoint3.classList.remove('point-active-color');





        const theImagen1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
            const theImagen2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
            const theImagen3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');

            if(!theImagen1.classList.contains('inactive')){
                // console.log('No tiene')
                theImagen1.classList.add('inactive');
            }
            else if(theImagen1.classList.contains('inactive')){
                // console.log('Si tiene')
            }
            if(!theImagen2.classList.contains('inactive')){
                // console.log('No tiene')
            }
            else if(theImagen2.classList.contains('inactive')){
                // console.log('Si tiene')
                theImagen2.classList.remove('inactive');
            }
            if(!theImagen3.classList.contains('inactive')){
                // console.log('No tiene')
                theImagen3.classList.add('inactive');
            }
            else if(theImagen3.classList.contains('inactive')){
                // console.log('Si tiene')
            }
    }
    if(e.target.classList.value === 'point_3'){
        const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;
        // e.target.classList.add('point-active-color');
        
        const idPoint1 = '#' + document.getElementById(e.target.id).parentNode.id + ' .point_1';
        const idPoint2 = '#' + document.getElementById(e.target.id).parentNode.id + ' .point_2';
        const selectorPoint1 = document.querySelector(idPoint1);
        const selectorPoint2 = document.querySelector(idPoint2);

        e.target.classList.add('point-active-color');

        // console.log(document.getElementById(e.target.id).parentNode.id)
        // console.log('rayos')
        // console.log(idPadreTarjeta)
        // console.log(e.target.id)

        // if(points-tarjeta-3)

        selectorPoint1.classList.remove('point-active-color');

        selectorPoint2.classList.remove('point-active-color');





        const theImagen1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1');
            const theImagen2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2');
            const theImagen3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3');

            if(!theImagen1.classList.contains('inactive')){
                // console.log('No tiene')
                theImagen1.classList.add('inactive');
            }
            else if(theImagen1.classList.contains('inactive')){
                // console.log('Si tiene')
            }
            if(!theImagen2.classList.contains('inactive')){
                // console.log('No tiene')
                theImagen2.classList.add('inactive');
            }
            else if(theImagen2.classList.contains('inactive')){
                // console.log('Si tiene')
            }
            if(!theImagen3.classList.contains('inactive')){
                // console.log('No tiene')
            }
            else if(theImagen3.classList.contains('inactive')){
                // console.log('Si tiene')
                theImagen3.classList.remove('inactive');
            }
    }

    if(e.target.classList.value === 'Boton-leer'){
        const isMain = document.querySelector('main');
        isMain.style.minHeight = 'calc(100vh - 80px)';
        // containerTarjetas.style.gridTemplateColumns = 'repeat(auto-fill, 320px)';
        // containerTarjetas.style.gridTemplateColumns = 'none';
        // containerTarjetas.style.gridAutoColumns = 'min-content';
        // containerTarjetas.style.marginLeft = '0px';
        // grid-auto-columns: min-content;
        // containerTarjetas.style.display = 'flex';
        // containerTarjetas.style.width = '100%';
        // containerTarjetas.style.placeContent = 'center';
        // tarjeta
       
        // const idContainer = document.querySelector('main .id-container');
        const idProductoDetalles = document.querySelector('#id-producto-detalles');
        idProductoDetalles.scrollTop = '0'
        // console.log(idProductoDetalles.scrollTop)
        // console.log('rayos')
        // scroll.scrollTop=0;
        const idFooter = document.querySelector('#id-footer');
        // const idContainer = document.querySelector('#id-container');
        // allCards.style.backgroundColor = 'red';
        allCards.style.width = '70%';
        allCards.style.placeContent = 'center';
        // allCards.style.width = 'calc(100%-' + idProductoDetalles.style.width + ')';
        idProductoDetalles.style.width = '20%'
        // console.log(idProductoDetalles.style.width)
        // console.log(allCards.style.backgroundColor)
        // idProductoDetalles.style.margin = '0'

        const idPadreTarjeta = document.getElementById(document.getElementById(e.target.id).parentNode.id).parentNode.id;

        const img1Aside = document.querySelector('#img_1-aside');
        const theImag1 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_1 img');
        const img2Aside = document.querySelector('#img_2-aside');
        const theImag2 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_2 img');
        const img3Aside = document.querySelector('#img_3-aside');
        const theImag3 = document.querySelector('#' + idPadreTarjeta + ' .foto-tarjeta_3 img');

        const point1Aside = document.querySelector('#point_1-aside');
        const point2Aside = document.querySelector('#point_2-aside');
        const point3Aside = document.querySelector('#point_3-aside');

        const titleAside = document.querySelector('#title-aside');
        const theTitle = document.querySelector('#' + idPadreTarjeta + ' .producto-tarjeta-nombre .the-title');
        const dateAside = document.querySelector('#date-aside');
        const dateTarjeta = document.querySelector('#' + idPadreTarjeta + ' .producto-tarjeta-nombre .date-tarjeta');
        const descripcionAside = document.querySelector('#descripcion-aside');
        const descripcion = document.querySelector('#' + idPadreTarjeta + ' .descripcion');
        const botonLeerAside = document.querySelector('#boton-leer-aside');
        const botonLeer = document.querySelector('#' + idPadreTarjeta + ' .producto-tarjeta-nombre .Boton-leer');

        // const imgTarjeta1 = templateCards.querySelector('.foto-tarjeta_1 img')
        
        img1Aside.setAttribute('src', theImag1.src);
        img2Aside.setAttribute('src', theImag2.src);
        img3Aside.setAttribute('src', theImag3.src);

        img1Aside.setAttribute('alt', theImag1.alt);
        img2Aside.setAttribute('alt', theImag2.alt);
        img3Aside.setAttribute('alt', theImag3.alt);

        // imgTarjeta1 .setAttribute('alt', element.alt1);

        titleAside.innerText = theTitle.innerText
        dateAside.innerText = dateTarjeta.innerText
        descripcionAside.innerText = descripcion.innerText
        // botonLeerAside.innerText = botonLeer.innerText
        // console.log(dateAside.innerText)
        // console.log(dateTarjeta.innerText)

        // console.log(point1Aside.classList)
        // console.log(idPadreTarjeta)

        if(!point1Aside.classList.contains('point-active-color')){
            point1Aside.classList.add('point-active-color');
            // point1Aside.style.color = 'Red'
            // console.log('Yes')
        }
        if(point2Aside.classList.contains('point-active-color')){
            point2Aside.classList.remove('point-active-color');
            // point1Aside.style.color = 'Red'
            // console.log('Yes')
        }
        if(point3Aside.classList.contains('point-active-color')){
            point3Aside.classList.remove('point-active-color');
            // point1Aside.style.color = 'Red'
            // console.log('Yes')
        }

        const fotoDetalles1 = idProductoDetalles.querySelector('.foto-detalles_1');
        const fotoDetalles2 = idProductoDetalles.querySelector('.foto-detalles_2');
        const fotoDetalles3 = idProductoDetalles.querySelector('.foto-detalles_3');

        // fotoDetalles1.style.backgroundImage = theImag1.src
        // console.log(fotoDetalles1.style.backgroundImage)
        // console.log('Yes')
        // img1Aside.setAttribute('src', theImag1.src);
        // img2Aside.setAttribute('src', theImag2.src);
        // img3Aside.setAttribute('src', theImag3.src);

        if(fotoDetalles1.classList.contains('inactive')){
            fotoDetalles1.classList.remove('inactive');
            // point1Aside.style.color = 'Red'
            // console.log('Yes')
        }
        if(!fotoDetalles2.classList.contains('inactive')){
            fotoDetalles2.classList.add('inactive');
            // point1Aside.style.color = 'Red'
            // console.log('Yes')
        }
        if(!fotoDetalles3.classList.contains('inactive')){
            fotoDetalles3.classList.add('inactive');
            // point1Aside.style.color = 'Red'
            // console.log('Yes')
        }

        if(idProductoDetalles.classList.contains('inactive')){
            idProductoDetalles.classList.remove('inactive');
        }
        if(!idFooter.classList.contains('inactive')){
            idFooter.classList.add('inactive');
        }
    }

    // point-active-color"
    // console.log(e.target.id)
    // if(e.target.id === 'id-imagencerrardetalles'){

    //     console.log('click')

    // }

    e.stopPropagation();
});

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/* Creación del DOM de aside */
/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
idProductoDetalles.addEventListener('click', (e) =>{
    // const idProductoDetalles = document.querySelector('#id-producto-detalles');
    const isMain = document.querySelector('main');
    isMain.style.minHeight = 'calc(100vh - 80px - 96px)';
    if((e.target.id === 'id-imagencerrardetalles') || (e.target.classList.contains('cerrar-aside'))){
        // containerTarjetas.style.gridTemplateColumns = 'repeat(auto-fill, 320px)';

        // cerrar-aside
        const idProductoDetalles = document.querySelector('#id-producto-detalles');
        const idFooter = document.querySelector('#id-footer');
        // allCards.style.width = '70%';
        // allCards.style.placeContent = 'center';
        // idProductoDetalles.style.width = '20%'
        // console.log(allCards.style.backgroundColor)
        allCards.style.width = '100%';
        // containerTarjetas
    
    
        if(!idProductoDetalles.classList.contains('inactive')){
            idProductoDetalles.classList.add('inactive');
        }
        if(idFooter.classList.contains('inactive')){
            idFooter.classList.remove('inactive');
        }

    }
    // console.log(e.target.id)
    const point1Aside = document.querySelector('#point_1-aside');
    const point2Aside = document.querySelector('#point_2-aside');
    const point3Aside = document.querySelector('#point_3-aside');

    const fotoDetalles1 = idProductoDetalles.querySelector('.foto-detalles_1');
    const fotoDetalles2 = idProductoDetalles.querySelector('.foto-detalles_2');
    const fotoDetalles3 = idProductoDetalles.querySelector('.foto-detalles_3');

    // console.log(point1Aside.id)
    if(e.target.id === point1Aside.id){
        // console.log('click 1')
        if(!point1Aside.classList.contains('point-active-color')){
            point1Aside.classList.add('point-active-color');
            fotoDetalles1.classList.remove('inactive');
        }
        if(point2Aside.classList.contains('point-active-color')){
            point2Aside.classList.remove('point-active-color');
            fotoDetalles2.classList.add('inactive');
        }
        if(point3Aside.classList.contains('point-active-color')){
            point3Aside.classList.remove('point-active-color');
            fotoDetalles3.classList.add('inactive');
        }
    }
    if(e.target.id === point2Aside.id){
        if(point1Aside.classList.contains('point-active-color')){
            point1Aside.classList.remove('point-active-color');
            fotoDetalles1.classList.add('inactive');
        }
        if(!point2Aside.classList.contains('point-active-color')){
            point2Aside.classList.add('point-active-color');
            fotoDetalles2.classList.remove('inactive');
        }
        if(point3Aside.classList.contains('point-active-color')){
            point3Aside.classList.remove('point-active-color');
            fotoDetalles3.classList.add('inactive');
        }
        // console.log('click 2')
    }
    if(e.target.id === point3Aside.id){
        if(point1Aside.classList.contains('point-active-color')){
            point1Aside.classList.remove('point-active-color');
            fotoDetalles1.classList.add('inactive');
        }
        if(point2Aside.classList.contains('point-active-color')){
            point2Aside.classList.remove('point-active-color');
            fotoDetalles2.classList.add('inactive');
        }
        if(!point3Aside.classList.contains('point-active-color')){
            point3Aside.classList.add('point-active-color');
            fotoDetalles3.classList.remove('inactive');
        }
        // console.log('click 3')
    }

    if((e.target.id === 'img_1-aside') || (e.target.classList.contains('foto-detalles_1'))){
        if(point1Aside.classList.contains('point-active-color')){
            point1Aside.classList.remove('point-active-color');
            fotoDetalles1.classList.add('inactive');

            point2Aside.classList.add('point-active-color');
            fotoDetalles2.classList.remove('inactive');
        }
    }

    if((e.target.id=== 'img_2-aside') || (e.target.classList.contains('foto-detalles_2'))){
        if(point2Aside.classList.contains('point-active-color')){
            point2Aside.classList.remove('point-active-color');
            fotoDetalles2.classList.add('inactive');

            point3Aside.classList.add('point-active-color');
            fotoDetalles3.classList.remove('inactive');
        }
    }

    if((e.target.id=== 'img_3-aside') || (e.target.classList.contains('foto-detalles_3'))){
        if(point3Aside.classList.contains('point-active-color')){
            point3Aside.classList.remove('point-active-color');
            fotoDetalles3.classList.add('inactive');

            point1Aside.classList.add('point-active-color');
            fotoDetalles1.classList.remove('inactive');
        }
    }

    
    
    // console.log(e.target.id);
    e.stopPropagation();
});
// idImagenCerrarDetalles 
// id-producto-detalles
// const img1 = document.createElement('img');
//         img1.setAttribute('src', product.image1);
//         const img1 =;
//         document.createElement('img').setAttribute('src', product.image1);

addContainer(productList);

// function reproducirContainer(Lista){
//     let numeroSelector = 0;
//     let tarjetaNumero;
//     let fotoTarjeta1Numero;
//     let fotoTarjeta2Numero;
//     let fotoTarjeta3Numero;
//     let pointsTarjetaNumero;
//     const selectPoint = [];
//     let point1Numero;
//     let point2Numero;
//     let point3Numero;
//     let productoTarjetaNombreNumero;
//     let dateNumero;
//     let titleNumero;
//     let leerMas;
    
//     for (product of Lista) {
//         numeroSelector = numeroSelector + 1;
//         console.log(numeroSelector);

//         const productTarjeta = document.createElement('div');
//         productTarjeta.classList.add('tarjeta');

//         tarjetaNumero = 'tarjeta-' + numeroSelector;
//         productTarjeta.classList.add(tarjetaNumero);
        
//         // foto-tarjeta_1/////////////////////////////////////////////////////////////////
//         const productFotoTarjeta_1 = document.createElement('picture');
//         productFotoTarjeta_1.classList.add('foto-tarjeta_1');

//         fotoTarjeta1Numero = 'foto-tarjeta_1-' + numeroSelector;
//         productFotoTarjeta_1.classList.add(fotoTarjeta1Numero);
    
//         const img1 = document.createElement('img');
//         img1.setAttribute('src', product.image1);
    
//         productFotoTarjeta_1.appendChild(img1);
    
//         // foto-tarjeta_2/////////////////////////////////////////////////////////////////
//         const productFotoTarjeta_2 = document.createElement('picture');
//         productFotoTarjeta_2.classList.add('foto-tarjeta_2');
//         productFotoTarjeta_2.classList.add('inactive');

//         fotoTarjeta2Numero = 'foto-tarjeta_2-' + numeroSelector;
//         productFotoTarjeta_2.classList.add(fotoTarjeta2Numero);

//         const img2 = document.createElement('img');
//         img2.setAttribute('src', product.image2);
    
//         productFotoTarjeta_2.appendChild(img2);
    
//         // foto-tarjeta_3/////////////////////////////////////////////////////////////////
//         const productFotoTarjeta_3 = document.createElement('picture');
//         productFotoTarjeta_3.classList.add('foto-tarjeta_3');
//         productFotoTarjeta_3.classList.add('inactive');

//         fotoTarjeta3Numero = 'foto-tarjeta_3-' + numeroSelector;
//         productFotoTarjeta_3.classList.add(fotoTarjeta3Numero);

//         const img3 = document.createElement('img');
//         img3.setAttribute('src', product.image3);
    
//         productFotoTarjeta_3.appendChild(img3);
    
//         // points-tarjeta//////////////////////////////////////////////////////////////////
//         const pointsTarjeta = document.createElement('ul');
//         pointsTarjeta.classList.add('points-tarjeta');

//         pointsTarjetaNumero = 'points-tarjeta-' + numeroSelector;
//         pointsTarjeta.classList.add(pointsTarjetaNumero);

//         const point_1 = document.createElement('li');
//         point_1.classList.add('point_1');
//         point_1.classList.add('point-active-color');
//         point_1.addEventListener('click', imagenActiva1);

//         point1Numero = 'point_1-' + numeroSelector;
//         point_1.classList.add(point1Numero);
//         selectPoint[numeroSelector] = document.querySelector('.' + point1Numero);
//         // selectPoint[numeroSelector].addEventListener('click', imagenActiva1);

//         const point_2 = document.createElement('li');
//         point_2.classList.add('point_2');
//         point_2.addEventListener('click', imagenActiva2);

//         const point_3 = document.createElement('li');
//         point_3.classList.add('point_3');
//         point_3.addEventListener('click', imagenActiva3);
    


// // const point1 = document.querySelector('.point_1');
// // const point2 = document.querySelector('.point_2');
// // const point3 = document.querySelector('.point_3');

// // const imagenTarjeta1 = document.querySelector('.foto-tarjeta_1');
// // const imagenTarjeta2 = document.querySelector('.foto-tarjeta_2');
// // const imagenTarjeta3 = document.querySelector('.foto-tarjeta_3');

// // point1.addEventListener('click', imagenActiva1);
// // point2.addEventListener('click', imagenActiva2);
// // point3.addEventListener('click', imagenActiva3);




//         pointsTarjeta.appendChild(point_1);
//         pointsTarjeta.appendChild(point_2);
//         pointsTarjeta.appendChild(point_3);
    
//         // producto-tarjeta-nombre/////////////////////////////////////////////////////////
//         const productoTarjetaNombre = document.createElement('div');
//         productoTarjetaNombre.classList.add('producto-tarjeta-nombre');
    
//         const dateDiv = document.createElement('div');
//         const dateP = document.createElement('p');
//         dateP.innerText = product.date;
    
//         const descriptionP = document.createElement('p');
//         descriptionP.innerText = product.description;
    
//         const LeerMas = document.createElement('a');
//         LeerMas.setAttribute('href', product.page);
//         LeerMas.innerText = 'Leer más';
    
//         dateDiv.appendChild(dateP );
    
//         productoTarjetaNombre.appendChild(dateDiv);
//         productoTarjetaNombre.appendChild(descriptionP);
//         productoTarjetaNombre.appendChild(LeerMas);
    
//         // tarjeta///////////////////////////////////////////////////////////////
//         productTarjeta.appendChild(productFotoTarjeta_1);
//         productTarjeta.appendChild(productFotoTarjeta_2);
//         productTarjeta.appendChild(productFotoTarjeta_3);
//         productTarjeta.appendChild(pointsTarjeta);
//         productTarjeta.appendChild(productoTarjetaNombre);
    
//         containerTarjetas.appendChild(productTarjeta);
//     }
// }

// // reproducirContainer(productList);

// const point1 = document.querySelector('.point_1');
// const point2 = document.querySelector('.point_2');
// const point3 = document.querySelector('.point_3');

// const imagenTarjeta1 = document.querySelector('.foto-tarjeta_1');
// const imagenTarjeta2 = document.querySelector('.foto-tarjeta_2');
// const imagenTarjeta3 = document.querySelector('.foto-tarjeta_3');

// ///points-tarjeta///////////////////////////////////////////////////////////////////
// function imagenActiva1(){
//     const isPoint1Open = point1.classList.contains('point-active-color');
//     const isPoint2Open = point2.classList.contains('point-active-color');
//     const isPoint3Open = point3.classList.contains('point-active-color');

//     console.log('1');
//     if(isPoint1Open){
//         console.log('Entro 1');
//     }
//     else if(isPoint2Open){
//         point1.classList.add('point-active-color');
//         point2.classList.toggle('point-active-color');

//         imagenTarjeta1.classList.remove('inactive');
//         imagenTarjeta2.classList.add('inactive');
//         console.log('Entro 2');
//     }
//     else if(isPoint3Open){
//         point1.classList.add('point-active-color');
//         point3.classList.toggle('point-active-color');

//         imagenTarjeta1.classList.remove('inactive');
//         imagenTarjeta3.classList.add('inactive');
//         console.log('Entro 3');
//     }
// }

// function imagenActiva2(){
//     const isPoint1Open = point1.classList.contains('point-active-color');
//     const isPoint2Open = point2.classList.contains('point-active-color');
//     const isPoint3Open = point3.classList.contains('point-active-color');
//     console.log('2');
//     if(isPoint1Open){
//         point2.classList.add('point-active-color');
//         point1.classList.toggle('point-active-color');

//         imagenTarjeta2.classList.remove('inactive');
//         imagenTarjeta1.classList.add('inactive');
//         console.log('Entro 1');
//     }
//     else if(isPoint2Open){
//         console.log('Entro 2');
//     }
//     else if(isPoint3Open){
//         point2.classList.add('point-active-color');
//         point3.classList.toggle('point-active-color');

//         imagenTarjeta2.classList.remove('inactive');
//         imagenTarjeta3.classList.add('inactive');
//         console.log('Entro 3');
//     }
// }

// function imagenActiva3(){
//     const isPoint1Open = point1.classList.contains('point-active-color');
//     const isPoint2Open = point2.classList.contains('point-active-color');
//     const isPoint3Open = point3.classList.contains('point-active-color');
//     console.log('3');
//     if(isPoint1Open){
//         point3.classList.add('point-active-color');
//         point1.classList.toggle('point-active-color');

//         imagenTarjeta3.classList.remove('inactive');
//         imagenTarjeta1.classList.add('inactive');
//         console.log('Entro 1');
//     }
//     else if(isPoint2Open){
//         point3.classList.add('point-active-color');
//         point2.classList.toggle('point-active-color');

//         imagenTarjeta3.classList.remove('inactive');
//         imagenTarjeta2.classList.add('inactive');
//         console.log('Entro 2');
//     }

//     else if(isPoint3Open){
//         console.log('Entro 3');
//     }
// }