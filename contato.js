function validar(){
		
    /* declarando as variáveis*/
	let usuario =document.getElementById("usuario").value
	let senha = document.getElementById("senha").value
		
    
    
    if(usuario =="" && senha ==""){
		alert('preencha os campos')
	}else{
		alert('Acesso Permitido')
        
        window.open('index.html');
		}
}
