import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";

export default function CardItem() {
    const data = [{
        "title": "🎉 April 28, 2019: Easter Sunday Bombings in Sri Lanka",
        "description": "On this day, multiple bombings targeted churches and hotels in Sri Lanka, resulting in a significant loss of life and injuries. The attacks were carried out by a local extremist group and were among the deadliest terrorist incidents in Sri Lanka's history.",
        "link":"http://127.0.0.1:3000/",
    }, {
        "title": "🎉 April 28, 2019: Easter Sunday Bombings in Sri Lanka",
        "description": "On this day, multiple bombings targeted churches and hotels in Sri Lanka, resulting in a significant loss of life and injuries. The attacks were carried out by a local extremist group and were among the deadliest terrorist incidents in Sri Lanka's history.",
        "link":"http://127.0.0.1:3000/",
    }, {
        "title": "🎉 April 28, 2019: Easter Sunday Bombings in Sri Lanka",
        "description": "On this day, multiple bombings targeted churches and hotels in Sri Lanka, resulting in a significant loss of life and injuries. The attacks were carried out by a local extremist group and were among the deadliest terrorist incidents in Sri Lanka's history.",
        "link":"http://127.0.0.1:3000/",
        }];
    
    return <Card
    isBlurred
        className="bg-background/60 dark:bg-default-100/50 max-w-[500px] p-4"
    >
        <CardHeader>{data[0].title}</CardHeader>
        <Divider />
        <CardBody>{data[0].description}</CardBody>
        <Divider/>
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    className="text-danger"
                    href={data[0].link}
                >
                    View news article
                </Link>
            </CardFooter>
    </Card>
}