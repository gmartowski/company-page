import React from 'react';
import { CareerItem } from './CareerItem/CareerItem';
import { careerItems } from '../../career-items.json';
import './career.less';

export const Career = () => {
    return (
        <div className='career'>
            {
                Object.keys(careerItems).map((item) => (
                    <CareerItem logoUrl={careerItems[item].logoUrl}
                                logoAlt={careerItems[item].logoAlt}
                                logoTitle={careerItems[item].logoTitle}
                                profession={careerItems[item].profession}
                                period={careerItems[item].period}
                                responsibilities={careerItems[item].responsibilities}
                                key={item}
                    />
                ))
            }
        </div>
    );
};
