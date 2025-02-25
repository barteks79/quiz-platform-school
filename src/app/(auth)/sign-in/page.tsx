import SignInForm from '@/components/forms/sign-in-form';
import Link from 'next/link';

export default function SignInPage() {
	return (
		<div className="flex flex-col gap-4 sm:gap-5">
			<div className="flex flex-col items-center gap-1 text-center">
				<h1 className="text-2xl font-bold">Login to your account</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Type your email and password to authenticate
				</p>
			</div>
			<SignInForm />
			<div className="text-center text-sm">
				Don&apos;t have an account yet?{' '}
				<Link href="/sign-up" className="underline underline-offset-4">
					Sign up
				</Link>
			</div>
		</div>
	);
}
