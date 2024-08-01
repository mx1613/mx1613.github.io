import Head from 'next/head'
import React from 'react';

import { Footer } from "../footer/footer";
import { Header } from '../header/header';


interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    isDarkMode?: boolean;
  }
  

export const Layout: React.FC<LayoutProps> = ({ children, title = "Info@Michele", description = "A basic intro to myself", isDarkMode }) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
            <Header isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </>
    );

}