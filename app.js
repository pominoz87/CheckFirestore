// app.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("textForm");
  const textInput = document.getElementById("textInput");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const text = textInput.value;
    if (!text) return;

    firebase.firestore().collection("testText").add({
      text: text,
      timestamp: new Date().toISOString()
    })
    .then(docRef => {
      messageDiv.textContent = "Document written with ID: " + docRef.id;
      console.log("Document written with ID:", docRef.id);
      textInput.value = "";
    })
    .catch(error => {
      console.error("Error adding document:", error.code, error.message);
      messageDiv.textContent = "Error adding document: " + error.code + " " + error.message;
    });
  });
});
