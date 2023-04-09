import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    btnLogout: {
        height: 50,
        width: 190,
        backgroundColor: '#1A1882',
        '&:hover':{
            backgroundColor: '#283593'
        },
        fontSize: 15,
        fontWeight: "700",
    },
    btnBottom: {
        marginTop: 0.5,
        height: 50,
        width: 450,
        backgroundColor: 'white',
        color: '#1A1882',
        border: '2px solid #1A1882',
        '&:hover':{
            backgroundColor: '#1A1882',
            color: 'white',
        },
        fontSize: 16,
        fontWeight: "700",
    },
    btnItem: {
        color: 'white',
        fontSize: 18,
        maxWidth: '35px', 
        maxHeight: '35px', 
        minWidth: '35px', 
        minHeight: '35px',
    },
    formLogin: {
        marginBottom: '25px', 
        width: '55ch',
    },
    btnForm: {  
        marginTop: '20px',
        marginBottom: '40px',
        height: 50,
        width: 450,
        backgroundColor: '#1A1882',
        '&:hover':{
            backgroundColor: '#283593'
        },
        fontSize: 16,
        fontWeight: "700",
    },
    labelForm: {
        color: '#1A1882',
        "&.Mui-focused":{
            color: '#1A1882',
            fontWeight: "700"
        },
        fontWeight: "500",
        fontSize: 20,
    }



}))

export default useStyles
