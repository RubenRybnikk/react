import React from 'react';
import Menu from './Menu';
import Album from './Album';
import img from './pics/lightingUpChristmas.jpg';


const Site = () => {
	return (		
		<div>
			<Menu />
			<img className="img" src={img} />
			<Album />
		</div>
		);
}

export default Site;