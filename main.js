$(document).ready(function(){

  data = $.ajax({url: 'https://nameless-earth-94324.herokuapp.com/posts',
                 data_type: 'json',
                 async: false})
          .done(function(response){
            response.forEach(function(post){
              console.log(post.created_at)
              $('#postal').append(
                `
                  <div class="row">
                    <div class="col-xs-4">
                      <div class='post_body'>
                      <div class='media-object'>${post.user.photo}</div>
                      <p class='media-body'><small>${post.body}</small></p>
                      <p><small>${post.user.name}</small></p>
                      <p><small>${post.created_at}</small></p>
                      </div>
                    </div>
                  </div>
                `
              )
            })
          })
})
