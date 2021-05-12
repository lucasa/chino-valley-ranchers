import Image from 'next/image'
import { Button } from '../button/Button'

const footer_content = {
    column_two: [
        {
            url: "#",
            text: "Our Story"
        },
        {
            url: "#",
            text: "Our Eggs"
        },
        {
            url: "#",
            text: "Recipes"
        },
        {
            url: "#",
            text: "News"
        },
        {
            url: "#",
            text: "Being Humane"
        }
    ],
    column_three: [
        {
            url: "#",
            text: 'Contact Cvr'
        },
        {
            url: "#",
            text: '331 W. Citrus Street, Colton, CA 92324'
        },
        {
            url: "#",
            text: '(800) 354-4503'
        },
        {
            url: "#",
            text: 'info@chinovalleyranchers.com'
        }
    ]
}


export function Footer(props) {

    return(

<footer className="bg-chinodarkblue min-h-36" aria-labelledby="footerHeading">
    <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 lg:gap-6 pt-16">
            <div className="col-span-12 lg:col-span-4 lg:pl-0 pl-8 text-center lg:text-left">
                <Image
                    src="/images/logo.png"
                    height={121}
                    width={197}
                    alt="Chino Valley Ranchers"
                />
                <div className="gap-2 flex justify-center lg:justify-start lg:items-center pt-16 pb-12 text-center lg:pl-5">
                        <div className="h-[28px]">
                            <Image
                                src='/images/youtube.png'
                                height={33}
                                width={32}
                                alt="Chino Valley Ranchers"
                            />
                        </div>
                        <div className="h-[28px]">
                            <Image
                                src='/images/facebook.png'
                                height={33}
                                width={32}
                                alt="Chino Valley Ranchers"
                            />
                        </div>
                        <div className="h-[28px]">
                            <Image
                                src='/images/twitter.png'
                                height={33}
                                width={32}
                                alt="Chino Valley Ranchers"
                            />
                        </div>
                        <div className="h-[28px]">
                            <Image
                                src='/images/instagram.png'
                                height={33}
                                width={32}
                                alt="Chino Valley Ranchers"
                            />
                        </div>
                        </div>

            </div>
            <div className="col-span-12 lg:col-span-4 lg:pl-0 pl-8 text-base text-center lg:text-left">
                <ul>
                {footer_content.column_two.map((item, index) => (
                    <li key={index} className="text-white text-5 uppercase font-din tracking-wider pb-4"><a href="{item.url}">{item.text}</a></li>
                ))}
                </ul>
            </div>
            <div className="col-span-12 lg:col-span-4 md:pt-8 pl-8 lg:pl-0 lg:pt-0 text-base text-center lg:text-left">
            <ul>
                {footer_content.column_three.map((item, index) => (
                    <li key={index} className="text-white text-5 uppercase tracking-wider font-din pb-4"><a href="{item.url}">{item.text}</a></li>
                ))}
                </ul>
                    <button className="w-1/2 mt-10 font-din tracking-wider text-[18px] mb-52 uppercase bg-chinoorange text-chinodarkblue border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium mx-auto lg:mx-0">
                        Store Locator
                    </button>
            </div>
        </div>
    </div>
</footer>
    )
}