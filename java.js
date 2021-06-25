
const laligas = document.getElementById("laliga")
const inggriss = document.getElementById("inggris")
const url = `https://api.football-data.org/v2/competitions`

const url_pri=`https://api.football-data.org/v2/competitions/2021/standings`
const url_la=`https://api.football-data.org/v2/competitions/2014/standings`
const cols = document.getElementById("col")
const tabel = document.getElementById("tables")

console.log(laligas)
console.log(inggriss)


//const getAPI = () =>{
//    fetch(`${url}`).then((response) => {
//     console.log(response) //Response
//        let produk = response.json(); 
//        return produk;
        
 //   }).then(sProduk);
// }

 //const sProduk = (barang) => {
 //   let data = barang.competitions[38].name
 //   cols.innerHTML=`
 //   <img id="image "src="" alt="">
 //   <div class="country" id="country"><h2>${data}<h2></div>
 //   <p>${barang.competitions[38].lastUpdated}</p>`
   
// }

// getAPI();


const Api = (key) =>{
    fetch(url_pri,{headers: new Headers({"X-Auth-Token":"72687546a14749e4a195a1ddcbd16e2e"})
    }).then((response) => {
      let dat = response.json()
      return dat
    })
    .then(Prime)  //data => console.log(data)
}

const Prime = (e) =>{
  let standing = e.standings[0].table
  console.log(e)
  console.log(standing)

  tabel.innerHTML = ``

  cols.innerHTML=`
     <img id="image "src="" alt="">
     <div class="country" id="country"><h2>${e.competition.name}<h2></div>
     <p>Last Update : ${e.competition.lastUpdated}</p>
  `

  standing.forEach((tim)=>{
    //console.log(tim.position)
    tabel.innerHTML +=`
    <tr>
      <th scope="row">${tim.position}</th>
      <td>${tim.team.name}</td>
      <td>${tim.won}</td>
      <td>${tim.draw}</td>
      <td>${tim.lost}</td>
      <td>${tim.points}</td>
    </tr>    
    `
    
  })
}

const Api2 = async(key) => {
  const res = await fetch(url_la,{headers: new Headers({"X-Auth-Token":"72687546a14749e4a195a1ddcbd16e2e"})})
  const datas = await res.json()
  Prime(datas)
}

Api();

inggriss.addEventListener("click",()=>{
  cols.innerHTML=`
  <div class="loading">
    <div class="loader"></div>
    <p>Mengambil data...</p>
 </div>
 `
 tabel.innerHTML =``  
    
  Api();
})

laligas.addEventListener("click",()=>{
  cols.innerHTML=`
  <div class="loading">
    <div class="loader"></div>
    <p>Mengambil data...</p>
 </div>
 `
 tabel.innerHTML =`` 
  Api2();
})





