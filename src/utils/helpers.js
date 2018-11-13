import axios from 'axios';

export async function verifyAuth(){
  return await axios.post('', {
    token: localStorage.getItem("token")
  }).then(res => {
    if(res.status === 200) return true;
    return false;
  }).catch(err => console.log(err));
}
