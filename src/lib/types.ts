import { z } from 'zod';

export const SignUpSchema = z
	.object({
		username: z
			.string()
			.min(3, 'Username must be at least 3 characters long.')
			.max(50, 'Username must be at most 50 characters long.')
			.regex(
				/^[a-zA-Z0-9_]+$/,
				'Username must only contain letters, numbers, and underscores.'
			),
		email: z
			.string()
			.email('Invalid email address.')
			.max(75, 'Email must be at most 75 characters long.'),
		password: z
			.string()
			.min(8, 'Password must be at least 8 characters long.')
			.max(50, 'Password must be at most 50 characters long.'),
		confirmPassword: z.string(),
		role: z.enum(['user', 'employee', 'admin']),
	})
	.refine(data => data.password !== data.confirmPassword, {
		message: 'Passwords do not match.',
		path: ['confirmPassword'],
	});

export const LoginSchema = z.object({
	email: z
		.string()
		.email('Invalid email address.')
		.max(75, 'Email must be at most 75 characters long.'),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters long.')
		.max(50, 'Password must be at most 50 characters long.'),
});
