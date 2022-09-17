import { useNavigate } from "react-router-dom";

function EachProduct({data}) {
  const navigate = useNavigate();
  const goToDetails = ()=>{
    const id = data._id;
    navigate(`/products/${id}`);
  }
  return (
    <div className="eachItem" key={data._id} onClick={goToDetails}>
      <img className="productImage" src={data.avatar} alt={data.description.substr(0,25)}/>
      <p>{data.name.substr(0,25)}</p>
      <p>Price: &#x20B9;{data.price}</p>
    </div>
  )
}
export default EachProduct;