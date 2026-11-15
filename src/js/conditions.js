import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import "../css/style.css";
import "../css/conditions.css";

function setParkAlerts(alerts) {
    const alertsElement = document.querySelector(".alerts > ul");
    alertsElement.innerHTML = alerts.map(alertTemplate).join("");
}

function setVisitorCenters(centers) {
    const centersElement = document.querySelector(".visitor-centers details > ul");
    console.log(centersElement);
    centersElement.innerHTML = centers.map(visitorCenterTemplate).join("");
}

function setActivities(activities) {
    const activitiesElement = document.querySelector(".activities details> ul");
    activitiesElement.innerHTML = activities.map((activity) => `<li>${activity.name}</li>`).join("");
}

async function init() {
    const parkData = await getParkData();
    const parkAlerts = await getParkAlerts();
    console.log(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
    const activities = parkData.activities;
    setHeaderFooter(parkData);
    setParkAlerts(parkAlerts);
    setVisitorCenters(visitorCenters);
    setActivities(activities);
}

init();