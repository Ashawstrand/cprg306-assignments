"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Login failed:", error);
        }
        };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            {!user ? (
                <>
                <h1 className="text-2xl font-bold mb-4">Welcome to Shopping List</h1>
                <button
                    onClick={handleLogin}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                    Login with Github
                    </button>
                    </>
            ) : (
                <>
                <p className="text-lg mb-2">
                    Welcome, {user.displayName} ({user.email})
                </p>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mb-4"
                    >
                        Logout
                        </button>
                        <Link
                            href="/shopping-list"
                            className="text-blue-600 underline hover:text-blue-800"
                            >
                                Go to Shopping List
                                </Link>
                                </>
            )}
        </main>
    );
}