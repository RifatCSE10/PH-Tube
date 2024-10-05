// Load categories... 
const loadData = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=> displayData(data.categories))
    .catch((error)=> console.log(error))
}

// Display categories...
const displayData = (categories)=>{
    const categoriContainer = document.getElementById('categories');
    categories.forEach((item)=>{
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        categoriContainer.append(button);
    });
}


// Load videos... 
const loadVideos = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=> res.json())
    .then((videos)=> displayVideos(videos.videos))
    .catch((error)=> console.log(error))
}

// Display videos...
const displayVideos = (videos)=>{
    const videoSection = document.getElementById('videos');
    videos.forEach((video)=>{

        const videoContainer = document.createElement('div');
        videoContainer.classList = 'card card-compact';
        videoContainer.innerHTML = `
        <figure>
            <img
                src=${video.thumbnail} />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
        `;
        videoSection.append(videoContainer);
    })
}

loadData();
loadVideos();



// authors
// : 
// [{…}]
// category_id
// : 
// "1001"
// description
// : 
// "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// others
// : 
// {views: '100K', posted_date: '16278'}
// thumbnail
// : 
// "https://i.ibb.co/L1b6xSq/shape.jpg"
// title
// : 
// "Shape of You"
// video_id
// : 
// "aaaa"