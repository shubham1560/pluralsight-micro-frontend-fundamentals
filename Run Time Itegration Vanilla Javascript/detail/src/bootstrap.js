import data from '../../db/data.json';
import _ from 'lodash';

let detail = '';

var list_id = 1
if (getParameterByName("list_id")) {
    list_id = getParameterByName("list_id");
}

var item_detail = _.find(data.list, {id: Number(list_id)}).detail

detail += `<div>${item_detail}</div>`;

document.getElementById('dev-detail').innerHTML = detail


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}