#!/usr/bin/env node

function send(e) {
  const url = `/${e.type}`;
  console.log(url);
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url);
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.send("");
  }
}

window.addEventListener('load', send);
window.addEventListener('unload', send);