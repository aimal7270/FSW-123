import { useState, useEffect } from 'react';


export default function Giphy({firstsearch}) {
    
    const [imgSrc, setImgSrc] = useState ('');
    const [alt, setAlt] = useState('');

    const getGif = (query = firstsearch) => {
        const encodeQuery = encodeURIComponent(query);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=zDtmxtvjhjmrhVoUlr5jut2TGvPncWhz&tag=${encodeQuery}`
        
        fetch(url, { method: 'GET',
        }).then(function(response){
            if(response.ok){
                return response.json()
            }
            return Promise.reject(response)
        }).then(function({data}){
            console.log(url)
            setImgSrc(data.fixed_height_downsampled_url)
            console.log(data.fixed_height_downsampled_url)
            setAlt(data.title)
        }).catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getGif(e.target.query.value)
        console.log(e.target.query.value)
    }

    useEffect(getGif, [firstsearch]);

    return(
          <div id="inputs">
                <h1>GIPHY SEARCH</h1>
                <form onSubmit={handleSubmit}>
                    <input type ="text" name='query' id="input-box" />
                    <button type="submit" id="button"> Search </button>
                </form>
            <div>
                <img src={imgSrc} alt={alt}/>
            </div>
          </div>
      )
}