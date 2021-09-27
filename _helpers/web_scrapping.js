const cheerio = require("cheerio");

export  function handleCheerioData(html){
    const $ = cheerio.load(html)
    const title = $("title").text();
    const description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content')
    const images = $('img')
    let largest_img_dimension=0;
    let largest_img_src= '';  
    images.map(function ()
    {
        let currDimension = $(this).attr('height') * $(this).attr('width')
        if (currDimension > largest_img_dimension) {
            largest_img_dimension = currDimension
            largest_img_src = $(this).attr('src')
        }
    })
    return{title, description, largest_img_dimension, largest_img_src}
}
