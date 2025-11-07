'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import logo from '@/assets/images/logo.png'
import profile from '@/assets/images/profile.png'
import { FaGoogle } from 'react-icons/fa'

export default function Nav() {
	const [open, setOpen] = useState(false)
	const { data: session, status } = useSession()

	const handleGoogleSignIn = () => {
		signIn('google', { callbackUrl: '/' })
	}

	const handleSignOut = () => {
		signOut({ callbackUrl: '/' })
	}

	return (
		<nav className="bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					<div className="flex items-center">
						<Link href="/" className="flex items-center gap-3">
							<Image src={logo} alt="BHome logo" width={40} height={40} className="object-contain" />
							<span className="text-2xl font-bold text-gray-800 hidden sm:inline">BHome</span>
						</Link>
					</div>

					<div className="hidden md:flex md:items-center md:space-x-6">
						<Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
						<Link href="/properties" className="text-gray-700 hover:text-gray-900">Properties</Link>
						<Link href="/properties/add" className="text-gray-700 hover:text-gray-900">Add</Link>
					</div>

					{/* Right side - profile avatar on medium+ screens */}
					<div className="hidden md:flex md:items-center md:space-x-4">
						{status === 'loading' ? (
							<div className="h-9 w-20 bg-gray-200 animate-pulse rounded"></div>
						) : session ? (
							<>
								<Link href="/messages" className="text-gray-700 hover:text-gray-900">
									Messages
								</Link>
								<Link href="/properties/saved" className="text-gray-700 hover:text-gray-900">
									Saved
								</Link>
								<Link href="/profile" className="flex items-center">
									<Image 
										src={session.user?.image || profile} 
										alt="Profile" 
										width={36} 
										height={36} 
										className="rounded-full object-cover" 
									/>
								</Link>
								<button
									onClick={handleSignOut}
									className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
								>
									Sign out
								</button>
							</>
						) : (
							<button
								onClick={handleGoogleSignIn}
								className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
							>
								<FaGoogle className="text-red-500" />
								<span>Sign in</span>
							</button>
						)}
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setOpen(!open)}
							aria-label="Toggle navigation"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							<svg className={`${open ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							<svg className={`${open ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu, show/hide based on menu state. */}
			<div className={`${open ? 'block' : 'hidden'} md:hidden border-t border-gray-100`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
					<Link href="/properties" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Properties</Link>
					<Link href="/properties/add" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Add</Link>
					
					{status === 'loading' ? (
						<div className="h-10 bg-gray-200 animate-pulse rounded mx-3"></div>
					) : session ? (
						<>
							<Link href="/messages" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Messages</Link>
							<Link href="/properties/saved" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Saved</Link>
							<Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Profile</Link>
							<button 
								onClick={handleSignOut} 
								className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
							>
								Sign out
							</button>
						</>
					) : (
						<button 
							onClick={handleGoogleSignIn} 
							className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
						>
							<FaGoogle className="text-red-500" />
							<span>Sign in with Google</span>
						</button>
					)}
				</div>
			</div>
		</nav>
	)
}

