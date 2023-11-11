import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useLocation, Link } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import { hover } from "@testing-library/user-event/dist/hover";

const useStyles = createUseStyles({
	container: {
		position: "relative",
        padding: "3rem 0",
        textAlign: "center", // Ensure Breadcrumb stays centered
	},

	cardstack: {
        position: "absolute",
        left: "6rem",
        top: "1.6rem",
        transform: "translateY(-50%)",
		zIndex: 5,
		fontFamily: 'Pokemon Solid',
		transition: "transform 0.3s ease",
		'&:hover': { 
			color: "red", // Example hover color change
		},
	}
    })


function Header() {
	const classes = useStyles();
	const { pathname } = useLocation();
	const [path, getPath] = useState([]);

	useEffect(() => {
		let arrPath = [ //initiate path array // breadcrumb
			{
				name: "Login",
				url: "/blockchain",
			},
			// {
			// 	name: "Types",
			// 	url: "/blockchain/Types",
			// },
		];
		const path = pathname;
		const s = path.split("/");
		let url = "/blockchain"


		for (let i = 2; i < s.length; i++) {  // iteration, append value to array
			url += `/${s[i]}`;
			arrPath.push({
				name: s[i],
				url: url, 
			});
		}

		getPath(arrPath);
	}, [pathname]);


	return (
		<div className={classes.container}>
			<Link to = '/blockchain/Types'>
				<div className={classes.cardstack}>
					CardStack
				</div>
			</Link>
			<Breadcrumb list={path} pathname={pathname} /> 
		</div>
	);
}

export default Header;