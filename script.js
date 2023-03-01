const posts=[
  {title:'post one',body:'This is post one'},
  {title:'post two',body:'This is post two'}
];

let lastActivityTime=new Date();

function createPost(post){
  return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
      posts.push(post);
      resolve();
    },2000);
  }).then(updateLastUserActivityTime);
}

function getPosts(){

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let output='';
      posts.forEach((post,index)=>{
        output+=`<li>${post.title}</li>`;
        console.log(post);
      });
      document.body.innerHTML=output;
      resolve();
    },1000);
  })
  
}

function lastUpdateTime(){

  return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
      console.log(lastActivityTime);
      resolve();
    },0);
    
  })
}
function updateLastUserActivityTime(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      lastActivityTime=new Date();
      resolve();
    },1000);
  });
}

function deletePost(){
  
  return new Promise((resolve,reject)=>{
    posts.pop();
    resolve();
  })
}

createPost({title:'post three',body:'This is post three'}).then(getPosts).then(lastUpdateTime).then(deletePost).then(getPosts);