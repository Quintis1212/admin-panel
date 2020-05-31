import axios from "../axios";
import store from "../reducer/reducer";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

function deleteData(id, deleteUrl) {
  if (deleteUrl) {
    console.log("run")
    const storage = firebase.storage();
    storage
      .refFromURL(deleteUrl)
      .delete()
      .then(function () {
        // File deleted successfully
        console.log("// File deleted successfully");
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
      });
  }
  if (id) {
    axios
      .delete("/data/" + id + ".json")
      .then((res) => {
        console.log(res);
        store.dispatch({ type: "REFRESH", initRefresh: [] });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default deleteData;
