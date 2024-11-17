let a = document.querySelector('a[href="index.html"]');
if (!a) {
    a = document.createElement("a");
    a.setAttribute("href", "index.html");
    a.innerHTML = '<i class="fas fa-home"></i>';
    document.body.prepend(a);
    
}
    
