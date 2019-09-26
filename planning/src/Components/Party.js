// function GetParty(){
//   const [infos, setInfos] =useState("");

//  useEffect(()=> {
//    axios.get(``)
//    .then(response => {
//      const infos = response.data;
//      console.log(response.data);
//      setInfos(infos);
//    })
//    .catch(error => {
//     console.log("there is an error with axios", error);
//    });
//  },[]);
//  return(
//    <GetParty
//    id={infos.id}
//    guest={infos.guests}
//    theme={infos.theme}
//    date={infos.date}
//    budget={infos.budget}
//    category_id={infos.category_id}
//    />
//  )
// }
