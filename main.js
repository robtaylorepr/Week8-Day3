$(document).ready(function(){

  data = $.ajax({url: 'https://nameless-earth-94324.herokuapp.com/posts',
                 data_type: 'json',
                 async: false})
          .done(function(response){
            response.forEach(function(post){
              console.log(post.created_at)
              $('#postal').append(
                `
                    <div class="col-xs-3">
                      <div class='post_body'>
                      <img src="https://vetstreet.brightspotcdn.com/dims4/default/d742db0/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F98%2Fd98250a0d311e0a2380050568d634f%2Ffile%2FGolden-Retriever-3-645mk062411.jpg" alt="Golden Retreiver Image" class="img-thumbnail", height=150px, width=300px>
                      <p class='media-body'><small>${post.body}</small></p>
                      <p><small>${post.user.name}</small></p>
                      <p><small>${moment(post.created_at).format('MMM Do YYYY, hh:mm:ss a')}</small></p>
                      </div>
                    </div>
                `
              )
            })
          })
})
