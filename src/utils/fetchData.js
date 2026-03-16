const token = localStorage.getItem("jwtToken");

export const getOptions = {
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${token}`
    }
};

export const postOptions = {
    method: 'POST',
    header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}



export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
    }
};



export const fetchGetData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();

    return data
}

export const fetchPostData = async (url, passeddata) => {
    const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(passeddata)
  }
    const response = await fetch(url,options)
    const data = await response.json();

    return data
}