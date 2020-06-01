import React, { useState, useEffect,useRef } from "react";
import axios from "../axios";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { useDispatch } from "react-redux";
import InpuField from "../components/InpuField";
import deleteItem from '../Auxiliar/deleteItem';

export default function AddNewItemPage() {
  let [brand, setBrand] = useState("");
  let [description, setDescription] = useState("");
  let [gender, setGender] = useState("");
  let [price, setPrice] = useState("");
  let [type, setType] = useState("");
  let [size, setSize] = useState("");
  let [imgUrl, setImgUrl] = useState(false);
  let [styleFlag, setStyleFlag] = useState(false);
  const dispatch = useDispatch();

  let imgRef = useRef(null)

  function uploadIMGFile(e) {
    let file = e.target.files[0];

    var storage = firebase.storage();

    var storageRef = storage.ref();

    var uploadTask = storageRef.child("images/" + file.name).put(file);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            setStyleFlag(true);
            break;
          default:
            console.log("Default case");
            break;
        }
      },
      function (error) {},
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          setStyleFlag(false);
          setImgUrl(downloadURL);
          imgRef.current = downloadURL
          console.log("File available at", downloadURL);
        });
      }
    );
  }

  function eventTargetFilter(event, hook) {
    let val = event.target.value;
    hook(val);
  }


  useEffect(() => {
    return () => {
      console.log(imgRef.current)
      if (imgRef.current){
        deleteItem(null,imgRef.current)
      }
    };
  }, []);

  function sendToServerHandler() {
    if (brand && description && gender && price && type && imgUrl) {
      let clothesSize = size.split(",")
      let data = {
        brand: brand,
        description: description,
        gender: gender,
        price: price,
        typeClothes: type,
        img: imgUrl,
        isAdded:false,
        size:clothesSize,
      };
      setImgUrl("");
      setPrice("");
      setType("");
      setGender("");
      setDescription("");
      setBrand("");
      setSize("");
      imgRef.current=null;
      axios
        .post("/data.json", data)
        .then((res) => {
          console.log(res);
          alert("Item published");
          dispatch({ type: "REFRESH", initRefresh: [] });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Fill in all fields!");
    }
  }
  return (
    <div className="add-item-wrapper">
      <InpuField
        label={"Brand"}
        value={brand}
        setValue={setBrand}
        eventTargetFilter={eventTargetFilter}
      />

      <InpuField
        label={"Description"}
        value={description}
        setValue={setDescription}
        eventTargetFilter={eventTargetFilter}
      />

      <InpuField
        label={"Gender"}
        value={gender}
        setValue={setGender}
        eventTargetFilter={eventTargetFilter}
      />

      <InpuField
        label={"Price"}
        value={price}
        setValue={setPrice}
        eventTargetFilter={eventTargetFilter}
      />

      <InpuField
        label={"Type"}
        value={type}
        setValue={setType}
        eventTargetFilter={eventTargetFilter}
      />

      <InpuField
        label={"Sizes"}
        value={size}
        setValue={setSize}
        eventTargetFilter={eventTargetFilter}
      />

      <label htmlFor="image-upload">Foto of item :</label>
      <input type="file" id="image-upload" onChange={(e) => uploadIMGFile(e)} />

      {imgUrl && <div className="checkmark"></div>}
      <div className={styleFlag ? "lds-roller" : ""}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <button onClick={sendToServerHandler}>SEND TO SERVER</button>
    </div>
  );
}
