import React, { useEffect } from 'react'
import styled from 'styled-components'

import Skillbar from 'react-skillbars';

function HealthBar (props: any) {
	const metrics = [
		{ type: "HP", level: 50, color: {
			bar: "#27ae60",
			title: {
				background: "#27ae60"
			}
		}},
		{ type: "Mana", level: 80, color: {
			bar: "#2980b9",
			title: {
				background: "#2980b9"
			}
		} },
	]

	const circleContainer = (() => {
		let circleContainer = document.createElement('div');
		circleContainer.classList.add('circle-container');
		let circle = document.createElement('div');
		circle.classList.add('circle-container');
		circleContainer.appendChild(circle);
		return circleContainer;
	})
	
	useEffect(() => {
		let skillbars = document.querySelectorAll('.skillbar-bar');
		skillbars.forEach(skillbar => {
			skillbar.classList.remove('collapsed')
			let container = document.createElement('div');
			container.classList.add('circle-space');
			for(let i = 1; i <= 100; i++) {
				container.appendChild(circleContainer());
			}
			skillbar.appendChild(container);
		})
		
	},[]);

	return (
		<Container>
			<Skillbar skills={metrics} animationDuration={2000} />
		</Container>
	);
}

const Container = styled.div``;

export { HealthBar }