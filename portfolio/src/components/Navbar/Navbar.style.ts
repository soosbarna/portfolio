export const navbarStyles = {
	navbar: {
		justifyContent: 'center',
		display: 'flex',
		height: '3rem',
		borderBottom: '2px solid #222',
	},

	navbarContent: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		width: '60vw',
		margin: '0 10vw',
		border: 'none',
	},

	navbarContentCentered: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},

	navbarContentSplit: {
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
	},

	navbarName: {
		fontSize: '1.25rem',
		fontWeight: 600,
		color: '#111',
		cursor: 'pointer',
	},

	navbarMenuItems: {
		display: 'flex',
		gap: '1.5rem',
		alignItems: 'center',
		margin: 0,
		padding: 0,
		listStyle: 'none',
	},
}