const chooserFileAvatar = document.querySelector('[name="avatar"]');
const previewAvatar = document.querySelector('.ad-form-header__img');
const chooserFilePhoto = document.querySelector('[name="images"]');
const previewPhoto = document.querySelector('.ad-form__realty-photo');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const onImgChange = (chooser, preview) => {
  const file = chooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

const inizializeAvatar = () => {
  chooserFileAvatar.addEventListener('change', () => {
    onImgChange(chooserFileAvatar, previewAvatar);
  });

  chooserFilePhoto.addEventListener('change', () => {
    onImgChange(chooserFilePhoto, previewPhoto);
  });
};

export { inizializeAvatar };
