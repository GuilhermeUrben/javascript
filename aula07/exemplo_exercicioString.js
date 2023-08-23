var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";
const paramentros = url.split("?")[1]
console.log(paramentros)
const valores = paramentros.split("&");
console.log(`\nlista normal: ${valores}`);

for(let i = 0; i < valores.length; i++){
    if(valores[i].startsWith("atores="))
        valores[i] = "atores=" + valores[i].substring(7).toUpperCase();
}

console.log(`Lista maiúscula: ${valores}\n`);