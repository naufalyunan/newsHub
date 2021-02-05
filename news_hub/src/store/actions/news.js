import axios from 'axios'


export const setNews = (news) => {
    return {
        type: 'SET_NEWS',
        payload: news
    }
}

export const setSelectedNews = (selected_news) => {
    return {
        type: 'SET_SELECTED_NEWS',
        payload: selected_news
    }
}

export const fetchNews = (url) => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: url
        })
            .then(({ data }) => {
                dispatch(setNews(data.articles))
            })
            .catch(err)
    }
}