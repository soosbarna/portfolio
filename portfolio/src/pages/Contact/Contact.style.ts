export const contactStyles = {
	sectionStyles: {
		width: '100%',
		flex: 1,
		display: 'flex',
		flexDirection: 'row' as const,
		gap: '2rem',
		padding: '0 2rem',
	},

	leftSection: {
		flex: '0 0 20%',
		display: 'flex',
		flexDirection: 'column' as const,
		gap: '2rem',
	},

	centerSection: {
		flex: '0 0 60%',
		display: 'flex',
		flexDirection: 'column' as const,
		gap: '2rem',
	},

	rightSection: {
		flex: '0 0 20%',
		display: 'flex',
		flexDirection: 'column' as const,
		gap: '2rem',
	},

	sectionTitleStyles: {   
		fontWeight: 700,
		fontSize: '1.2rem',
		marginBottom: '0.5rem',
		textTransform: 'uppercase' as const,
	},

	sectionDescStyles: {
		fontWeight: 400,
		fontSize: '1rem',
		marginBottom: '0.5rem',
		maxWidth: 400,
		lineHeight: 1.6,
	},

	underlinelink: {
		position: "relative",
		display: "inline-block",
		textDecoration: "none",
		color: "black",
		fontWeight: 500,
	} as const,
		
	underline: {
		position: "absolute",
		left: 0,
		bottom: 0,
		height: 2,
		width: "100%",
		backgroundColor: "black",
		transformOrigin: "left",
	} as const,
}
