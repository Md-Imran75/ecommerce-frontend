'use client'
import { useRouter } from "next/router";

export default function Logout() {
    const router = useRouter();

    localStorage.setItem('user', '');

    // Wait for the local storage operation to complete, then redirect
    localStorage.removeItem('user', () => {
        router.push('/products');
    });

    return null; // You can return null or any other component here
}
