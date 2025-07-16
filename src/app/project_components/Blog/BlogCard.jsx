import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import Link from "next/link";

function BlogCard({ cardInfo }) {
	return (
		<>
			{cardInfo.map((card, index) => (
				<Card
					key={card.id || index}
					className="w-full max-w-md flex flex-col my-8 rounded-md">
					<CardHeader>
						<div className="relative w-full h-full overflow-hidden rounded-lg">
							<Image
								src={card.image}
								alt={card.title}
								width={400}
								height={400}
								className="  object-cover"
							/>
						</div>
					</CardHeader>

					<CardContent className="flex-1 px-4">
						<CardTitle className="text-2xl font-bold mb-4 line-clamp-2">
							{card.title}
						</CardTitle>
						<CardDescription className="text-sm text-gray-600 line-clamp-3">
							{card.description}
						</CardDescription>
					</CardContent>

					<CardFooter className="px-4 pt-0 flex  gap-3">
						<div className="flex items-center gap-3 w-full">
							<div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
								<Image
									src={card.avatar}
									alt={card.author}
									fill
									className="object-cover"
								/>
							</div>
							<div className="flex-1">
								<h4 className="font-bold text-lg ">{card.author}</h4>
								<p className="text-xs text-gray-500">{card.date}</p>
							</div>
						</div>
						<Link href={"/blog/5"}>
							<Button
								type="button"
								className="bg-transparent border rounded shadow-none h-10 text-black hover:bg-transparent hover:border-black flex items-center justify-center gap-2">
								Read More <LuMoveRight className="w-4 h-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>
			))}
		</>
	);
}

export default BlogCard;
