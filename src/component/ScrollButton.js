import React, {useState} from 'react';
import { Button } from '../styles/ScrollButton.js';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} >
	<ArrowUpwardIcon  style={{'margin-top' : '-10px'}}/>
	</Button>
);
}

export default ScrollButton;
