/*external js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/

var grid = {
    '1': { x: '30', y: '-10'},
    '2': { x: '90', y: '-10'},
    '3': { x: '150', y: '-10'},
    '4': { x: '210', y: '-10'},
    '5': { x: '270', y: '-10'},
    '6': { x: '330', y: '-10'},
    '7': { x: '390', y: '-10'},
    '8': { x: '450', y: '-10'},
    '9': { x: '510', y: '-10'},
    '10': { x: '570', y: '-10'},

    '20': { x: '30', y: '-70'},
    '19': { x: '90', y: '-70'},
    '18': { x: '150', y: '-70'},
    '17': { x: '210', y: '-70'},
    '16': { x: '270', y: '-70'},
    '15': { x: '330', y: '-70'},
    '14': { x: '390', y: '-70'},
    '13': { x: '450', y: '-70'},
    '12': { x: '510', y: '-70'},
    '11': { x: '570', y: '-70'},

    '21': { x: '30', y: '-130'},
    '22': { x: '90', y: '-130'},
    '23': { x: '150', y: '-130'},
    '24': { x: '210', y: '-130'},
    '25': { x: '270', y: '-130'},
    '26': { x: '330', y: '-130'},
    '27': { x: '390', y: '-130'},
    '28': { x: '450', y: '-130'},
    '29': { x: '510', y: '-130'},
    '30': { x: '570', y: '-130'},

    '40': { x: '30', y: '-190'},
    '39': { x: '90', y: '-190'},
    '38': { x: '150', y: '-190'},
    '37': { x: '210', y: '-190'},
    '36': { x: '270', y: '-190'},
    '35': { x: '330', y: '-190'},
    '34': { x: '390', y: '-190'},
    '33': { x: '450', y: '-190'},
    '32': { x: '510', y: '-190'},
    '31': { x: '570', y: '-190'},

    '41': { x: '30', y: '-250'},
    '42': { x: '90', y: '-250'},
    '43': { x: '150', y: '-250'},
    '44': { x: '210', y: '-250'},
    '45': { x: '270', y: '-250'},
    '46': { x: '330', y: '-250'},
    '47': { x: '390', y: '-250'},
    '48': { x: '450', y: '-250'},
    '49': { x: '510', y: '-250'},
    '50': { x: '570', y: '-250'},

    '60': { x: '30', y: '-310'},
    '59': { x: '90', y: '-310'},
    '58': { x: '150', y: '-310'},
    '57': { x: '210', y: '-310'},
    '56': { x: '270', y: '-310'},
    '55': { x: '330', y: '-310'},
    '54': { x: '390', y: '-310'},
    '53': { x: '450', y: '-310'},
    '52': { x: '510', y: '-310'},
    '51': { x: '570', y: '-310'},

    '61': { x: '30', y: '-370'},
    '62': { x: '90', y: '-370'},
    '63': { x: '150', y: '-370'},
    '64': { x: '210', y: '-370'},
    '65': { x: '270', y: '-370'},
    '66': { x: '330', y: '-370'},
    '67': { x: '390', y: '-370'},
    '68': { x: '450', y: '-370'},
    '69': { x: '510', y: '-370'},
    '70': { x: '570', y: '-370'},

    '80': { x: '30', y: '-430'},
    '79': { x: '90', y: '-430'},
    '78': { x: '150', y: '-430'},
    '77': { x: '210', y: '-430'},
    '76': { x: '270', y: '-430'},
    '75': { x: '330', y: '-430'},
    '74': { x: '390', y: '-430'},
    '73': { x: '450', y: '-430'},
    '72': { x: '510', y: '-430'},
    '71': { x: '570', y: '-430'}
};

"use strict";

window.onload = function() {
    var box1          = document.getElementById("box1");
    var box1_position = 0;

    var box2          = document.getElementById("box2");
    var box2_position = 0;

    $("#dice1").click(function(){
        var to           = Math.floor((Math.random() * 6) + 1);
        var old_position = box1_position;
        box1_position    = box1_position + to;

        if (box1_position > 80) {
            box1_position = 80;
        }

        $("#messages").append('El jugador 1 sacó ' + to + ' y se mueve a la casilla: ' + box1_position + '<br>');

        moveTween(box1_position, old_position, box1);
    });

    $("#dice2").click(function(){
        var to           = Math.floor((Math.random() * 6) + 1);
        var old_position = box2_position;
        box2_position    = box2_position + to;

        if (box2_position > 80) {
            box1_position = 80;
        }

        $("#messages").append('El jugador 2 sacó ' + to + ' y se mueve a la casilla: ' + box2_position + '<br>');

        moveTween(box2_position, old_position, box2);
    });

    var moveTween = function(to, old_position, box){
      var new_position = {x : grid[to].x, y : grid[to].y};

        new_position.x = new_position.x + 'px';
        new_position.y = new_position.y + 'px';

        TweenLite.to(box, 0.7, new_position);  

    }
  
}