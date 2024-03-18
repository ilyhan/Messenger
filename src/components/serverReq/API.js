export const fetchMessages = async (user, date) => {
try {
  let req = '';
  if(user){
    req = `?author=${user}`
  }
  if(date){
    if(req !== '') {req = req + `&date.month=${Number(date.slice(-2))}&date.year=${date.slice(0,4)}`}
    else {req = `?date.month=${Number(date.slice(-2))}&date.year=${date.slice(0,4)}`}
  }

  //http://localhost:3001/messages?date.month_gte=2&date.month_lte=3&date.day_gte=16/date.day_lte=17
    const response = await fetch(`http://localhost:3001/messages${req}`);
    const data = await response.json();
    return (data);
  } catch (error) {
    console.log('error');
    return[];
  }
  //?minutes_gte=15&minutes_lte=18
}

export const fetchPost = async (url, data) => {
  try {
  const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
  })
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
      return response.ok;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
}