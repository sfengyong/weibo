export const saveToken = (token) =>{
	const localStorage = window.localStorage;
	try{
		localStorage.setItem("token",JSON.stringify(token))
	}catch(error){

	}
}

export const getToken =  () =>{
	const localStorage = window.localStorage;
	try{
		const token = localStorage.getItem('token');
		if(!token){
			return null;
		}
		return token;
	}catch(error){
		console.log(error);
		return null;
	}
}