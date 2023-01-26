let userData = [];
userData = JSON.parse(localStorage.getItem("utilisateurs"));

let entrepriseData = [];
entrepriseData = JSON.parse(localStorage.getItem("entrepriseData"));

let stationData = [];
stationData = JSON.parse(localStorage.getItem("station"));

let annonceData = [];
annonceData = JSON.parse(localStorage.getItem("annonces"));

export { userData, entrepriseData, stationData, annonceData };