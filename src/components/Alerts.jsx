import {styled} from "@mui/material/styles"
import Alert from '@mui/material/Alert'

const allertStyle = {
    color: 'white',
    fontWeight: "700",
    fontSize: 14,
    backgroundColor: '#d32f2f',
    width: '65%',
    marginBottom: '10px',
}

export const AlertAuth = styled(Alert)(() => ({
    ...allertStyle,
}));