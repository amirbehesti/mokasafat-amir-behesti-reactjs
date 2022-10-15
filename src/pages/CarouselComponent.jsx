import{useState,useEffect} from "react";

function CarouselComponent({item}) {
 const{title,images} = item;
 const[currentIndex,setCurrentIndex] = useState(0);

 const corousalInfiniteScroll = ()=>{
     if(currentIndex === images.length-1){
        return setCurrentIndex(0);
     }else{
        return setCurrentIndex(currentIndex+1);
     }
 }

 useEffect(()=>{
    const interval = setInterval(()=>{
          corousalInfiniteScroll();
    },3000)
    return ()=> clearInterval(interval);
 })

  return (
    <div className="carousel-container">

      {images && images.map((item,index)=>{
        return (<div className="carousel-item" style={{transform: `translate(-${currentIndex*100}%)`}} key={index}>
          <img className="detailImage" src={item} alt={title}/>
      </div>)
      })}

    </div>
  );
}

export default CarouselComponent;