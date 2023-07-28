import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext.js";

import { Footer } from "./component/footer.js";
import AddContact from "./views/AddContact.js";
import Contacts from "./views/Contacts.js";


//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
			<ScrollToTop>
					<Routes>
						<Route path="/" element={<Contacts />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/addContact" element={<AddContact />} />
						<Route path="/edit/:id" element={<AddContact />} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Routes>
					<Footer />
			</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
