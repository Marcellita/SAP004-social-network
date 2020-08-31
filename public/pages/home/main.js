import {
  createPost,
  readPosts,
  deletePost,
  editAndSavePost,
  likePosts,
  signOut,
  postImage,
} from './data.js';

export const home = () => {
  const container = document.createElement('div');



  container.innerHTML = `
    <div class="btn-back">
    </div>
    <div>
    <img class="wave" src="imagens/perfil-avatar.png">
    </div>
    <div class = 'container'>
    <input id='post' class='re-post' type='text'>
      <button id='photo' class='btn-social'>Photo</button>
      <button id='send-post' class='btn-social'>Compartilhar</button>
    </div>
    <div class='all-posts'>
      <input id='post' class='post' type='text'>
      <button id='photo' class='btn-create'>Curtida</button>
      <button id='send-post' class='btn-create'>Compartilhar</button>
    </div>
    <div id='all-posts'></div>
  `;

  const name = container.querySelector('#post');
  const repost = container.querySelector('#re-post');
  const greetingBtn = container.querySelector('#send-post');
  const greetingMessage = container.querySelector('#all-posts');


  photo.addEventListener('change', (event) => {
    let file = event.target.files[0];
    preview.src = URL.createObjectURL(file);
    postImage(photo, validarUrl);
  });

  const validarUrl = (url) => {
    preview.src = '';
    preview.src = url;
  };

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value, privacyPost.value, preview.src);
    preview.src = '';
    post.value = '';
    allPosts.innerHTML = '';
    readPosts(postTemplate, postTemplateUser);
  });

  exit.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
  });

  const postTemplate = (post) => {
    const now = new Date();
    const spaceTemplate = document.createElement('div');

    const validaImg = () => {
      if (post.data().imagem !== 'https://social-network-39e83.web.app/') {
        return `<img src='${post.data().imagem}' class='div-img-post'></img>`;
      } else {
        return `<img src='' class='div-img-post'></img>`;
      }
    };

    const validaNome = () => {
      if (post.data().name === '') {
        return `<div id='div-name' class='div-name'>${post.data().email}</div>`;
      } else {
        return `<div id='div-name' class='div-name'>${post.data().name}</div>`;
      }
    };

    spaceTemplate.innerHTML = `
  
  <div id='div-post' class='div-post'>
  <div id='container-name' class='container-name'>
  ${validaNome()}
  </div>
  <div class ='div-postado' data-id='${post.id}'>
  ${validaImg()}
  <textarea data-id='${post.id}' class='text-post' disabled>${
      post.data().text
    }</textarea>
  </div>
  <div id='div-container-btn' class='div-container-btn'>
  <div id='div-btn' class='div-btn'>
  <button data-id='${post.id}' class='curtida icon-post'>❤️${
      post.data().likes
    }</button>
  <button data-id='${post.id}' class='comentar icon-post'>💬${
      post.data().coments
    }</button>
  </div>
  <div id='div-date' class='div-date'>
  <p id='privaty' class='privaty'>${post.data().privacy}</p>
  <p id='date' class='date'>${now.getDate()}/${now.getMonth()}/${now.getFullYear()}</p>
  </div>
  </div>
  </div>
  `;

    allPosts.appendChild(spaceTemplate);

    const btnLikes = spaceTemplate.querySelector(
      `.curtida[data-id='${post.id}']`
    );

    btnLikes.addEventListener('click', () => {
      const id = btnLikes.dataset.id;
      likePosts(id, post.data().likes);
      allPosts.innerHTML = '';
      readPosts(postTemplate, postTemplateUser);
    });
  };

  const postTemplateUser = (post) => {
    const now = new Date();
    const spaceTemplate = document.createElement('div');

    const validaImg = () => {
      if (post.data().imagem !== 'http://localhost:5000/') {
        return `<img src='${post.data().imagem}' class='div-img-post'></img>`;
      } else {
        return `<img src='' class='div-img-post'></img>`;
      }
    };
    const validaNome = () => {
      if (post.data().name === '') {
        return `<div id='div-name' class='div-name'>${post.data().email}</div>`;
      } else {
        return `<div id='div-name' class='div-name'>${post.data().name}</div>`;
      }
    };

    spaceTemplate.innerHTML = `
  
  <div id='div-post' class='div-post'>
  <div id='container-name' class='container-name'>
  ${validaNome()}
  <div id='div-delete' class='div-delete'>
  <button data-id='${post.id}' class='save'>✔️</button>
  <button data-id='${post.id}' class='edit'>✏️</button> 
  <button data-id='${post.id}' class='delete'>❌</button>
  </div>
  </div>
  <div class ='div-postado' data-id='${post.id}'>
  ${validaImg()}
  <textarea data-id='${post.id}' class='text-post' disabled>${
      post.data().text
    }</textarea>
  </div>
  </div>
  <div id='div-container-btn' class='div-container-btn'>
  <div id='div-btn' class='div-btn'>
  <button data-id='${post.id}' class='curtida icon-post'>❤️${
      post.data().likes
    }</button>
  <button data-id='${post.id}' class='comentar icon-post'>💬${
      post.data().coments
    }</button>
  </div>
  <select class='select-private' name='input-private'>
    <option id='option-public' class='public' selected>Público</option> 
    <option id='option-private' class='private'>Privado</option>
  </select>
  <div id='div-date' class='div-date'>
  <p class='privaty'>${post.data().privacy}</p>
  <p id='date' class='date'>${now.getDate()}/${now.getMonth()}/${now.getFullYear()}</p>
  </div>
  </div>
  </div>
  `;

    allPosts.appendChild(spaceTemplate);

    const btnSave = spaceTemplate.querySelector('.save');
    const btnEdit = spaceTemplate.querySelector('.edit');
    const editText = spaceTemplate.querySelector(
      `.text-post[data-id='${post.id}']`
    );
    const selectPrivate = spaceTemplate.querySelector('.select-private');
    const btnDelete = spaceTemplate.querySelector(
      `.delete[data-id='${post.id}']`
    );
    const btnLikes = spaceTemplate.querySelector(
      `.curtida[data-id='${post.id}']`
    );
    const btnComentar = spaceTemplate.querySelector(
      `.comentar[data-id='${post.id}']`
    );
    const divDate = spaceTemplate.querySelector('.div-date');

    btnDelete.addEventListener('click', (event) => {
      event.preventDefault();
      const id = btnDelete.dataset.id;
      deletePost(id);
      allPosts.innerHTML = '';
      readPosts(postTemplate, postTemplateUser);
    });
    btnEdit.addEventListener('click', (event) => {
      event.preventDefault();
      editPost();
    });

    btnSave.addEventListener('click', (event) => {
      event.preventDefault();
      savePost();
    });

    const editPost = () => {
      editText.disabled = false;
      editText.style.color = 'rgba(14, 60, 89, 1)';
      editText.style.background = 'white';
      btnSave.style.display = 'inline-block';
      btnLikes.style.display = 'none';
      btnComentar.style.display = 'none';
      divDate.style.display = 'none';
      selectPrivate.style.display = 'inline-block';
    };

    const savePost = () => {
      editText.disabled = true;
      editText.style.color = 'wheat';
      editText.style.background = 'rgba(191, 87, 26, 1)';
      btnSave.style.display = 'none';
      btnLikes.style.display = '';
      btnComentar.style.display = '';
      divDate.style.display = '';
      selectPrivate.style.display = 'none';
      const id = editText.dataset.id;

      editAndSavePost(id, editText.value, selectPrivate.value);
      allPosts.innerHTML = '';
      readPosts(postTemplate, postTemplateUser);
    };
  };
  readPosts(postTemplate, postTemplateUser);

  return container;
};