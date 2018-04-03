'use strict';

var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

var arrObj = [];
createObjArray();

function createObjArray() {
  for (var i = 0; i < 25; i++) {
    arrObj.push(createObj(i));
  }
}

function createObj(currentValue) {
  var obj = {
    'url': 'photos/' + currentValue + '.jpg',
    'likes': getRandomNumber(15, 200),
    'comments': COMMENTS[getRandomNumber(0, COMMENTS.length)],
  };
  return obj;
}

function getRandomNumber(startValue, endValue) {
  return Math.floor(Math.random() * endValue + startValue);
}

createPhotoCard(arrObj[0]);

function createPhotoCard(item) {
  var pictureTemplate = document.querySelector('#picture-template');
  var pictureImg = pictureTemplate.querySelector('.picture > img');
  var pictureComments = pictureTemplate.querySelector('.picture-comments');
  var pictureLikes = pictureTemplate.querySelector('.picture-likes');

  pictureImg.src = item.url;
  pictureComments.textContent = item.comments;
  pictureLikes.textContent = item.likes;
}
