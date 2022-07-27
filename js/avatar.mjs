const chooserFileAvatar = document.querySelector('[name="avatar"]');
const previewAvatar = document.querySelector('.ad-form-header__img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const inizializeAvatar = () => {
  chooserFileAvatar.addEventListener('change', () => {
    const file = chooserFileAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewAvatar.src = URL.createObjectURL(file);
    }
  });
};

export { inizializeAvatar };
