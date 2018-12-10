const rp = require('request-promise-native');
async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`
    const res = await rp(url)
    return res
};
(async() => {
    let movies = [{
            doubanId: 3286528,
            title: '老友记 第二季',
            rate: 9.7,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2200410776.jpg'
        },
        {
            doubanId: 3286531,
            title: '老友记  第三季',
            rate: 9.7,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2195389285.jpg'
        }
    ]
    movies.map(async(movie) => {
        let movieData = await fetchMovie(movie)
        try {
            movieData = JSON.parse(movieData)
            console.log(movieData.tags)
            console.log(movieData.summary)
        } catch (error) {
            console.log(error)
        }
        //console.log(movieData)
    })
})()