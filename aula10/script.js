let data = []

 async function fetchData() {
     const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
     data = await response.json()
   
 }   

async function setData() {
    
    await fetchData();
    const element = document.getElementById("data")
    const reduceData = data.reduce((A, value) => {
        if(value.municipio?.microrregiao?.mesorregiao?.UF?.sigla == "PR"){
            return A + 1;
        }
        else{
            return A;
        }
 }, 0)   
 element.innerHTML = reduceData
}
setData()