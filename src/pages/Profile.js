import React, { useState } from 'react';
import ProfileText from '../components/profile/index';

export default function Profile() {

    const data= [
            {
                'img' : 'https://media.tenor.com/yskj0PnyEpoAAAAC/borpynino.gif',
                'nama' : 'Ruli Dharmawan',
                'nim' : 21120121140089
            },
            {
                'img' : 'https://media.tenor.com/nv-2l7K8fjwAAAAM/deus-abenoe.gif',
                'nama' : 'Khrisna',
                'nim' : 21120121100000
            },
            {
                'img' : 'https://media.tenor.com/FZVNprCJK5IAAAAj/razze98-roblox.gif',
                'nama' : 'Fauzan Ramadhan',
                'nim' : 21120121100000
            },
            {
                'img' : 'https://media.tenor.com/zPD0pe9cROQAAAAj/yes.gif',
                'nama' : 'Rifqy',
                'nim' : 21120121100000
            }
        ]

    return(
        <div className='profile-container'>
            {data.map((item, index) => {
                    return (
                        <ProfileText data={item} key={index}/>
                    );
                })}
        </div>
    )
}