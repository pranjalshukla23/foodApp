import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (initialTerm = "Burger") => {
	const [result, setResult] = useState({
		                                       data: {},
		                                       loading: false,
		                                       error: null,
	                                       });

	const searchRestaurant = async (id) => {
		setResult({
			           data: null,
			           loading: true,
			           error: null,
		           });
		try {
			//const response = await yelp.get(`/search/${id}`);
			setResult({
				           data: {
							   images: [
								   {
									  id: 1,
									  url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								   },
								   {
									   id: 2,
									   url:  "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

								   },
								   {
									   id: 3,
									   url:"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								   }
							   ]
				           },
				           loading: false,
				           error: null,
			           });
		} catch (error) {
			console.log(error)
			setResult({
				           data: null,
				           loading: false,
				           error: "Something went wrong",
			           });
		}
	};

	return [result, searchRestaurant];
};