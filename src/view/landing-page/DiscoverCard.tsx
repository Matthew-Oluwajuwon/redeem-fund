import React from "react";
import {Card} from "antd";

interface CardProps {
    image: any;
    title: string;
    flag: any;
    category: string;
    price: string;
    percentage: any;
}

export const DiscoverCard: React.FC<CardProps> = (props: any) => {
    return (
            <Card cover={<img src={props.image} className="w-full" alt={"card-img"} />} className="w-[90%] h-[21rem] border-b-8 border-b-[#3EB489]">
                <h1 className='font-[poppinsMedium] font-bold text-black'>{props.title}</h1>
                <span className='flex justify-between py-5'>
                   <img src={props.flag} alt="flag" />
                <h3>{props.category}</h3>
                </span>
                <span className='flex justify-between'>
                    <p className='font-bold'>{props.price}</p>
                <p>{props.percentage}</p>
                </span>

            </Card>
    )
}