import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Esta es la pagina de la description de la pagina',
};

export default function ContactPage() {

    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    );
}