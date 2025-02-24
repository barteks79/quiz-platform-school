import SignUpForm from '@/components/forms/sign-up-form';
import Link from 'next/link';

export default function SignUpPage() {
	return (
		<div className="flex flex-col gap-4 sm:gap-5">
			<div className="flex flex-col items-center gap-1 text-center">
				<h1 className="text-2xl font-bold">Create an account</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Fill the form to create new account
				</p>
			</div>
			<SignUpForm />
			<div className="text-center text-sm">
				Already have an account?{' '}
				<Link href="/sign-in" className="underline underline-offset-4">
					Sign in
				</Link>
			</div>
		</div>
	);
}
