interface AnimatedImageProps {
    url: string;
    alt?: string;
}

export default function AnimatedImage({url,alt}:AnimatedImageProps) {
    return (
        <div className={"absolute inset-0 bg-cover group-hover/motion:top-1/2 group-hover/motion:right-1/2 transition-all duration-500 ease-linear"}>
            <img src={url} alt={alt} className={"w-full h-full"}/>
        </div>
    )
}