const btnI = document.querySelector(".btnI");

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  consumer_key: "qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW",
  consumer_secret: "osGQ364R49cXKeOYSpaOnT++rHs=",
  url: "https://www.myapplication.com/ipn",
  ipn_notification_type: "GET",
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

btnI.addEventListener("click", function () {
  //console.log("click");
  fetch(
    "https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      // console.log(result);
      fetch(
        ("https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN",
        requestOptions)
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    })
    .catch((error) => console.log("error", error));
});
