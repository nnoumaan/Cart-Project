import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


  const img3 = 'https://cdn.shopify.com/s/files/1/0601/1093/0098/files/8907605084515_1.jpg?v=1685359719'

  const img4 ='https://www.shutterstock.com/image-vector/vector-black-pc-keyboard-very-260nw-1026742981.jpg'

const img5 ='https://i.gadgets360cdn.com/products/large/IQoo11-db-709x800-1670500061.jpg'
const Home = () => {

  



  const disptach = useDispatch()
  

  const productList = [
    { id: "shoes", name: "Shoes", imgSrc: img2, price: 500, },
    { id: "Apple", name: "Apple", imgSrc: img1, price: 1000 },
    { id: "keychain", name: "Key Chain", imgSrc: img3, price: 250 },
    { id: "keyboard", name: "Keyboard", imgSrc: img4, price: 800 },
    { id: "iqoo", name: "IQOO 11 Pro", imgSrc: img5, price: 52000 },
  ];

  const addtocartHandler = (options) => {
    
    
   
    disptach({type:'addToCart',payload:options})
  

    toast.success("Added to Cart");




  };

  return (
    <div className="home">
      {
        // <ProductCard  name={productList[0].name} imgSrc={productList[0].imgSrc} price={productList[0].price}/>

        productList.map((i) => {
          return (
            <ProductCard
              key={i.id}
              id={i.id}
              name={i.name}
              imgSrc={i.imgSrc}
              price={i.price}
              handler={addtocartHandler}
            />
          );
        })
      }
    </div>
  );
};

const ProductCard = function ({ name, imgSrc, price, handler, id }) {
  return (
    <div className="productcard">
      <img src={imgSrc} alt={name} />

      <p>{name}</p>
      <h4>{price}</h4>
      <button
        onClick={() => {
          handler({ name, price, quantity: 1, id, imgSrc });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Home;
