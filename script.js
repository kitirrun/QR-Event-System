const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnRTQac8XblyDIf59I8mA3OW4ucFGWVt35-Hs3gak_7AjcESyXr6FJhXX7S1obuND3HrmhQ32QL8yjO2hQweF6EbYk6mpqJLbBBnE8Tr6N_DnOtgL-eb63eCAmtY_8DgiUFRO7g8vo2CgQl_dWFQOejQgNQLub_ViUvDTySZb4BMsJ0Z1X0_9G2jackj5JPLpJdLoHWQIt7Z9WvsgMqTd9CvZcIpB6_MLD5AhToeAcNy1QGieOS1udU4clRBdV8kew1RoIYqFQ5KiQO9QIIvo4qLvuB1LQ&lib=MIf0lFtkVRcUcrZElUVjRiwZz-a8X5CcA";

const params = new URLSearchParams(window.location.search);

const qr = params.get("qr");

if(qr){

fetch(API_URL + "?qr=" + qr)

.then(res=>res.json())

.then(showData);

}

function showData(data){

if(data.status){

document.getElementById("nama").innerHTML=data.nama;

document.getElementById("bib").innerHTML="BIB : "+data.bib;

document.getElementById("kategori").innerHTML=data.kategori;

}else{

document.getElementById("nama").innerHTML="DATA TIDAK DITEMUKAN";

}

}
