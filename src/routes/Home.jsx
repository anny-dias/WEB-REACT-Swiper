import {} from 'react'
//Importando a estrutura para manipular as imagens
import {Swiper, SwiperSlide} from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Estilo.module.css';


function Home (){
  //Hooks
  const [slidePreview, setSlidePreview] = useState(1);
  //Criando o obejeto de imagem
  const data=[
    {id: '1', image: './src/assets/img1.jpg'},
    {id: '2', image: './src/assets/img2.jpg'},
    {id: '3', image: './src/assets/img3.jpg'},
  ];
  //UseEffect faz o efeito colateral
  useEffect(()=>{
    function handleRezise(){
      if(window.innerWidth<720){
        setSlidePreview(1);
      }else{
        setSlidePreview(2);
      }
    }
    handleRezise();
    //modifica toda vez que o usuario diminuir a tela
    window.addEventListener('resize', handleRezise);
    return()=>{
      window.removeEventListener('resize', handleRezise);
    };
    //retorna array vazio
  },[]);
  return(
    <section>
      <Swiper
      slidePreview={slidePreview}
      pagination={{clickable:true}}
      navigation
      >
        {data.map((item)=>(
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Imagem" className={styles.slideItem}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Home