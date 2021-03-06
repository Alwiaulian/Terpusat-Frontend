import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const Makanan = (props: any) => {
	return (
		<Paper className="w-full rounded-8 shadow-none border-1">
			<div className="text-center pt-12 pb-28">
				<Typography className="text-72 leading-none text-blue">
					<Icon className="text-72">fastfood</Icon>
				</Typography>
				<Typography className="text-16" color="textSecondary">
					Makanan
				</Typography>
			</div>
		</Paper>
	);
}

export default React.memo(Makanan);
