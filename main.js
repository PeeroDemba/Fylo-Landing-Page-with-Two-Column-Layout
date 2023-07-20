"use strict";

const email1 = document.getElementById("email1");
const btn1 = document.getElementById("btn1");
const email2 = document.getElementById("email2");
const btn2 = document.getElementById("btn2");
let errormsg1 = document.createElement("p");
let errormsg2 = document.createElement("p");
let form1 = document.forms[0];
let form2 = document.forms[1];

function valid1() {
  let pattern = /^[a-z0-9]{1,20}@[a-z]{3,10}[.]com$/;
  if (pattern.test(email1.value)) {
    alert("Email Sent");
  } else {
    errormsg1.innerHTML = "Please check your email";
    errormsg1.style.display = "block";
    errormsg1.style.color = "red";
    errormsg1.style.fontSize = "0.8rem";
    errormsg1.style.marginTop = "0.5rem";
    email1.style.outlineColor = "red";
    email1.style.borderColor = "red";
    form1.appendChild(errormsg1);
  }
}

function valid2() {
  let pattern = /^[a-z0-9]{1,20}@[a-z]{3,10}[.]com$/;
  if (pattern.test(email2.value)) {
    alert("Email Sent");
  } else {
    errormsg2.innerHTML = "Please check your email";
    errormsg2.style.display = "block";
    errormsg2.style.color = "white";
    errormsg2.style.fontSize = "0.8rem";
    email2.style.outlineColor = "red";
    email2.style.borderColor = "red";
    errormsg2.style.order = "2";
    email2.style.order = "1";
    email2.style.marginBottom = "0";
    btn2.style.marginTop = "1rem";
    errormsg2.style.marginTop = "0.5rem";
    btn2.style.order = "3";
    form2.appendChild(errormsg2);
  }
}

function cleaner() {
  errormsg1.innerHTML = "";
  email1.style.outlineColor = "black";
  email1.style.borderColor = "hsl(238, 22%, 44%)";
  errormsg2.innerHTML = "";
  email2.style.outline = "none";
  email2.style.borderColor = "hsl(238, 22%, 44%)";
}

btn1.addEventListener("click", valid1);
email1.addEventListener("focus", cleaner);
btn2.addEventListener("click", valid2);
email2.addEventListener("focus", cleaner);
