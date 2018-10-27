console.log('Hello World')
const image = document.getElementById('image');
console.log(image);
const cropper = new Cropper(image, {
  aspectRatio: 16 / 9,
  crop(crop) {
    console.log(crop.detail.x);
    console.log(crop.detail.y);
    console.log(crop.detail.width);
    console.log(crop.detail.height);
    console.log(crop.detail.rotate);
    console.log(crop.detail.scaleX);
    console.log(crop.detail.scaleY);
  },
});