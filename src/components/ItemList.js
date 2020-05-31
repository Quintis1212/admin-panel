import React from "react";
import { useSelector } from "react-redux";
import deleteItem from "../Auxiliar/deleteItem"

export default function ItemList() {
    let data = useSelector(state=>state.activePages)
  return (
    <>
      {data &&
        data.map((el) => {
            let id = el.id
            let imgURL = el.img

          return (
            <ul key={id} className="product-card">
              <li className ="product-card-foto">
                <img src={el.img} alt="clothes-foto" />
              </li>
              <span className="content-wrapper">
              <li>
                <p className="product-card-brand">{el.brand}</p>
              </li>
              <li>
                <p className="product-card-description">{el.description}</p>
              </li>
              <li>
                <p className="product-card-type">{el.type}</p>
              </li>
              <li>
                <p className="product-card-type">{el.size.join(",")}</p>
              </li>
              <li className="product-card-info">
                <p>{el.price} $</p>{" "}
                  <button onClick={()=>deleteItem(id,imgURL)} className="product-card-brand">DELETE ITEM</button>
              </li>
              </span>
            </ul>
          );
        })}
    </>
  );
}
