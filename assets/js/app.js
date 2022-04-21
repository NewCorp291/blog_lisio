import '../css/app.scss';
const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

import {Dropdown} from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    enableDropdowns();
});

const enableDropdowns = () => {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    dropdownElementList.map(function (dropdownToggleEl) {
        return new Dropdown(dropdownToggleEl)
    });
}

