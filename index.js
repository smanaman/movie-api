



//    const url = 'index.json';

async function name() {
    try {
        const response = await fetch('index.json');
        const result = await response.json();



        let body = document.getElementById('root')
        let main = document.getElementById('roottwo')

        result.movie.forEach(element => {




            let carddiv = document.createElement('div')
            carddiv.className = 'card'
            main.appendChild(carddiv)

            let photos=document.createElement('img')
            photos.className='imges'
            photos.src=element.Poster
            carddiv.appendChild(photos)
             

            let textdiv=document.createElement('div')
            textdiv.className='text'
            carddiv.appendChild(textdiv)


            let movienamediv=document.createElement('div')
            movienamediv.className='moviename'
            movienamediv.textContent=element.Title
            textdiv.appendChild(movienamediv)


            
            let ratingdiv=document.createElement('div')
            ratingdiv.className='rating'
            textdiv.appendChild(ratingdiv)

            let ratediv=document.createElement('div')
            ratediv.className='rate'
            ratediv.textContent=`Rating :- ${element.Rated}`
            ratingdiv.appendChild( ratediv)


            
            let datediv=document.createElement('div')
            datediv.className='date'
            datediv.textContent=`ReleaseDate:-${element.Released}`
            ratingdiv.appendChild( datediv)
        
             let rundiv=document.createElement('div')
            rundiv.className='run'
            textdiv.appendChild(rundiv)


            let runtimediv=document.createElement('div')
            runtimediv.className='runtime'
            runtimediv.textContent=`Runtime:- ${element.Runtime}`
            rundiv.appendChild(runtimediv)

            let datetwotimediv=document.createElement('div')
            datetwotimediv.className='date2'
            datetwotimediv.textContent=`ReleseYear:- ${element.Year}`
            rundiv.appendChild(datetwotimediv)

          
            
        });

    } catch (error) {
        console.error(error);
    }
}
name()



