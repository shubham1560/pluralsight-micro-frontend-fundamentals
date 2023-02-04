import _ from 'lodash';

let appName = "List Application";
import data from '../../db/data.json';

let size = _.size(data.list);

for(let i=0; i<3; i++){
    appName += `<div onclick="javascript:window.location.href='?list_id=${data.list[i].id}'">${data.list[i].title}</div>`
}
appName += `Size: ${size}`;


document.getElementById("dev-list").innerHTML = appName