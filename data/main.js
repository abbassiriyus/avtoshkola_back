// ishxonadagi ishchilar
var a=[
    {
      "childid": 4,
      "childlastname": "rebenok",
      "childfirstname": "rebenok",
      "childmiddlename": "rebenok",
      "dateofbirth": "2023-06-09T00:00:00.000Z",
      "addressid": 29,
      "gender": "м",
      "certificateofbirth": "III-КЕ 456789",
      "groupid": 2,
      "health": "1",
      "isregisteredwith": "ff",
      "allergy": "Да",
      "deviations": "Да",
      "medicines": "Да",
      "healthrestrictions": "Да",
      "diet": "ff",
      "photo": null,
      "comment": "ff",
      "syscreatedatutc": "2023-06-07T10:58:51.692Z",
      "syschangedatutc": "2023-06-07T10:58:51.692Z"
    },
    {
      "childid": 5,
      "childlastname": "rebenok",
      "childfirstname": "rebenok",
      "childmiddlename": "rrr",
      "dateofbirth": "2023-06-03T00:00:00.000Z",
      "addressid": 31,
      "gender": "ж",
      "certificateofbirth": "III-КЕ 456789",
      "groupid": 2,
      "health": "1",
      "isregisteredwith": "grrweg",
      "allergy": "Да",
      "deviations": "Да",
      "medicines": "Да",
      "healthrestrictions": "Да",
      "diet": "ergerg",
      "photo": null,
      "comment": "gewrg",
      "syscreatedatutc": "2023-06-07T13:14:32.031Z",
      "syschangedatutc": "2023-06-07T13:14:32.031Z"
    }
  ]
a.map((item,key)=>{
    document.querySelector('.cards').innerHTML+=`<div>${item.childlastname}</div>`
})

function Search() {
    var inp=document.querySelector(".sas").value
    document.querySelector('.cards').innerHTML=""
    a.map((item,key)=>{
        if((item.childlastname.toLowerCase()).includes(inp.toLowerCase())){
        document.querySelector('.cards').innerHTML+=`<div>${item.childlastname}</div>`}
    })  
}