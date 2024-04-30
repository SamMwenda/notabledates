import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { fontHeader } from "@/config/fonts";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className={`${fontHeader.className} inline-block max-w-lg text-center justify-center`}>
				<h1 className={title({ class: "mt-4" })}>
					Sun 28 Apr 14:28
				</h1>
				
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				
			</div>

		</section>
	);
}
