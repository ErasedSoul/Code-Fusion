const fetch = require("node-fetch");

var c = `
 #include<bits/stdc++.h>
 using namespace std;
 int main(void)
 {
    cout<<"Hello World"<<endl;
 }`;

 let sid;
fetch("https://ide.geeksforgeeks.org/main.php", {
  headers: {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
   "method": 'POST',
   "body": "lang=Cpp14&code="+c+"&input=&save=false"

}).then(response => {return response.json()}).then(data => { 
    const json = JSON.stringify(data);
    const val = JSON.parse(json);
    data_function(val.sid);
});

function data_function(data){
    
  sid = data;
  console.log(sid);
}




