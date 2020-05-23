/**
 * Code de gestion du formulaire
 */

// Ici on récupère les élements classes du formulaire et des input
	 let myForm = document.getElementsByClassName('validate-input'),
 	 	 motDePasse = document.getElementsByClassName('input100')[0],
 	 	 mail = document.getElementsByClassName('input100')[1],
 	 	 msg = document.getElementsByClassName('message')
 	 	 btnValid = document.getElementsByClassName('login100-form-btn');


 	 	 //On ajoute des expressions régulière
 	 	 mailRegex = /^[a-zA-Z0-9.-_]+@[a-z0-9]+\.+[a-z]{2,6}$/;
		 passRegex = new RegExp ('^[0-9]{4,8}$ ');


		 // On ajoute un événement clic au document
		 document.addEventListener("click", function(e){
			if(myForm.value == true){
				this.myForm.style.BackgroundColor = '#a7ff3342';
			} else{

			}

			})

		 	// on verifie après le clic sur l'nevoie
			document.addEventListener("click", function(e){
				if(mailRegex.test(btnValid.value) == false){
					alert('Remplissez tous les champs');
					// this.msg.innerText ='vous avez mal renseigné ce champ';
					// this.msg.style.color = 'red';	
				}	else{
					alert('vous avez reussis')
				}
			})

			// ici c'est la vérification sur l'adresse mail avec les expressions
			document.addEventListener("click", function(e){
				// les carctères enregistrés dans RegExp, verifier s'ils sont mal reportés
				if(mailRegex.test(mail) == false){
					this.msg.innerText ='votre adresse n'est pas bien renseigné;
					this.msg.style.color = 'red';
				} else{

				}
			})

			document.addEventListener("click", function(e){
				// les carctères enregistrés dans RegExp, verifier s'ils sont mal reportés
				if(passRegex.test(motDePasse) == false){
					this.msg.innerText ='Ne rentrez que des chiffres';
					this.msg.style.color = 'red';
				} else{

				}
			})





		 

