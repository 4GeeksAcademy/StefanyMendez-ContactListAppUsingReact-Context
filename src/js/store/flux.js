const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				urlApi: "https://assets.breatheco.de/apis/fake/contact",
				agenda: "StefanyMendez",
				contacts:null,
				id_contact:null,
				full_name: "",
				email: "",
				address:"",
				phone:"",
				showModal: false
		},
		actions: {
			getContactsByAgenda: () => {
				const store = getStore();
				fetch(`${store.urlApi}/agenda/${store.agenda}`)
				.then(response => response.json())
				.then(result => {
					console.log("...Loading");
					setStore({contacts:result});
				});
				
			},
			getContactByID: id => {
				setStore({id_contact : null})
				const store = getStore();
				fetch(`${store.urlApi}/${id}`)
				.then(response => response.json())
				.then(result => setStore({id_contact:result}))
			},
			handleDelete: id =>{
				getActions.getContactByID(id)
				setStore({showModal:true})
			},
			deleteID: ()=>{
				setStore({id_contact:result})

			},
			deleteModal : ()=>{
				setStore({showModal:false})
			},
			deleteContactsByID:id =>{

			},
			saveContact: history =>{

			},
			updateContact: (e, id, history)=>{

			},
		
			handleChange: e =>{
				setStore({[e.target.name]: e.target.value});
			}
			
		}
	};
};

export default getState;
