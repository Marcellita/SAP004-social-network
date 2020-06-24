// import { readPosts,createPost} from '../home/data.js'

import {commentNew} from './data.js'
export const comment = () => {
        // const now = new Date();
        const container = document.createElement('div');
        container.innerHTML = `
        
        <div id='div-post' class='div-post'>
        <div id='container-name' class='container-name'>
        </div>
        
        <textarea  id='post-coment'  class='text-post' placeholder='Comentários'></textarea>
        <div id='div-container-btn' class='div-container-btn'>
        <div id='div-btn' class='div-btn'>
        <button id='send-post' class='send-post icon-post'>✈️</button>
        <div id='all-comment' class='all-comment'></div>
        </div>
        </div>
        </div>

        `;


        // const editText = container.querySelector(
        //   `.text-post`
        // );
        const postComment = container.querySelector('#post-coment');
        const allComment = container.querySelector('#all-comment');
        const sendBtn = container.querySelector('#send-post');
        sendBtn.addEventListener('click', (event) => {
          event.preventDefault();
          commentTemplateUser(postComment.value)
          newComment();
          // createPost(post.value);
          // post.value = '';
          // allPosts.innerHTML = '';
          // createPost();
          // postImage();
          // editAndSavePost(editText.value);
          // editPost();
          // savePost();
        });
        const newComment = () => {
          const comments = postComment.value;
          commentNew(comments);
        }
        

const commentTemplateUser = (post) => {
    const spaceTemplate = document.createElement('div');
    spaceTemplate.innerHTML = `
    <div id='div-post' class='div-post'>
    <div id='container-name' class='container-name'>
    </div>
    <textarea  id='post'  class='text-post'></textarea>
    <div id='div-container-btn' class='div-container-btn'>
    <div id='div-btn' class='div-btn'>
    <div id='div-delete' class='div-delete'>
        <button class='save'>✔️</button>
        <button class='edit'>✏️</button> 
        <button data-id='${post.id} class='delete'>❌</button>
        </div>
    <div id='all-posts' class='all-posts'></div>
    </div>
    </div>
    </div>
    `;
    allComment.appendChild(spaceTemplate);
    const btnDelete = spaceTemplate.querySelector(
      `.delete[data-id='${post.id}']`
    );
    btnDelete.addEventListener('click', (event) => {
      event.preventDefault();
      const id = btnDelete.dataset.id;
      deletePost(id);
      allPosts.innerHTML = '';
      readPosts(commentTemplateUser);
      commentNew();
    });
}
          return container;
        };



  
  

  
  // const btnDelete = container.querySelector(
  //   `.delete[data-id='${post.id}']`
  // );

// btnDelete.addEventListener('click', (event) => {
//   event.preventDefault();
//   const id = btnDelete.dataset.id;
//   deletePost(id);
//   allPosts.innerHTML = '';
//   readPosts(postTemplate, postTemplateUser);
  
// });
