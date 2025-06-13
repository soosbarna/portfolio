export const passionsStyles = {

	sectionStyles: {
		//display: 'flex',
		//flexDirection: 'row' as const,
		//justifyContent: 'space-between',
		//alignItems: 'flex-start',
		//gap: '3rem',
		//flex: 1,

		width: '100%',
		flex: 1,
		display: 'flex',
		flexDirection: 'column' as const,
		gap: '3rem',
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
}
