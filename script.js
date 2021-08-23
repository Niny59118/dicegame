$(document).ready(() => {

  let newGame = $('#newGame')
  let currentScore1 = 0;
  let currentScore2 = 0;
  let globalScore1 = 0;
  let globalScore2 = 0;
  let currentPlayer1 = $('#currentPlayer1')
  let currentPlayer2 = $('#currentPlayer2')
  let globalPlayer1 = $('#globalPlayer1')
  let globalPlayer2 = $('#globalPlayer2')
  let validate1 = $('#validate1')
  let validate2 = $('#validate2')
  let dice = $('#dice')
  let imageP1 = $('#imageP1')
  let imageP2 = $('#imageP2')
  let choiceP1 = $('#choiceP1')
  let choiceP2 = $('#choiceP2')
  let roll = $('#roll')
  let hold = $('#hold')
  let start = $('#start')
  let h4 = $('h4')
  let borderPlayerOne = $('#borderPlayerOne')
  let borderPlayerTwo = $('#borderPlayerTwo')
  let roundedCircle = $('.rounded-circle')
  let player_turn = 1;
  let winner = $('#winner');
  let chooseP1 = $('#chooseP1')
  let chooseP2 = $('#chooseP2')




  $("#caractersPlayer1 .rounded-circle").mouseenter(function () {
    validate1.show();
    choiceP1.hide();
    $(this).css('background-color', '#c6fdad');
    $imgsrc1 = $(this).attr('src');
    imageP1.height(150).width(150).css('background-color', 'white').attr('src', $imgsrc1);
    imageP1.css('background-image', $imgsrc1);
  });

  $("#caractersPlayer1 .rounded-circle").mouseleave(function () {
    $(this).css('background-color', 'white');
  });

  //selection du Personnage joueur 2
  $("#caractersPlayer2 .rounded-circle").mouseenter(function () {
    validate2.show();
    choiceP2.hide();
    $(this).css('background-color', '#f7c7d3');//rose clair
    $imgsrc2 = $(this).attr('src');
    imageP2.height(150).width(150).css('background-color', 'white').attr('src', $imgsrc2);
    imageP2.css('background-image', $imgsrc2);
  });

  $("#caractersPlayer2 .rounded-circle").mouseleave(function () {
    $(this).css('background-color', 'white');
  });


  //selection du bouton valider
  validate1.click(function () {
    start.show();
    validate1.hide();
    chooseP1.hide();
    chooseP2.hide();
    $('#caractersPlayer1').hide();
  });

  validate2.click(function () {
    dice.show();
    h4.show();
    validate2.hide();
    $('#caractersPlayer2').hide();
  });

  start.click(function () {
    start.hide();
    roll.show();
    hold.show();
    validate1.hide();
    $('#caractersPlayer1').hide();
    borderPlayerOne.css('background-color', '#70A9D4'); // bleu clair
    borderPlayerTwo.css('background-color', '#EFEFEF');//gris clair
  });

  //reinitialisation d'une partie

  newGame.click(function () {
    $('#caractersPlayer1').show();
    $('#caractersPlayer2').show();
    borderPlayerOne.css('background-color', '#70A9D4'); //bleu clair
    borderPlayerTwo.css('background-color', '#F7A0B2')// rose clair
    imageP1.attr('src', 'images/pinterro.jpg');
    imageP2.attr('src', 'images/pinterro.jpg');
    roundedCircle.css('background-color', 'white')
    roll.hide();
    hold.hide();
    start.hide
    dice.hide();
    dice.attr('src', 'images/0.png');
    h4.hide();
    validate1.hide()
    validate2.hide();
    currentPlayer1.text("0");
    currentPlayer2.text("0");
    globalPlayer1.text("0");
    globalPlayer2.text("0");
    winner.css("font-size", "2rem").text("");
  });

  //lancement du dé

  roll.click(function () {

    let number = 1 + Math.floor(Math.random() * 6);
    dice.attr('src', `images/${number}.png`);


    if (player_turn == 1 && number !== 1) { //si joueur 1 lance 2,3,4,5,6
      currentPlayer1.text(currentScore1 += number);
      borderPlayerOne.css('background-color', '#70A9D4');//bleu clair
      borderPlayerTwo.css('background-color', '#EFEFEF');//gris clair

    }

    else if (player_turn == 1 && number === 1) {//si joueur 1 lance 1
      currentPlayer1.text(currentScore1 = 0);
      currentPlayer2.text(currentScore2 = 0);
      borderPlayerOne.css('background-color', '#EFEFEF');//gris clair
      borderPlayerTwo.css('background-color', '#F7A0B2')// rose clair
      player_turn = 2;
    }

    else if (player_turn == 2 && number !== 1) {//si joueur 2 lance 2,3,4,5,6
      currentPlayer2.text(currentScore2 += number);
      borderPlayerOne.css('background-color', '#EFEFEF') //gris clair
      borderPlayerTwo.css('background-color', '#F7A0B2')// rose clair
    }

    else {//si joueur 2 lance 1
      currentPlayer1.text(currentScore1 = 0);
      currentPlayer2.text(currentScore2 = 0);
      borderPlayerOne.css('background-color', '#70A9D4');//bleu clair
      borderPlayerTwo.css('background-color', '#EFEFEF');//gris clair
      player_turn = 1;
    }
  });

  //fonction hold

  hold.click(function () {
    if (player_turn == 1) {
      globalPlayer1.text(globalScore1 += currentScore1);
      currentPlayer1.text(currentScore1 = 0);
      currentPlayer2.text(currentScore2 = 0);
      borderPlayerOne.css('background-color', '#EFEFEF');//gris clair
      borderPlayerTwo.css('background-color', '#F7A0B2')// rose clair
      player_turn = 2;
    }

    else {
      globalPlayer2.text(globalScore2 += currentScore2);
      currentPlayer1.text(currentScore1 = 0);
      currentPlayer2.text(currentScore2 = 0);
      borderPlayerOne.css('background-color', '#70A9D4');//bleu clair
      borderPlayerTwo.css('background-color', '#EFEFEF');// gris clair
      player_turn = 1;
    }

    //désignation du gagnant
    if (globalScore1 >= 100) {
      dice.attr('src', 'images/nelsonp2.png');
      roll.hide();
      hold.hide();
      winner.css("font-size", "2rem").text("Congratulations player 1 !");
      borderPlayerOne.css('background-color', '#70A9D4');//bleu clair
      borderPlayerTwo.css('background-color', '#EFEFEF');// gris clair

    }

    else if (globalScore2 >= 100) {
      dice.attr('src', 'images/nelsonp1.png');
      roll.hide();
      hold.hide();
      winner.css("font-size", "2rem").text("Congratulations player 2 !");
      borderPlayerOne.css('background-color', '#EFEFEF');//gris clair
      borderPlayerTwo.css('background-color', '#F7A0B2')// rose clair

    }
  })

});