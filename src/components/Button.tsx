import { Button as MuiButton, ButtonProps } from '@mui/material';

export default function Button(props: ButtonProps) {
    return (
        <MuiButton
            variant='outlined'
            size='small'
            sx={{
                textTransform: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                px: 2,
                py: 1,
                boxShadow: 'none',
                '&:hover': {
                    boxShadow: 'none'
                },
            }}
            {...props}
        />
    );
}