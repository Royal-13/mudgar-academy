import Footer1 from '@/components/home/footer1';
import Header from '@/components/home/header';
import HostDetail from '@/components/home/host-detail';
import React from 'react';
type Props = {
    session: boolean;
};
export default function ({session}: Props) {
    return (
        <>
        <Header session={session}/>
        <HostDetail/>
        <Footer1/>
        </>
        );
};
