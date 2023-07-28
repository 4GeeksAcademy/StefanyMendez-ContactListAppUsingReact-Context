const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlApi: "https://assets.breatheco.de/apis/fake/contact",

			agenda: "StefanyMendez",
			id: null,
			full_name: "",
			email: "",
			address: "",
			phone: null,

			allContacts: [],

			id_contact: null,
			showModal: false
		},
		actions: {
			getContactsByAgenda: () => {
				const store = getStore();
				setStore({ allContacts: JSON.parse(localStorage.getItem("contacts")) == undefined ? [] : JSON.parse(localStorage.getItem("contacts")) })

				/*fetch(`${store.urlApi}/agenda/${store.agenda}`)
									.then(response => response.json())
									.then(result => {
						console.log("...Loading");
						setStore({ contacts: result });
									}); */
			},
			getContactByID: id => {
				setStore({ id_contact: null })
				const store = getStore();

				store.allContacts.map((item, index) => {
					if (item.id == id) {
						setStore({ id_contact: item })
					}
				})

				/* setStore({id_contact: item})
				console.log(store.id_contact); */

				/* 				fetch(`${store.urlApi}/${id}`)
									.then(response => response.json())
									.then(result => setStore({ id_contact: result })) */
			},
			handleDelete: id => {

				getActions().getContactByID(id)
				setStore({ showModal: true })

			},
			deleteID: () => {
				setStore({ id_contact: [] })

			},
			deleteModal: () => {
				setStore({ showModal: false })
			},
			deleteContactsByID: id => {
				const store = getStore()
				getActions().deleteModal()
				setStore({ allContacts: store.allContacts.filter(contact => contact.id !== id) })
				setStore({ id_contact: [] })
				localStorage.setItem("contacts", JSON.stringify([...store.allContacts]));
			},
			saveContact: () => {

				const store = getStore();

				const contact = {
					agenda: store.agenda,
					id: uuid.v4(),
					full_name: store.full_name,
					email: store.email,
					address: store.address,
					phone: store.phone
				}
				setStore({ allContacts: [contact, ...store.allContacts] })

				localStorage.setItem("contacts", JSON.stringify([...store.allContacts]));

			},
			updateContact: (e, id) => {
				const store = getStore();
				let contact = {
					agenda: store.agenda,
					id: id,
					full_name: e.target.full_name.value,
					email: e.target.email.value,
					address: e.target.address.value,
					phone: e.target.phone.value
				}
				store.allContacts.map((item, index) => {
					if (item.id == id) {
						setStore(store.allContacts[index] = contact)
						localStorage.setItem("contacts", JSON.stringify([...store.allContacts]));
						e.target.full_name.value = ""
						e.target.email.value = ""
						e.target.address.value = ""
						e.target.phone.value = ""
					}
				})
			},

			handleChange: e => {
				setStore({ [e.target.name]: e.target.value });
			}

		}
	};
};

export default getState;
