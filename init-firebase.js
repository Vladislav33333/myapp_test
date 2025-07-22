import { ref, set } from "firebase/database";
import { db } from "./firebase";
import { categories } from "../myapp_test/src/features/tools/helpers/toolsData.js"; // Путь к вашему файлу с данными

function initializeFirebaseData() {
  const categoriesRef = ref(db, "categories");
  set(categoriesRef, categories)
    .then(() => console.log("Data initialized successfully"))
    .catch((error) => console.error("Initialization failed:", error));
}

initializeFirebaseData();
