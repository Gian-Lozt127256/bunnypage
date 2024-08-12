function contactWhatsApp(number, productName) {
    var encodedProductName = encodeURIComponent(productName);
    var message = `Hola, estoy interesado en el producto: ${encodedProductName}`;
    var url = `https://wa.me/${number}?text=${message}`;
    window.open(url, '_blank');
}
