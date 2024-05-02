'use client'

import { title } from "@/components/primitives";
import { fontHeader } from "@/config/fonts";
import CardItem from "@/components/carditem";
import { useEffect, useState } from 'react';
import { Location, OpenWeatherData } from "../types";

export default function Home() {
	const [openWeatherData, setOpenWeatherData] = useState<OpenWeatherData | undefined>(undefined);
	const [location, setLocation] = useState<Location | undefined>(undefined);

	useEffect(() => {
		if ('geolocation' in navigator) {
			// Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				const { latitude, longitude } = coords;
				setLocation({ latitude, longitude });
			})
		}
	}, []);

	useEffect(() => {
		
	})
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-5 md:py-5">
			<div className={`${fontHeader.className} inline-block max-w-lg text-center justify-center`}>
				<h1 className={title({ class: "mt-4" })}>
					Sun 28 Apr 14:28
				</h1>
				
			</div>

			<div>
				<CardItem/>
			</div>

		</section>
	);
}
