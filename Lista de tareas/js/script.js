import { initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const input = document.getElementById("inputField");
const boto = document.getElementById("añadir");

const appConfiguracio = {
    databaseURL: "https://lista-de-tareas-142a0-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appConfiguracio);
const baseDades = getDatabase(app);
const tasks = ref(baseDades , "lista");



boto.addEventListener("click", function(){
    push(tasks, input.value)
    alert("Afegit a la BD")
    console.log(input.value)

})


